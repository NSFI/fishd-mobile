# DatePicker 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

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
          <List.Item>日期时间</List.Item>
        </DatePicker>
        <DatePicker
          mode='date'
          title='选择日期'
          extra='请选择日期'
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
        >
          <List.Item>日期</List.Item>
        </DatePicker>
        <DatePicker
          mode='time'
          title='选择时间'
          extra='请选择时间'
          value={this.state.time}
          onChange={(time) => this.setState({ time })}
        >
          <List.Item>时间</List.Item>
        </DatePicker>
      </List>
    </div>
  );
}
```

```less
[class^="components-tpl-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
[class^="components-tpl-demo-"] .fm-list-extra {
  flex: 0 0 auto;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| title | 标题 | string | - |


