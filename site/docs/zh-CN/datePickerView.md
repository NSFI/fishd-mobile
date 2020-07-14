# DatePickerView 日期选择面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

用于选择日期或时间，支持展示标题。

## 日期时间选择

:::demo

```js
state = {
  value: null,
};
onChange = (value) => {
  this.setState({ value });
};
onValueChange = (...args) => {
  console.log(args);
};
render(){
 return(<div className="components-datePickerView-demo-basic">
    <div className="components-datePickerView-demo-basic__title">日期时间选择</div>
    <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
  </div>)
}
```

```less
.components-datePickerView-demo-basic {
  margin-bottom: 10px;
  &__title {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
  }
}
```

:::

## 日期选择
:::demo

```js
state = {
  value: null,
};
onChange = (value) => {
  this.setState({ value });
};
onValueChange = (...args) => {
  console.log(args);
};
render(){
 return(<div className="components-datePickerView-demo-basic">
    <div className="components-datePickerView-demo-basic__title">日期选择</div>
    <DatePickerView
        mode="date"
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
  </div>)
}
```

```less
.components-datePickerView-demo-basic {
  margin-bottom: 10px;
  &__title {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
  }
}
```

:::

## 时间选择
:::demo

```js
state = {
  value: null,
};
onChange = (value) => {
  this.setState({ value });
};
onValueChange = (...args) => {
  console.log(args);
};
render(){
 return(<div className="components-datePickerView-demo-basic">
    <div className="components-datePickerView-demo-basic__title">时间选择</div>
    <DatePickerView
        mode="time"
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
  </div>)
}
```

```less
.components-datePickerView-demo-basic {
  margin-bottom: 10px;
  &__title {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
  }
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| mode | 日期选择的类型, 可以是日期date,时间time,日期+时间datetime,年year,月month | string | `date` |
| value | 当前选中时间 | Date | - |
| minDate | 最小可选日期 | Date | `2000-1-1` |
| maxDate | 最大可选日期 | Date | `	2030-1-1` |
| use12Hours | 12小时制 | boolean | `false` |
| minuteStep | 分钟数递增步长设置 | number | `1` |
| disabled | 是否不可用 | boolean | `false` |

## Event
| 事件名 | 说明         | 回调参数                                            |
| ---- | ------------ | ----------------------------------------------- |
| onChange | 时间发生变化的回调函数 | date: Date |
| onValueChange | 每列 picker 改变时的回调 | vals: any, index: number |



