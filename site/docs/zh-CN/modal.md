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
      modal3: false
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
            <div className="demo-title">基础</div>
            <div className="sub-content">
              <div className="sub-btn" onClick={this.showModal('modal1')} >提示弹窗</div>
              <div className="sub-btn" onClick={this.showModal('modal2')} >提示弹窗-无内文</div>
              <div className="sub-btn" onClick={this.showModal('modal3')} >提示弹窗-无标题</div>
              <div className="sub-btn" onClick={this.showModal('modal4')} >popup</div>
            </div>
            <Modal
                visible={this.state.modal1}
                transparent
                closable
                maskClosable={true}
                onClose={this.onClose('modal1')}
                title="标题"
                footer={[{ text: '确认', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                afterClose={() => { Toast.info('afterClose'); }}
                >
                <div>
                形式追随功能，而功能的存在是为了更好地解决问题
                </div>
            </Modal>
            <Modal
                visible={this.state.modal2}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal2')}
                title="标题"
                footer={[{ text: '确认', onPress: () => { console.log('ok'); this.onClose('modal2')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                afterClose={() => { Toast.info('afterClose'); }}
                >
            </Modal>
            <Modal
                visible={this.state.modal3}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal32')}
                footer={[{ text: '确认', onPress: () => { console.log('ok'); this.onClose('modal3')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                afterClose={() => { Toast.info('afterClose'); }}
                >
                <div>
                形式追随功能，而功能的存在是为了更好地解决问题
                </div>
            </Modal>

            <Modal
              popup
              visible={this.state.modal4}
              onClose={this.onClose('modal4')}
              animationType="slide-up"
              afterClose={() => { alert('afterClose'); }}
              closable={true}
            >
              <List renderHeader={() => <div>信息标题</div>} className="popup-list">
                {['信息1', '信息2', '信息3'].map((i, index) => (
                  <List.Item key={index}>{i}</List.Item>
                ))}
              </List>
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
[class^="components-modal-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-modal-demo-"] .sub-content{
  overflow: hidden;
  div{
    margin-left: 10px;
    margin-top: 10px;
  }
}
[class^="components-modal-demo-"] .sub-btn{
  background-color: #337EFF;
  padding: 12px;
  display: inline-block;
  float: left;
  color: #fff;
  border-radius: 2px;
}
```

:::

:::demo

```js
const mAlert = Modal.alert;

const showAlert = () => {
  const alertInstance = mAlert('标题', '形式追随功能，而功能的存在是为了更好地解决问题', [
    { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
    { text: '确认', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="components-modal-demo-basic">
        <div className="demo-title">确认弹窗</div>
        <div className="sub-content">
          <div className="sub-btn" onClick={showAlert} >确认弹窗</div>
          <div className="sub-btn" onClick={() =>
            mAlert('标题', '', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确认', onPress: () => console.log('ok') },
            ])
          } >确认弹窗-无内文</div>
          <div className="sub-btn" onClick={() =>
            mAlert('', '形式追随功能，而功能的存在是为了更好地解决问题', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确认', onPress: () => console.log('ok') },
            ])
          } >确认弹窗-无标题</div>
        </div>

      </div>
    )
  };
}


ReactDOM.render(<App />, mountNode);


```
```less
.popup-list .fm-list-body {
  height: 210px;
  overflow: auto;
}
[class^="components-modal-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-modal-demo-"] .sub-content{
  overflow: hidden;
  div{
    margin-left: 10px;
    margin-top: 10px;
  }
}
[class^="components-modal-demo-"] .sub-btn{
  background-color: #337EFF;
  padding: 12px;
  display: inline-block;
  float: left;
  color: #fff;
  border-radius: 2px;
}
```


:::

:::demo

```js
const mAlert = Modal.alert;

const showAlert = () => {
  const alertInstance = mAlert('标题', '形式追随功能，而功能的存在是为了更好地解决问题', [
    { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
    { text: <span style={{color: '#F24957'}}>删除</span>, onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="components-modal-demo-basic">
        <div className="demo-title">警告弹窗</div>
        <div className="sub-content">
          <div className="sub-btn" onClick={showAlert} >警告弹窗</div>
          <div className="sub-btn" onClick={() =>
            mAlert('标题', '', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: <span style={{color: '#F24957'}}>删除</span>, onPress: () => console.log('ok') },
            ])
          } >警告弹窗-无内文</div>
          <div className="sub-btn" onClick={() =>
            mAlert('', '形式追随功能，而功能的存在是为了更好地解决问题', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: <span style={{color: '#F24957'}}>删除</span>, onPress: () => console.log('ok') },
            ])
          } >警告弹窗-无标题</div>
        </div>

      </div>
    );
  }
}
ReactDOM.render(<App />, mountNode);


```
```less
.popup-list .fm-list-body {
  height: 210px;
  overflow: auto;
}
[class^="components-modal-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-modal-demo-"] .sub-content{
  overflow: hidden;
  div{
    margin-left: 10px;
    margin-top: 10px;
  }
}
[class^="components-modal-demo-"] .sub-btn{
  background-color: #337EFF;
  padding: 12px;
  display: inline-block;
  float: left;
  color: #fff;
  border-radius: 2px;
}
```


:::

:::demo
```js
const prompt = Modal.prompt;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="components-modal-demo-basic">
        <div className="demo-title">输入弹窗</div>

        <div className="sub-content">
          <div className="sub-btn" onClick={() => prompt('签到场景', '请输入你的信息',
          [
            {
              text: '取消',
              onPress: value => new Promise((resolve) => {
                // Toast.info('onPress promise resolve', 1);
                setTimeout(() => {
                  resolve();
                  console.log(`value:${value}`);
                }, 1000);
              }),
            },
            {
              text: '确认',
              onPress: value => new Promise((resolve, reject) => {
                // Toast.info('onPress promise reject', 1);
                setTimeout(() => {
                  reject();
                  console.log(`value:${value}`);
                }, 1000);
              }),
            },
          ], 'default', null, ['input your name'])} >输入弹窗-promise</div>
          <div className="sub-btn"  onClick={() => prompt('默认值场景', '提示文案', [
            { text: '取消' },
            { text: '确认', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '100')} >提示弹窗-默认值</div>
          <div className="sub-btn"  onClick={() => prompt('安全密码', '密码信息', [
            { text: '取消' },
            { text: '确认', onPress: password => console.log(`password: ${password}`) },
          ], 'secure-text')} >提示弹窗-安全密码</div>
          <div className="sub-btn"  onClick={() => prompt('登陆', '请输入登陆信息', [
            { text: '取消' },
            { text: '确认', onPress: (login, password) => console.log(`login: ${login}, password: ${password}`) },
          ], 'login-password',
          null,
          ['请输入你的名字', '请输入你的密码'],
          )} >提示弹窗-登陆</div>
        </div>
        

      </div>
    )
  }
}


ReactDOM.render(<App />, mountNode);

```
```less
.popup-list .fm-list-body {
  height: 210px;
  overflow: auto;
}
[class^="components-modal-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-modal-demo-"] .sub-content{
  overflow: hidden;
  div{
    margin-left: 10px;
    margin-top: 10px;
  }
}
[class^="components-modal-demo-"] .sub-btn{
  background-color: #337EFF;
  padding: 12px;
  display: inline-block;
  float: left;
  color: #fff;
  border-radius: 2px;
}
```
:::

:::demo
```js
const mAlert = Modal.alert;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="components-modal-demo-basic">
        <div className="demo-title">自定义内容</div>

        <div className="sub-content">
          <div className="sub-btn" onClick={() =>
            mAlert('自定义内容', <img width="200px" src="https://ysf.nosdn.127.net/ausunifcvhchdzbexjvxcswemqeojqdf"/>, [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确认', onPress: () => console.log('ok') },
            ])
          } >自定义内容</div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, mountNode);

```
```less
.popup-list .fm-list-body {
  height: 210px;
  overflow: auto;
}
[class^="components-modal-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-modal-demo-"] .sub-content{
  overflow: hidden;
  div{
    margin-left: 10px;
    margin-top: 10px;
  }
}
[class^="components-modal-demo-"] .sub-btn{
  background-color: #337EFF;
  padding: 12px;
  display: inline-block;
  float: left;
  color: #fff;
  border-radius: 2px;
}
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
