# Button 按钮 【交互：刘莹莹 |视觉：徐剑杰 |开发：吴圣筑】

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

:::demo 按钮有四种类型：主按钮、次按钮、危险按钮,主按钮在同一个操作区域最多出现一次。

```js
render(){
 return(
   <div className="components-button-demo-basic demo-card">
    <Button>default</Button>
    <Button disabled>default disabled</Button>

    <Button type="primary">primary</Button>
    <Button type="primary" disabled>primary disabled</Button>

    <Button type="warning">warning</Button>
    <Button type="warning" disabled>warning disabled</Button>

    <Button loading>loading button</Button>
    <Button icon="fm-start">icon button</Button>

  </div>
  )
}
```

```less
[class^="components-button-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## 按钮尺寸

:::demo 按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```js
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div className="components-button-demo-size demo-card">
        <Button size="small">small</Button>
        <Button>middle</Button>
        <Button size="large">large</Button>
      </div>
    );
  }
```

```less
[class^="components-button-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| size | 设置按钮大小 | Enum {'small', 'large', 'default'}              | 'default' |
| type | 设置按钮类型 | Enum {'primary', 'dashed', 'danger', 'default'} | 'default' |
