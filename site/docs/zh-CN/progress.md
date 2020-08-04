# Progress 进度条 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

用于展示操作进度，告知用户当前状态和预期。

## 基础用法

:::demo 基础用法

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Progress percentage={50}></Progress>
      </div>
    </div>
  );
}
```

:::

## 线条粗细

:::demo 线条粗细

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">线条粗细</div>
      <div className="demo-card">
        <Progress percentage={50} strokeWidth={8}></Progress>
      </div>
    </div>
  );
}
```

:::

## 置灰

:::demo 置灰

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">置灰</div>
      <div className="demo-card">
        <Progress percentage={50} inactive={true}></Progress>
      </div>
    </div>
  );
}
```

:::

## 样式定制

:::demo 样式定制

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">样式定制</div>
      <div className="demo-card">
        <Progress percentage={30} color='#f5222d' pivotText='红色'></Progress>
        <Progress percentage={50} color='#52c41a' pivotText='绿色'></Progress>
        <Progress percentage={70} color='#722ed1' pivotText='紫色'></Progress>
      </div>
    </div>
  );
}
```
```less
[class^="components-tpl-demo-"] .fm-progress {
  margin-top: 20px;
}
```
:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| percentage | 进度百分比 | string | number | `0` |
| strokeWidth | 进度条粗细，默认单位为`px` | string | `4px` |
| color | 进度条颜色 | string | `#1989fa` |
| trackColor | 轨道颜色 | string | `#e5e5e5` |
| pivotText | 进度文字内容 | string | `百分比` |
| pivotColor | 进度文字背景色 | string | `同进度条颜色` |
| textColor | 进度文字颜色	 | string | `#fff` |
| inactive | 是否置灰 | boolean | `false` |
| showPivot | 是否显示进度文字 | boolean | `true` |
