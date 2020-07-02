# DatePickerView 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
state = {
  value: null,
};
onChange = (value) => {
  console.log(value);
  this.setState({ value });
};
onValueChange = (...args) => {
  console.log(args);
};
render(){
 return(<div className="components-datePickerView-demo-basic">
    <div className="components-datePickerView-demo-basic__value">选择日期: <span>{this.state.value ? this.state.value.toString() : ''}</span></div>
    <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
  </div>)
}
```

```less
[class^="components-datePickerView-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
.components-datePickerView-demo-basic {
  &__value {
    margin-bottom: 10px;
    padding: 5px 0;
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| title | 标题 | string | - |


