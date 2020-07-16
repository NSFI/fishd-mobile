# DatePicker 日期选择器 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

用于选择日期或时间，支持展示标题。

## 基础用法

:::demo

```js
state = {
  dateTime: '',
  date: '',
  time: ''
};

render () {
  return (
    <div className='components-tpl-demo-basic'>
      <List>
        <DatePicker title='标题' value={this.state.dateTime} onChange={(dateTime) => this.setState({ dateTime })}>
          <List.Item>日期时间选择</List.Item>
        </DatePicker>
        <DatePicker
          mode='date'
          title='选择日期'
          extra='请选择日期'
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
        >
          <List.Item>日期选择</List.Item>
        </DatePicker>
        <DatePicker
          mode='time'
          title='选择时间'
          extra='请选择时间'
          value={this.state.time}
          onChange={(time) => this.setState({ time })}
        >
          <List.Item>时间选择</List.Item>
        </DatePicker>
      </List>
    </div>
  );
}
```

```less
[class^="components-tpl-demo-"] .fm-list-extra {
  flex: 0 0 auto;
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
| format | 格式化选中的值 | (value: Date) => date string / format string(对应 mode 下格式分别为:YYYY-MM-DD,HH:mm,YYYY-MM-DD HH:mm) | - |
| title | 弹框的标题 | string \| ReactNode | - |
| extra | 显示文案 | string | `请选择` |

## Event
| 事件名 | 说明         | 回调参数                                            |
| ---- | ------------ | ----------------------------------------------- |
| onChange | 时间发生变化的回调函数 | date: Date |
| onValueChange | 每列 picker 改变时的回调 | vals: any, index: number |
| onOk | 点击选中时执行的回调 | date: Date |
| onDismiss | 点击取消时执行的回调 | - |



