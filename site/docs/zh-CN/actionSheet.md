# ActionSheet 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

底部弹起的模态面板，包含与当前情境相关的多个选项

## 何时使用

从底部弹出的模态框，提供和当前场景相关的2个以上的操作动作，支持提供标题和描述。

## 基础用法

:::demo

```js
handleClick = () => {
  const BUTTONS = ['选项1', '选项2', '选项3', '破坏性选项操作'];
  ActionSheet.showActionSheetWithOptions({
    options: BUTTONS,
    cancelText: 'cancel',
    destructiveButtonIndex: BUTTONS.length - 1,
    message: '标题或描述',
    maskClosable: true,
    cancelButtonText: '取消',
    wrapProps: {},
    onSelect: (buttonIndex) => {
      Toast.show(`点击${BUTTONS[buttonIndex]}`, 1, false);
    },
    onCancel: () => {
      console.log('>>> 取消操作')
    }
  });
}

render() {
  return (
    <div className="components-actionSheet-demo-basic demo-card">
      <Button type="primary" onClick={this.handleClick}>
        基础用法
      </Button>
    </div>
  );
}
```

```less
[class^="components-actionSheet-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## 单行展示分享

:::demo

```js
handleClick = () => {
  const BUTTONS = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '支付宝' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
  ActionSheet.showShareActionSheetWithOptions({
    options: [
      [...BUTTONS, BUTTONS[0], BUTTONS[1]],
    ],
    cancelText: 'cancel',
    message: '标题或描述',
    maskClosable: true,
    cancelButtonText: '取消',
    onSelect: (buttonIndex, rowIndex) => {
      Toast.show(`点击${BUTTONS[buttonIndex].title}`, 1, false);
    },
    onCancel: () => {
      console.log('>>> 取消操作')
    }
  });
}

render() {
  return (
    <div className="components-actionSheet-demo-basic demo-card">
      <Button type="primary" onClick={this.handleClick}>
        单行分享
      </Button>
    </div>
  );
}
```

```less
[class^="components-actionSheet-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## 多行展示分享

:::demo

```js
handleClick = () => {
  const BUTTONS = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '支付宝' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
  const OPTIONS = [
      [...BUTTONS, BUTTONS[0], BUTTONS[1]],
      [BUTTONS[0], BUTTONS[1]]
    ]
  ActionSheet.showShareActionSheetWithOptions({
    options: OPTIONS,
    cancelText: 'cancel',
    message: '标题或描述',
    maskClosable: true,
    cancelButtonText: '取消',
    onSelect: (buttonIndex, rowIndex) => {
      Toast.show(`点击${OPTIONS[rowIndex][buttonIndex].title}`, 1, false);
    },
    onCancel: () => {
      console.log('>>> 取消操作')
    }
  });
}

render() {
  return (
    <div className="components-actionSheet-demo-basic demo-card">
      <Button type="primary" onClick={this.handleClick}>
        多行分享
      </Button>
    </div>
  );
}
```

:::

## API
组件提供了一些静态方法，使用方式和参数如下：

ActionSheet.showActionSheetWithOptions(config)

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| options | 按钮标题列表 | 	Array< string >  | - |
| title | 标题 | string | - |
| message | 描述 | string | - |
| cancelText | 取消按钮文本 | string | `取消` |
| destructiveButtonIndex | 按钮列表中破坏性按钮（一般为删除）的索引位置 | number | - |
| maskClosable | 点击蒙层是否允许关闭 | boolean | `true` |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | (buttonIndex: number) : Promise | - |
| onCancel | 点击取消按钮时触发 | () : Promise | - |
| onClose | 关闭面板时触发 | () : Promise | - |


ActionSheet.showShareActionSheetWithOptions(config)

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| options | 分享按钮列表 | 	Array< {icon: ReactNode, title: string} > 或 二维数组  | - |
| title | 标题 | string | - |
| message | 描述 | string | - |
| cancelText | 取消按钮文本 | string | `取消` |
| maskClosable | 点击蒙层是否允许关闭 | boolean | `true` |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | (buttonIndex: number, rowIndex: number) : Promise | - |
| onCancel | 点击取消按钮时触发 | () : Promise | - |
| onClose | 关闭面板时触发 | () : Promise | - |

