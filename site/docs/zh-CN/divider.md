# Divider 分割线 【交互：刘莹莹 | 视觉：徐剑杰 |开发：邱瑶瑶】


分割线组件，用于页面的分割。
## 一般用法

:::demo

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        基本用法
      </div>
      <div className="demo-card">
        <Divider />
      </div>
    </div>  
  );
}
```
```less
[class^="components-divider-demo"] .demo-card {
  padding: 32px 20px !important;
  background-color: #fff;
}
```
:::

## 展示文本
:::demo 文本位置

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        展示文本
      </div>
      <div className="demo-card">
      <Divider contentPosition={"left"}>文本</Divider>
      <Divider contentPosition={"right"}>文本</Divider>
    </div> 

    </div> 
  );
}
```
```less
[class^="components-divider-demo"] .demo-card {
  padding: 32px 20px;
  background-color: #fff;
}
```
:::

:::demo 虚线

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        Dashed
      </div>
      <div className="demo-card">
      <Divider dashed={true}>文本</Divider>
    </div> 
    </div> 
  );
}
```
```less
[class^="components-divider-demo"] .demo-card {
  padding: 32px 20px;
  background-color: #fff;
}
```
:::

:::demo 自定义样式

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        自定义样式
      </div>
      <div className="demo-card">
      <Divider
        dashed={true}
        style={{ color: '#337EFF', borderColor: '#337EFF', padding: '0 16px' }}
      >
        FishDesign Mobile
      </Divider>
    </div> 
    </div> 
  );
}
```
```less
[class^="components-divider-demo"] .demo-card {
  padding: 32px 20px;
  background-color: #fff;
}
```
:::

## API

| 属性            | 说明                           | 类型    | 默认值 |
| --------------- | ------------------------------ | ------- | ------ |
| dashed          | 是否使用虚线                   | boolean | false  |
| hairline        | 是否使用 0.5px 线              | boolean | true   |
| contentPosition | 内容位置，可选值为 left、right | string  | center |
