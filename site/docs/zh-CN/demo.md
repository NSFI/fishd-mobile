# Demo 按钮 【交互：刘莹莹 |视觉：徐剑杰 |开发：吴圣筑】

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

:::demo 按钮有四种类型：主按钮、次按钮、危险按钮,主按钮在同一个操作区域最多出现一次。

```js
render(){
 return(<div className="components-button-demo-basic">
    <Button type="primary" onClick={() => console.log('hello world')}>Primary</Button>
    <Button>Default</Button>
    <Button type="danger">Danger</Button>
  </div>)
}
```

```less
[class^="components-button-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
```

:::

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| size | 设置按钮大小 | Enum {'small', 'large', 'default'}              | 'default' |
| type | 设置按钮类型 | Enum {'primary', 'dashed', 'danger', 'default'} | 'default' |
