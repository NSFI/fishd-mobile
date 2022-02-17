# LoadMore 加载更多 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 加载类型

:::demo 加载类型

```js
const Demo = () => {
  return (
    <DemoBlock title="样式类型">
      <LoadMore></LoadMore>
      <LoadMore type="spinner"></LoadMore>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.fm-loadmore {
  margin-right: 12px;
}
```

:::

## 自定义颜色

:::demo 自定义颜色

```js
const Demo = () => {
  return (
    <DemoBlock title="自定义颜色">
      <LoadMore color="#337eff"></LoadMore>
      <LoadMore color="#337eff" type="spinner"></LoadMore>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.fm-loadmore {
  margin-right: 12px;
}
```

:::

## 自定义大小

:::demo 自定义大小

```js
const Demo = () => {
  return (
    <DemoBlock title="自定义大小">
      <LoadMore size="40px"></LoadMore>
      <LoadMore size="30px"></LoadMore>
      <LoadMore size="20px"></LoadMore>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.fm-loadmore {
  margin-right: 12px;
}
```

:::

## 基础用法

:::demo 加载文案

```js
const Demo = () => {
  return (
    <DemoBlock title="加载文案">
      <LoadMore text="加载中..."></LoadMore>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## 垂直排列

:::demo 垂直排列

```js
const Demo = () => {
  return (
    <DemoBlock title="垂直排列">
      <LoadMore text="加载中..." vertical></LoadMore>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性     | 说明                                            | 类型                  | 默认值     |
| -------- | ----------------------------------------------- | --------------------- | ---------- |
| type     | 类型                                            | `spinner \| circular` | `circular` |
| color    | 图标颜色，效果同设置 style`--fm-loadmore-color` | `string`              | -          |
| size     | 图标大小，效果同设置 style`--fm-loadmore-size`  | `string`              | -          |
| text     | 加载文案                                        | `string`              | -          |
| vertical | 是否垂直排列图标和文字内容                      | `boolean`             | `false`    |

## 样式变量

| 属性                    | 说明     | 类型     | 默认值    |
| ----------------------- | -------- | -------- | --------- |
| --fm-loadmore-color     | 图标颜色 | `string` | `#bfbfbf` |
| --fm-loadmore-size      | 图标大小 | `string` | `30px`    |
| --fm-loadmore-font-size | 文字大小 | `string` | `14px`    |
