# SearchBar 搜索栏 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

场景描述

## 基础用法

:::demo 非受控组件

```js
const Demo = () => {
  return (
    <DemoBlock title="非受控组件">
      <SearchBar clearable />
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## 受控用法

:::demo 受控组件

```js
const Demo = () => {
  const searchBarRef = React.useRef(null);
  const [searchText, setSearchText] = React.useState('');
  const handleFocus = () => {
    searchBarRef.current.focus();
  };
  const handleBlur = () => {
    searchBarRef.current.blur();
  };
  return (
    <DemoBlock title="受控组件">
      <SearchBar ref={searchBarRef} value={searchText} onChange={setSearchText} showCancelButton clearable />
      <div style={{ marginTop: 8 }}>受控值：{searchText}</div>
      <div style={{ marginTop: 8 }}>
        <Button size="small" type="primary" onClick={handleFocus}>
          聚焦
        </Button>
        <Button size="small" style={{ marginLeft: 8 }} onClick={handleBlur}>
          失焦
        </Button>
      </div>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性             | 说明                         | 类型         | 默认值             |
| ---------------- | ---------------------------- | ------------ | ------------------ |
| value            | 输入值                       | `string`     | -                  |
| placeholder      | 提示文本                     | `string`     | `请输入搜索关键词` |
| clearable        | 是否允许清除                 | `boolean`    | -                  |
| showCancelButton | 是否展示取消按钮             | `boolean`    | -                  |
| cancelText       | 取消按钮文案                 | `string`     | `取消`             |
| clearOnCancel    | 点击取消按钮后是否清空输入框 | `boolean`    | `true`             |
| onSearch         | 输入框回车时触发             | `() => void` | -                  |
| onChange         | 输入框内容变化时触发         | `() => void` | -                  |
| onClear          | 点击清除按钮后触发           | `() => void` | -                  |
| onCancel         | 点击取消按钮时触发           | `() => void` | -                  |
