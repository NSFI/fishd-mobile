# Component 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：飞鱼】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo demo标题

```js


handleOpen = () => {
  const items = [
      {
        src: 'https://placekitten.com/600/400',
      },
      {
        src: 'https://placekitten.com/1200/900',
      },
    ];
  ImageView.preview({ images: items })
}


render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Button onClick={this.handleOpen}>函数式</Button>
      </div>
    </div>
  );
}
```

```less
```

:::

:::demo demo标题

```js

state = {
  visible: false,
}

handleOpen = () => {
  this.setState({
    visible: true,
  })
}

handleClose = () => {
  this.setState({
    visible: false,
  })
}

render() {
  const { visible } = this.state;
  const items = [
      {
        src: 'https://placekitten.com/600/400',
      },
      {
        src: 'https://placekitten.com/1200/900',
      },
    ];
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Button onClick={this.handleOpen}>显示图片</Button>
        <ImageView visible={visible} images={items} onClose={this.handleClose} maskClosable photoClosable/>
      </div>
    </div>
  );
}
```

```less
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| title | 标题 | string | - |


