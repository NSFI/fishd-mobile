# Component 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：飞鱼】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo demo标题

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Button type="primary">Primary</Button>
        <Button type="warning">Warning</Button>
      </div>
    </div>
  );
}
```

```less
[class^="components-tpl-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| title | 标题 | string | - |


