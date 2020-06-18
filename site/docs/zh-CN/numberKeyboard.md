# NumberKeyboard 数字键盘 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

底部弹起的数字键盘

## 何时使用

通过模拟数字键盘，解决一些场景系统原生键盘兼容困难的情况

:::demo

```js
state = {
  keyboard: ''
}

handleShow = (e) => {
  e.nativeEvent.stopImmediatePropagation();
  this.setState({
    keyboard: 'A'
  })
}

handleBlur = () => {
  this.setState({
    keyboard: ''
  })
}

handleShowTwo = (e) => {
  e.nativeEvent.stopImmediatePropagation();
  this.setState({
    keyboard: 'B'
  })
}

render(){
  const { keyboard } = this.state
 return(
    <div className="components-numberKeyboard-demo-basic">
      <Button onTouchStart={this.handleShow}>显示键盘1</Button>
      <Button onTouchStart={this.handleShowTwo}>显示键盘2</Button>
      <NumberKeyboard show={keyboard === 'A'} onBlur={this.handleBlur}>显示键盘1</NumberKeyboard>
      <NumberKeyboard show={keyboard === 'B'} onBlur={this.handleBlur}>显示键盘2</NumberKeyboard>
    </div>
  )
}
```

```less
[class^="components-numberKeyboard-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
```

:::
