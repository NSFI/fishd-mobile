# NumberKeyboard 数字键盘 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

底部弹起的数字键盘

## 何时使用

通过模拟数字键盘，解决一些场景系统原生键盘兼容困难的情况

:::demo

```js
state = {
  keyboard: '',
  value: ''
}

handleShow = (type, e) => {
  e.nativeEvent.stopImmediatePropagation();
  this.setState({
    keyboard: type
  })
}

handleBlur = () => {
  this.setState({
    keyboard: ''
  })
}

hanldeInput = (text) => {
  Toast.show(`点击${text}`, 1, false);
}

hanldeDelete = () => {
  Toast.show(`删除`, 1, false);
}

handleChange = (value) => {
  console.log('>>> value', value);
  this.setState({ value })
}

render(){
  const { keyboard, value } = this.state
 return(
    <div className="components-numberKeyboard-demo-basic">
      <Button onMouseDown={this.handleShow.bind(this, 'A')}>普通键盘</Button>
      <NumberKeyboard
        show={keyboard === 'A'}
        onBlur={this.handleBlur}
        onInput={this.hanldeInput}
        onDelete={this.hanldeDelete}
      ></NumberKeyboard>

      <Button onMouseDown={this.handleShow.bind(this, 'B')}>右侧栏键盘</Button>
      <NumberKeyboard
        show={keyboard === 'B'}
        theme='custom'
        onBlur={this.handleBlur}
        onInput={this.hanldeInput}
        onDelete={this.hanldeDelete}
        extraKey="."
        closeButtonText="完成"
      ></NumberKeyboard>

      <Button onMouseDown={this.handleShow.bind(this, 'C')}>身份证键盘</Button>
      <NumberKeyboard
        show={keyboard === 'C'}
        onBlur={this.handleBlur}
        onInput={this.hanldeInput}
        onDelete={this.hanldeDelete}
        extraKey="X"
        closeButtonText="完成"
      ></NumberKeyboard>

      <Button onMouseDown={this.handleShow.bind(this, 'D')}>带标题键盘</Button>
      <NumberKeyboard
        show={keyboard === 'D'}
        onBlur={this.handleBlur}
        onInput={this.hanldeInput}
        onDelete={this.hanldeDelete}
        extraKey="."
        title='键盘标题'
        closeButtonText="完成"
      ></NumberKeyboard>

      <Button onMouseDown={this.handleShow.bind(this, 'E')}>配置多个按键</Button>
      <NumberKeyboard
        show={keyboard === 'E'}
        onBlur={this.handleBlur}
        onInput={this.hanldeInput}
        onDelete={this.hanldeDelete}
        theme='custom'
        extraKey={['00', '.']}
        title='多个按键'
        closeButtonText="完成"
      ></NumberKeyboard>

      <Button onMouseDown={this.handleShow.bind(this, 'F')}>双向绑定</Button>
      <NumberKeyboard
        show={keyboard === 'F'}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        extraKey="."
        title={value || '请输入价格'}
        value={value}
        closeButtonText="完成"
      ></NumberKeyboard>
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
