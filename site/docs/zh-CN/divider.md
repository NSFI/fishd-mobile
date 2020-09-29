# Divider 分割线 【交互：刘莹莹 | 视觉：徐剑杰 |开发：邱瑶瑶】


分割线组件，用于页面的分割。
## 一般用法

:::demo

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        一般用法
      </div>
      <Divider />
    </div>  
  );
}
```
:::

## 展示文本
:::demo 展示文本

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        展示文本
      </div>
      <Divider contentPosition={"left"}>文本</Divider>
      <Divider contentPosition={"right"}>文本</Divider>
    </div> 
  );
}
```
:::

:::demo Dashed

```js
render() {
  return (
    <div className="components-divider-demo">
      <div className="demo-title">
        Dashed
      </div>
      <Divider dashed={true}>文本</Divider>
    </div> 
  );
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
      <Divider
        style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}
      >
        文本
      </Divider>
    </div> 
  );
}
```
:::

## API

| 属性            | 说明                           | 类型    | 默认值 |
| --------------- | ------------------------------ | ------- | ------ |
| dashed          | 是否使用虚线                   | boolean | false  |
| hairline        | 是否使用 0.5px 线              | boolean | true   |
| contentPosition | 内容位置，可选值为 left、right | string  | center |
