# SearchBar 搜索栏 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo demo 标题

```js

render() {
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">非受控组件</div>
      <div className="demo-card">
        <SearchBar clearable />
      </div>
    </div>
  );
}
```

```less
[class^='components-tpl-demo-'] .demo-card {
  padding: 8px;
  font-size: 14px;
  background-color: #fff;
}
```

:::

:::demo demo 标题

```js

constructor(props) {
  super(props);
  this.myRef = React.createRef();
  this.state = {
    searchText: ''
  }
}

handleSearchTextChange = (searchText) => {
  this.setState({ searchText })
}

handleFocus = () => {
  this.myRef.current.focus()
}

handleBlur = () => {
  this.myRef.current.blur()
}

render() {
  const { searchText } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">受控组件</div>
      <div className="demo-card">
        <SearchBar ref={this.myRef} value={searchText} onChange={this.handleSearchTextChange} showCancelButton clearable />
        <div style={{ marginTop: 8 }}>受控值：{searchText}</div>
        <div style={{ marginTop: 8 }}>
          <Button size="small" type="primary" onClick={this.handleFocus}>聚焦</Button>
          <Button size="small" style={{ marginLeft: 8 }} onClick={this.handleBlur}>失焦</Button>
        </div>
      </div>
    </div>
  );
}
```

```less
[class^='components-tpl-demo-'] .demo-card {
  padding: 8px;
  font-size: 14px;
  background-color: #fff;
}
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
