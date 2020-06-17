# Modal 对话框 【交互：刘莹莹 |视觉：徐剑杰 |开发：唐志华】

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

:::demo

```js
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
    };
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false
    });
  }

onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.fm-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
}

  render() {
    return (
      <div className="components-modal-demo-basic">
            <span>基础</span>
            <Button onClick={this.showModal('modal1')}>basic</Button>
            <Modal
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal1')}
                title="Title"
                footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                afterClose={() => { alert('afterClose'); }}
                >
                <div style={{ height: 100, overflow: 'scroll' }}>
                    scoll content...<br />
                    scoll content...<br />
                    scoll content...<br />
                    scoll content...<br />
                    scoll content...<br />
                    scoll content...<br />
                </div>
            </Modal>

            <Button onClick={this.showModal('modal2')}>popup</Button>
            <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                afterClose={() => { alert('afterClose'); }}
                >
                <div>股票名称</div>
                <div>股票代码</div>
                <div>买入价格</div>
                <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </Modal>
       </div>
    );
  }
}

ReactDOM.render(<ModalExample />, mountNode);


```

```less
.popup-list .fm-list-body {
  height: 210px;
  overflow: auto;
}
```

:::

:::demo

```js
const alert = Modal.alert;

const showAlert = () => {
  const alertInstance = alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'OK', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

const App = () => (
  <div className="components-modal-demo-basic">
    <span>警告弹窗</span>
    <Button onClick={showAlert}>customized buttons</Button>

    <Button
      onClick={() =>
        alert('Delete', 'Are you sure???', [
          { text: 'Cancel', onPress: () => console.log('cancel') },
          { text: 'Ok', onPress: () => console.log('ok') },
        ])
      }
    >
      confirm
    </Button>

    <Button
      onClick={() =>
        alert('Much Buttons', <div>More than two buttons</div>, [
          { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
          { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
          { text: 'Button3', onPress: () => console.log('第2个按钮被点击了') },
        ])
      }
    >
      more than two buttons
    </Button>


    <Button
      onClick={() =>
        alert('Delete', 'Are you sure???', [
          { text: 'Cancel', onPress: () => console.log('cancel') },
          {
            text: 'Ok',
            onPress: () =>
              new Promise((resolve) => {
                // Toast.info('onPress Promise', 1);
                setTimeout(resolve, 1000);
              }),
          },
        ])
      }
    >
      promise
    </Button>

  </div>
);

ReactDOM.render(<App />, mountNode);


```


:::

:::demo
```js
const prompt = Modal.prompt;

const App = () => (
  <div className="components-modal-demo-basic">
    <span>输入弹窗</span>
    <Button onClick={() => prompt('input name', 'please input your name',
      [
        {
          text: 'Close',
          onPress: value => new Promise((resolve) => {
            // Toast.info('onPress promise resolve', 1);
            setTimeout(() => {
              resolve();
              console.log(`value:${value}`);
            }, 1000);
          }),
        },
        {
          text: 'Hold on',
          onPress: value => new Promise((resolve, reject) => {
            // Toast.info('onPress promise reject', 1);
            setTimeout(() => {
              reject();
              console.log(`value:${value}`);
            }, 1000);
          }),
        },
      ], 'default', null, ['input your name'])}
    >promise</Button>

    <Button onClick={() => prompt('defaultValue', 'defaultValue for prompt', [
      { text: 'Cancel' },
      { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) },
    ], 'default', '100')}
    >defaultValue</Button>

    <Button onClick={() => prompt(
      'Password',
      'Password Message',
      password => console.log(`password: ${password}`),
      'secure-text',
    )}
    >secure-text</Button>

    <Button onClick={() => prompt(
      'Password',
      'You can custom buttons',
      [
        { text: '取消' },
        { text: '提交', onPress: password => console.log(`密码为:${password}`) },
      ],
      'secure-text',
    )}
    >custom buttons</Button>

    <Button onClick={() => prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password'],
    )}
    >login-password</Button>

  </div>
);


ReactDOM.render(<App />, mountNode);

```
:::



## API

### Modal

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| afterClose | Modal 完全关闭后的回调 | function | 无 |
| visible | 对话框是否可见 | Boolean | false |
| closable | 是否显示关闭按钮 | Boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| onClose | 点击 x 或 mask 回调 | (): void | 无 |
| transparent | 是否背景透明 | Boolean | false |
| popup | 是否弹窗模式 | Boolean | false |
| animationType | 可选: 'slide-down / up' / 'fade' / 'slide' | String | fade |
| title | 标题 | React.Element | 无 |
| footer | 底部内容 | Array [{text, onPress}] | [] |
| platform  | 设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios` | String | `ios'`|
| transitionName  | Modal 主内容动画 className | String | |
| maskTransitionName  | mask 动画 className | String | |
| className  | 手动设置 Modal 的 className | String | |
| wrapClassName  | 手动设置 Modal wrap 的 className | String | |

### Modal.alert(title, message, actions?, platform?)

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.alert(title, message, actions?, platform?).close()` 可以在外部关闭 Alert

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数  | Array or Function | 无  |
| type | prompt 的样式 | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue | 默认值(input 为 password 类型不支持) | String | -  |
| placeholders | ['', '']  | String[] | -  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?).close()` 可以在外部关闭 prompt`

### Modal.operation(actions?, platform?)

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.operation(actions?, platform?).close()` 可以在外部关闭 operation`
