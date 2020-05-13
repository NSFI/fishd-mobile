# ActionSheet 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

按钮用于开始一个即时操作。

## 何时使用

从底部弹出的模态框，提供和当前场景相关的2个以上的操作动作，支持提供标题和描述。

## 按钮类型

:::demo

```js
handleClick = () => {
  const BUTTONS = ['选项1', '选项2', '选项3', '破坏性选项操作'];
  ActionSheet.showActionSheetWithOptions({
    options: BUTTONS,
    cancelText: 'cancel',
    destructiveButtonIndex: BUTTONS.length - 1,
    // title: '标题',
    message: '标题或描述',
    maskClosable: true,
    cancelButtonText: '取消',
    'data-seed': 'logId',
    wrapProps: {},
    onSelect: (buttonIndex) => {
      console.log('>>> 点击了', buttonIndex)
      // return new Promise((resolve) => {
      //   setTimeout(resolve, 1000);
      // });
    },
    onCancel: () => {
      console.log('>>> 取消操作')
    }
  });
}

render(){
 return(<div className="components-actionSheet-demo-basic">
    <Button type="primary" onClick={this.handleClick}>打开ActionSheet</Button>
  </div>)
}
```

```less
[class^="components-button-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
```

:::

## API
组件提供了一些静态方法，使用方式和参数如下：
ActionSheet.showActionSheetWithOptions(options)

options属性:
| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| options | 设置按钮大小 | Enum {'small', 'large', 'default'}              | 'default' |
| type | 设置按钮类型 | Enum {'primary', 'dashed', 'danger', 'default'} | 'default' |
