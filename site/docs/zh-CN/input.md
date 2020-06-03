# Input 输入框 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

表单中的输入框组件

## 何时使用

用于接受单行文本

:::demo

```js
state = {}

render(){
 return(
    <div className="components-input-demo-basic">
      <div className="sub-title">基础用法</div>
      <Input />
    </div>
  )
}
```

```less
.components-input-demo-basic {
  padding-bottom: 40px;
}
[class^="components-input-demo-"] .sub-title {
  padding: 10px 0;
  color: #ccc;
  font-size: 12px;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| onClick | 点击回调函数 | (el: Object, index: number): void | `default` |