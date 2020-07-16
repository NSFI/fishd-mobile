# NoticeBar 通告栏 【交互：刘莹莹 | 视觉：徐剑杰 |开发：于雯】

在导航栏下方，一般用作系统提醒、活动提醒等通知。

## 何时使用
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## 基本用法

:::demo
```js

render() {
  return (
    <div className='components-noticebar-demo-basic'>
      <div className='demo-title'>基本用法</div>
      <NoticeBar style={{marginBottom: 10}}>真正的创新是没有原型可以参考的</NoticeBar>
      <NoticeBar icon={null}>真正的创新是没有原型可以参考的</NoticeBar>
    </div>);
}
```

```less
.components-noticebar-demo-basic {
  padding-bottom: 20px;
}
```
:::


## 支持关闭

:::demo
```js

render() {
  return (
    <div className='components-noticebar-demo-basic'>
      <div className='demo-title'>支持关闭</div>
      <NoticeBar mode="closable" style={{marginBottom: 10}}>真正的创新是没有原型可以参考的</NoticeBar>
      
      <NoticeBar
        mode="closable"
        action={<span style={{ color: '#a1a1a1' }}
        marqueeProps={{ loop: true, style: {padding: '0 7.5px'}}}>不再提醒</span>}>
        真正的创新是没有原型可以参考的
      </NoticeBar>
    </div>);
}
```

```less
.components-noticebar-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 滚动播放

:::demo
```js

render() {
  return (
    <div className='components-noticebar-demo-basic'>
      <div className='demo-title'>滚动播放</div>
      <NoticeBar
        style={{marginBottom: 10}}
        marqueeProps={{ loop: true, style: {padding: '0 7.5px'}}}>
        不同盯着空白页太久，勇敢的跨出第一步，其他的自然而然就发生
      </NoticeBar>

      <NoticeBar
        icon={null}
        marqueeProps={{ loop: true, style: {padding: '0 7.5px'}}}>
        不同盯着空白页太久，勇敢的跨出第一步，其他的自然而然就发生
      </NoticeBar>
    </div>);
}
```

```less
.components-noticebar-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 查看更多

:::demo
```js

render() {
  return (
    <div className='components-noticebar-demo-basic'>
      <div className='demo-title'>查看更多</div>
      <NoticeBar
        style={{marginBottom: 10}}
        mode="link"
        onClick={() => console.log("查看更多")}>
        真正的创新是没有原型可以参考的
      </NoticeBar>

      <NoticeBar
        mode="link"
        marqueeProps={{ loop: true, style: {padding: '0 7.5px'}}}
        action={<span>查看更多</span>} onClick={() => console.log("查看更多")}>
        真正的创新是没有原型可以参考的
      </NoticeBar>
    </div>);
}
```

```less
.components-noticebar-demo-basic {
  padding-bottom: 20px;
}
```
:::

## API

|属性 | 说明 | 类型 | 默认值|
|----|-----|------|------|
| mode    | 提示类型，可选 `closable`,`link`   | String |  ''  |
| icon    | 在开始位置设置图标  |  ReactNode | `<Icon type={require('./trips.svg')} size="xxs" />`|
| onClick | 点击关闭或者操作区域的回调函数        | (): void |   |
| marqueeProps | marquee 参数  | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| action | 用于替换操作 icon 的文案 | ReactElement | |