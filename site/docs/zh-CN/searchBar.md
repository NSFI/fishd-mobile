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

| 属性  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| title | 标题 | string | -      |
