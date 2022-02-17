# Switch 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

在两个互斥对象进行选择，eg：选择开或关。

:::demo

```jsx
const Demo = () => {
  const [checked, setChecked] = React.useState(false);
  const [customChecked, setCustomChecked] = React.useState('on');

  const beforeChange = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  };
  return (
    <div>
      <DemoBlock title="基础用法">
        <Switch></Switch>
      </DemoBlock>
      <DemoBlock title="受控组件">
        <Switch checked={checked} onChange={setChecked}></Switch>
        <span style={{ marginLeft: 8 }}>{String(checked)}</span>
      </DemoBlock>
      <DemoBlock title="禁用">
        <Switch disabled></Switch>
      </DemoBlock>
      <DemoBlock title="加载中">
        <Switch loading></Switch>
        <Switch loading defaultChecked style={{ marginLeft: 8 }}></Switch>
      </DemoBlock>
      <DemoBlock title="默认值">
        <Switch defaultChecked={true}></Switch>
      </DemoBlock>
      <DemoBlock title="自定义显示值">
        <Switch checkedText="开" uncheckedText="关"></Switch>
        <Switch checkedText="0" uncheckedText="1" style={{ marginLeft: 8 }}></Switch>
      </DemoBlock>
      <DemoBlock title="自定义激活值">
        <Switch checked={customChecked} onChange={setCustomChecked} checkedValue="on" uncheckedValue="off"></Switch>
        <span style={{ marginLeft: 8 }}>{String(customChecked)}</span>
      </DemoBlock>

      <DemoBlock title="自定义颜色">
        <Switch color="pink"></Switch>
        <Switch
          color="pink"
          checkedText="开"
          checkedTextColor="#fff"
          uncheckedText="关"
          uncheckedTextColor="pink"
          style={{ marginLeft: 8 }}
        ></Switch>
      </DemoBlock>
      <DemoBlock title="异步">
        <Switch beforeChange={beforeChange}></Switch>
      </DemoBlock>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性               | 说明                      | 类型                                                       | 默认值    |
| ------------------ | ------------------------- | ---------------------------------------------------------- | --------- |
| checked            | 激活值                    | `boolean \| number \| string`                              | `false`   |
| defaultChecked     | 默认激活值                | `boolean \| number \| string`                              | `false`   |
| loading            | 是否加载中                | `boolean`                                                  | `false`   |
| disabled           | 是否禁用                  | `boolean`                                                  | `false`   |
| color              | 开关打开后的颜色          | `string`                                                   | `#337EFF` |
| checkedValue       | 自定义激活值              | `boolean \| number \| string`                              | `true`    |
| uncheckedValue     | 自定义未激活值            | `boolean \| number \| string`                              | `false`   |
| checkedText        | 激活展示文本              | `React.ReactNode`                                          | `true`    |
| uncheckedText      | 未激活展示文本            | `React.ReactNode`                                          | `true`    |
| checkedTextColor   | 激活展示文本颜色          | `string`                                                   | `#fff`    |
| uncheckedTextColor | 未激活展示颜色            | `string`                                                   | `#333`    |
| onChange           | change 事件触发的回调函数 | `(checked: boolean \| number \| string ): void`            | -         |
| beforeChange       | 变化前执行                | `(checked: boolean \| number \| string ): Promise\<void\>` | -         |
