# ImageView 图片预览 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 函数式调用

:::demo

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
      <div className="demo-title">函数式用法</div>
      <div className="demo-card">
        <Button onClick={this.handleOpen}>显示图片</Button>
      </div>
    </div>
  );
}
```

```less
```

:::

## 组件式调用

:::demo

```js

state = {
  visible: false,
  index: 0,
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

handleChange = (index) => {
  this.setState({
    index
  })
}

handleOpen = (index) => {
  this.setState({
    visible: true,
    index
  })
}

render() {
  const { visible, index } = this.state;
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
      <div className="demo-title">组件式用法</div>
      <div className="demo-card">
        <div className="demo-img__wrap">
          { items.map((item, index) => {
            return <img className="demo-img" src={item.src} key={item.src} alt="image"  onClick={this.handleOpen.bind(this, index)} />
          })}
        </div>
        <ImageView index={index} visible={visible} images={items} onClose={this.handleClose} onIndexChange={this.handleChange} maskClosable photoClosable/>
      </div>
    </div>
  );
}
```

```less
.components-tpl-demo-basic {
  .demo-img__wrap {
    display: flex;
    align-items: center;
  }
  .demo-img {
    object-fit: cover;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| images | 图片数组 | Array<Image> | - |
| index | 当前图片索引 | string | - |
| maskClosable | 点击蒙层关闭控件 | boolean | `true` |
| photoClosable | 点击图片关闭控件 | boolean | `false` |
| bannerVisible | 导航条 | boolean | `true` |
| onClose | 关闭回调 | () => void | - |
| onIndexChange | 索引改变回调 | (index) => void | - |
