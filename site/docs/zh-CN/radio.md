# Radio 单选框 【交互：刘莹莹 |视觉：徐剑杰 |开发：于雯】

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基础样式

:::demo 基础样式。

```js
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };    
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const RadioItem = Radio.RadioItem;

    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (
      <div className='components-radio-demo-basic'>
       <div className='demo-title'>基础样式</div>
        <List>
          {data.map(i => (
            <Radio.RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </Radio.RadioItem>
          ))}
        </List>
      </div>);
  }
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```
:::


## 水平排列

:::demo 水平排列。

```js
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };    
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const RadioItem = Radio.RadioItem;

    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (
      <div className='components-radio-demo-basic'>
       <div className='demo-title'>水平排列</div>
        <List className="m-radio-list">
          {data.map(i => (
            <Radio.RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </Radio.RadioItem>
          ))}
        </List>
      </div>);
  }
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
.m-radio-list {
  .fm-list-body {
    display: flex;
  }
}
```
:::

## 禁用状态

:::demo 禁用状态。

```js
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };    
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const RadioItem = Radio.RadioItem;

    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (
      <div className='components-radio-demo-basic'>
       <div className='demo-title'>禁用状态</div>
        <List>
          {data.map(i => (
            <Radio.RadioItem key={i.value} disabled checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </Radio.RadioItem>
          ))}
        </List>
      </div>);
  }
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 自定义颜色

:::demo 自定义颜色。

```js
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };    
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const RadioItem = Radio.RadioItem;

    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (
      <div className='components-radio-demo-basic'>
        <div className='demo-title'>自定义颜色</div>
        <List>
          {data.map(i => (
            <Radio.RadioItem checkedColor="#07c160" key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </Radio.RadioItem>
          ))}
        </List>
      </div>);
  }
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```
```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 自定义形状

:::demo 自定义形状。

```js
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };    
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const RadioItem = Radio.RadioItem;

    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (
      <div className='components-radio-demo-basic'>
       <div className='demo-title'>自定义形状</div>
        <List>
          {data.map(i => (
            <Radio.RadioItem key={i.value} shape="square" checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </Radio.RadioItem>
          ))}
        </List>
      </div>);
  }
```

```less
.components-radio-demo-basic {
  padding-bottom: 20px;
}
```
:::


## API

### Radio

| 属性 | 说明 | 类型 | 默认值 |
| ----|-----|------|------ |
| name    |   name  | String |   无  |
| defaultChecked |   初始是否选中   | Boolean  | 无  |
| checked    |   指定当前是否选中  | Boolean  | 无  |
| checkedColor    |   选中状态颜色   | Boolean  | 无  |
| shape           |   形状，可选值为 square   | String  | round  |
| disabled      |  禁用  | Boolean |  false  |
| onChange    | change 事件触发的回调函数 | (e: Object): void |   无  |

### Radio.RadioItem

基于`List.Item`对`Radio`进行封装,`List.Item`的`extra`属性固定传入`Radio`,其他属性和`List.Item`一致。
其他 API 和 Radio 相同。