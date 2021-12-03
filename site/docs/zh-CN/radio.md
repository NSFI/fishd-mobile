# Radio 单选框 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基础样式

:::demo 基础样式。

```jsx
const Demo = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="components-noticebar-demo-basic">
      <div className="demo-title">基础样式</div>
      <List style={{ padding: 16 }}>
        <Radio style={{ marginBottom: 12 }} defaultChecked block>
          选项一
        </Radio>
        <Radio block>选项二</Radio>
      </List>
      <div className="demo-title">水平排列</div>
      <List style={{ padding: 16 }}>
        <Radio style={{ marginRight: 12 }} defaultChecked>
          选项一
        </Radio>
        <Radio style={{ marginRight: 12 }}>选项二</Radio>
      </List>

      <div className="demo-title">禁用状态</div>
      <List style={{ padding: 16 }}>
        <Radio style={{ marginBottom: 12 }} defaultChecked block disabled>
          选项一
        </Radio>
        <Radio block disabled>
          选项二
        </Radio>
      </List>

      <div className="demo-title">在List中使用</div>
      <Radio.Group value={value} onChange={setValue}>
        <List>
          <List.Item>
            <Radio value="a">选项一</Radio>
          </List.Item>
          <List.Item>
            <Radio value="b">选项二</Radio>
          </List.Item>
        </List>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```

:::

## API

### Radio

| 属性           | 说明                                   | 类型                                | 默认值  |
| -------------- | -------------------------------------- | ----------------------------------- | ------- |
| checked        | 是否选中                               | boolean                             | `false` |
| defaultChecked | 是否默认选中                           | boolean                             | `false` |
| disabled       | 是否禁用                               | boolean                             | `false` |
| block          | 是否渲染为块级元素                     | boolean                             | `false` |
| value          | `Radio`绑定的值，配合`Radio.Group`使用 | RadioValue                          | -       |
| icon           | 自定义 icon 渲染                       | (checked: boolean): React.ReactNode | -       |
| onChange       | change 事件触发的回调函数              | (checked: boolean): void            | -       |

### Radio.Group

| 属性         | 说明                      | 类型                      | 默认值  |
| ------------ | ------------------------- | ------------------------- | ------- |
| value        | 选项值                    | RadioValue                | -       |
| defaultValue | 默认选项值                | RadioValue                | -       |
| disabled     | 是否禁用                  | boolean                   | `false` |
| onChange     | change 事件触发的回调函数 | (value: RadioValue): void | -       |
