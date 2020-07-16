# Overlay 遮罩 【交互：刘莹莹 | 视觉：徐剑杰 |开发：邱瑶瑶】

## 何时使用

用于阻塞整个页面的操作，让用户聚焦和触发下一步操作

## 一般用法

:::demo 
```js
state = {
  show: false
}
showOverlay = () => {
  this.setState({
    show:true
  })
}
hideOverlay = () => {
  this.setState({
    show:false
  })
}
render() {
  const { show } = this.state;
  return (
    <div className='components-overlay-demo-basic'>
    <div className='demo-title'>显示遮罩</div>
    <Button onClick={this.showOverlay}>显示遮罩</Button>
      <Overlay show={show} lockScroll={true} onClick={this.hideOverlay}>
      </Overlay>
    </div>);
}
```

```less
[class^="components-overlay-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
[class^="components-overlay-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
  // margin-bottom:400px;
}

```
:::


:::demo 嵌入内容
```js
state = {
  show: false
}

showOverlay = () => {
  this.setState({
    show:true
  })
}

hideOverlay = () => {
  this.setState({
    show:false
  })
}
render() {
  const { show } = this.state;
  return (
    <div className='components-overlay-demo-basic'>
    <div className='demo-title'>嵌入内容</div>
    <Button onClick={this.showOverlay}>嵌入内容</Button>
      <Overlay show={show} onClick={this.hideOverlay}
      >
        <div className="wrapper">
          <div className="block" />
        </div>
      </Overlay>
    </div>);
}
```

```less
[class^="components-overlay-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
[class^="components-overlay-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
.components-overlay-demo-basic {
  padding-bottom: 20px;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
```
:::


## API

|属性 | 说明 | 类型 | 默认值|
|----|-----|------|------|
| show    | 是否显示   | boolean |  false  |
| zIndex	    | z-index	  |  number \| string | 1 |
| duration | 动画时长，单位秒 | number \| string | `0.3` |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean | true  |
| className | 自定义类名 | string | -  |

