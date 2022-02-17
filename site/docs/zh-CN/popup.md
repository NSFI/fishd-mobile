# Popup 弹出层 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

场景描述

## 基础用法

:::demo

```js
const Demo = () => {
  const [current, setCurrent] = React.useState(null);
  return (
    <DemoBlock title="基础用法" noStyle>
      <List>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup1');
          }}
        >
          底部弹窗
        </List.Item>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup2');
          }}
        >
          顶部弹窗
        </List.Item>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup3');
          }}
        >
          左侧弹窗
        </List.Item>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup4');
          }}
        >
          右侧弹窗
        </List.Item>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup5');
          }}
        >
          内容滚动
        </List.Item>
      </List>
      <Popup
        visible={current === 'popup1'}
        bodyStyle={{
          minHeight: '40vh',
        }}
        onMaskClick={() => {
          setCurrent(null);
        }}
      >
        <div>网易云商</div>
      </Popup>
      <Popup
        position="top"
        visible={current === 'popup2'}
        bodyStyle={{
          minHeight: '40vh',
        }}
        onMaskClick={() => {
          setCurrent(null);
        }}
      >
        <div>网易云商</div>
      </Popup>
      <Popup
        position="left"
        visible={current === 'popup3'}
        bodyStyle={{
          minWidth: '40vw',
        }}
        onMaskClick={() => {
          setCurrent(null);
        }}
      >
        <div>网易云商</div>
      </Popup>
      <Popup
        position="right"
        visible={current === 'popup4'}
        bodyStyle={{
          minWidth: '40vw',
        }}
        onMaskClick={() => {
          setCurrent(null);
        }}
      >
        <div>网易云商</div>
      </Popup>
      <Popup
        visible={current === 'popup5'}
        onMaskClick={() => {
          setCurrent(null);
        }}
      >
        <div style={{ height: '40vh', overflowY: 'auto' }}>
          {new Array(30).fill(1).map((v, index) => (
            <h2 key={index}>网易云商</h2>
          ))}
        </div>
      </Popup>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## API

| 属性          | 说明               | 类型                                         | 默认值   |
| ------------- | ------------------ | -------------------------------------------- | -------- |
| visible       | 是否显示           | `boolean`                                    | `false`  |
| position      | 展开位置           | `top` \| `bottom` \| `left` \| `right`       | `bottom` |
| mask          | 是否展示遮罩       | `boolean`                                    | `true`   |
| getContainer  | 自定义渲染容器     | `HTMLElement \| (() => HTMLElement) \| null` | `null`   |
| bodyClassName | 自定义内容区域类   | `string`                                     | -        |
| bodyStyle     | 自定义内容区域样式 | `React.CSSProperties`                        | -        |
| maskClassName | 自定义遮罩类       | `string`                                     | -        |
| maskStyle     | 自定义遮罩样式     | `React.CSSProperties`                        | -        |
| afterShow     | 显示动画完成回调   | `() => void`                                 | -        |
| afterClose    | 关闭动画完成回调   | `() => void`                                 | -        |
