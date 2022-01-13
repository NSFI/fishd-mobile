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
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Switch></Switch>
      </div>
      <div className="demo-title">受控组件</div>
      <div className="demo-card">
        <Switch checked={checked} onChange={setChecked}></Switch>
        <span style={{ marginLeft: 8 }}>{String(checked)}</span>
      </div>
      <div className="demo-title">禁用</div>
      <div className="demo-card">
        <Switch disabled></Switch>
      </div>
      <div className="demo-title">加载中</div>
      <div className="demo-card">
        <Switch loading></Switch>
        <Switch loading defaultChecked style={{ marginLeft: 8 }}></Switch>
      </div>
      <div className="demo-title">默认值</div>
      <div className="demo-card">
        <Switch defaultChecked={true}></Switch>
      </div>
      <div className="demo-title">自定义显示值</div>
      <div className="demo-card">
        <Switch checkedText="开" uncheckedText="关"></Switch>
        <Switch checkedText="0" uncheckedText="1" style={{ marginLeft: 8 }}></Switch>
      </div>
      <div className="demo-title">自定义激活值</div>
      <div className="demo-card">
        <Switch checked={customChecked} onChange={setCustomChecked} checkedValue="on" uncheckedValue="off"></Switch>
        <span style={{ marginLeft: 8 }}>{String(customChecked)}</span>
      </div>
      <div className="demo-title">自定义颜色</div>
      <div className="demo-card">
        <Switch color="pink"></Switch>
        <Switch
          color="pink"
          checkedText="开"
          checkedTextColor="#fff"
          uncheckedText="关"
          uncheckedTextColor="pink"
          style={{ marginLeft: 8 }}
        ></Switch>
      </div>
      <div className="demo-title">异步</div>
      <div className="demo-card">
        <Switch beforeChange={beforeChange}></Switch>
      </div>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
[class^='components-tpl-demo-'] .demo-card {
  padding: 12px;
  background: #fff;
}
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
