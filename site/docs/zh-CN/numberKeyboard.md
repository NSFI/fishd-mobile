# NumberKeyboard 数字键盘 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

底部弹起的数字键盘

## 何时使用

通过模拟数字键盘，解决一些场景系统原生键盘兼容困难的情况

:::demo

```jsx
const Demo = () => {
  const [keyboard, setKeyboard] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleShow = type => {
    setKeyboard(type);
  };

  const handleClose = () => {
    setKeyboard('');
  };

  const hanldeInput = text => {
    Toast.show(`点击${text}`);
  };

  const hanldeConfirm = text => {
    Toast.show(`确认完成`);
  };

  const hanldeDelete = () => {
    Toast.show(`删除`);
  };

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div>
      <List>
        <List.Item onClick={() => handleShow('A')}>默认键盘</List.Item>
        <List.Item onClick={() => handleShow('B')}>自定义键盘</List.Item>
        <List.Item onClick={() => handleShow('C')}>身份证键盘</List.Item>
        <List.Item onClick={() => handleShow('D')}>带标题键盘</List.Item>
        <List.Item onClick={() => handleShow('E')}>配置多个按键</List.Item>
        <List.Item onClick={() => handleShow('F')}>双向绑定</List.Item>
      </List>
      <NumberKeyboard
        visible={keyboard === 'A'}
        onClose={handleClose}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
      ></NumberKeyboard>
      <NumberKeyboard
        visible={keyboard === 'B'}
        theme="custom"
        onClose={handleClose}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="."
      ></NumberKeyboard>
      <NumberKeyboard
        visible={keyboard === 'C'}
        onClose={handleClose}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="X"
      ></NumberKeyboard>
      <NumberKeyboard
        visible={keyboard === 'D'}
        onClose={handleClose}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        extraKey="."
        title="键盘标题"
      ></NumberKeyboard>
      <NumberKeyboard
        visible={keyboard === 'E'}
        theme="custom"
        onClose={handleClose}
        onInput={hanldeInput}
        onDelete={hanldeDelete}
        onConfirm={hanldeConfirm}
        extraKey={['00', '.']}
        title="多个按键"
      ></NumberKeyboard>
      <NumberKeyboard
        visible={keyboard === 'F'}
        onClose={handleClose}
        onChange={handleChange}
        extraKey="."
        title={value || '请输入价格'}
        value={value}
      ></NumberKeyboard>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性                | 说明                                                  | 类型                 | 默认值    |
| ------------------- | ----------------------------------------------------- | -------------------- | --------- |
| theme               | 样式风格                                              | `custom | default`   | `default` |
| value               | 当前输入值                                            | `string`             | -         |
| visible             | 是否显示键盘                                          | `boolean`            | -         |
| title               | 标题                                                  | `React.ReactNode`    | -         |
| extraKey            | 额外按键的内容，注意`default`主题只能添加一个额外的键 | `string \| string[]` | -         |
| showClose           | 是否展示顶部关闭按钮                                  | `boolean`            | `true`    |
| closeText           | 关闭按钮文案                                          | `string`             | `关闭`    |
| confirmText         | 确认按钮文案                                          | `string`             | `完成`    |
| closeOnClickOutside | 点击外部时是否收起键盘                                | `boolean`            | `true`    |
| closeOnConfirm      | 点击确认时是否收起键盘                                | `boolean`            | `true`    |

## Event

| 事件名     | 说明                 | 类型                      |
| ---------- | -------------------- | ------------------------- |
| onInput    | 点击按键时触发       | `(key: string) => void`   |
| onDelete   | 点击删除键时触发     | `() => void`              |
| onChange   | 键盘内容改变时触发   | `(value: string) => void` |
| onClose    | 点击关闭按钮时触发   | `() => void`              |
| onConfirm  | 点击确认按钮时触发   | `() => void`              |
| afterShow  | 键盘显示动画完成回调 | `() => void`              |
| afterClose | 键盘关闭动画完成回调 | `() => void`              |
