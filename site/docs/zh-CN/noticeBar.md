# NoticeBar 通告栏 【交互：刘莹莹 | 视觉：徐剑杰 |开发：于雯】

在导航栏下方，一般用作系统提醒、活动提醒等通知。

## 何时使用
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## 基础用法

:::demo
```js

render() {
  return (
    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
  );
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