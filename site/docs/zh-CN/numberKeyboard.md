# NumberKeyboard 数字键盘 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

底部弹起的数字键盘

## 何时使用

通过模拟数字键盘，解决一些场景系统原生键盘兼容困难的情况

:::demo

```jsx
const Demo = () => {
  const [keyboard, setKeyboard] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleShow = (type, e) => {
    // e.nativeEvent.stopImmediatePropagation();
    setKeyboard(type);
  };

  const handleBlur = () => {
    setKeyboard('');
  };

  const hanldeInput = text => {
    Toast.show(`点击${text}`);
  };

  const hanldeDelete = () => {
    Toast.show(`删除`);
  };

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div className="components-numberKeyboard-demo-basic">
      <List>
        <List.Item onClick={() => handleShow('A')}>普通键盘</List.Item>
        <List.Item onClick={() => handleShow('B')}>右侧栏键盘</List.Item>
        <List.Item onClick={() => handleShow('C')}>身份证键盘</List.Item>
        <List.Item onClick={() => handleShow('D')}>带标题键盘</List.Item>
        <List.Item onClick={() => handleShow('E')}>配置多个按键</List.Item>
        <List.Item onClick={() => handleShow('F')}>双向绑定</List.Item>
      </List>
      <NumberKeyboard
        show={keyboard === 'A'}
        onBlur={handleBlur}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
      ></NumberKeyboard>
      <NumberKeyboard
        show={keyboard === 'B'}
        theme="custom"
        onBlur={handleBlur}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="."
        closeButtonText="完成"
      ></NumberKeyboard>
      <NumberKeyboard
        show={keyboard === 'C'}
        onBlur={handleBlur}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="X"
        closeButtonText="完成"
      ></NumberKeyboard>
      <NumberKeyboard
        show={keyboard === 'D'}
        onBlur={handleBlur}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="."
        title="键盘标题"
        closeButtonText="完成"
      ></NumberKeyboard>
      <NumberKeyboard
        show={keyboard === 'E'}
        onBlur={handleBlur}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        theme="custom"
        extraKey={['00', '.']}
        title="多个按键"
        closeButtonText="完成"
      ></NumberKeyboard>
      <NumberKeyboard
        show={keyboard === 'F'}
        onBlur={handleBlur}
        onChange={handleChange}
        extraKey="."
        title={value || '请输入价格'}
        value={value}
        closeButtonText="完成"
      ></NumberKeyboard>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
[class^='components-numberKeyboard-demo-'] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
```

:::

## API

| 属性               | 说明                           | 类型                        | 默认值    |
| ------------------ | ------------------------------ | --------------------------- | --------- |
| value              | 当前输入值                     | `string`                    | -         |
| show               | 是否显示键盘                   | `boolean`                   | -         |
| title              | 键盘标题                       | `string \| React.ReactNode` | -         |
| theme              | 样式风格，可选值为`custom`     | `string`                    | `default` |
| extraKey           | 底部额外按键的内容             | `string \| string[]`        | -         |
| closeButtonText    | 关闭按钮文字，空则不展示       | `string`                    | -         |
| deleteButtonText   | 删除按钮文字，空则展示删除图标 | `string`                    | -         |
| showDeleteKey      | 是否展示删除图标               | `boolean`                   | `true`    |
| hideOnClickOutside | 点击外部时是否收起键盘         | `boolean`                   | `true`    |

## Event

| 事件名   | 说明                           | 回调参数          |
| -------- | ------------------------------ | ----------------- |
| onInput  | 点击按键时触发                 | `key: 按键内容`   |
| onDelete | 点击删除键时触发               | -                 |
| onChange | 键盘内容改变时触发             | `value: 键盘内容` |
| onShow   | 键盘完全弹出时触发             | -                 |
| onHide   | 键盘完全收起时触发             | -                 |
| onClose  | 点击关闭按钮时触发             | -                 |
| onBlur   | 点击关闭按钮或非键盘区域时触发 | -                 |
