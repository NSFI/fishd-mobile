# Component 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：飞鱼】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo demo 标题

```js
const Demo = () => {
  return (
    <DemoBlock title="基础用法">
      <Button type="primary">Primary</Button>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| title | 标题 | string | -      |
