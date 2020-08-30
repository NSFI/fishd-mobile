# Checkbox 复选框 【交互：刘莹莹 | 视觉：徐剑杰 |开发：于雯】

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本样式

:::demo 基础样式

```js
  constructor(props){
    super(props);
    this.state = {
      valList: [0, 1, 4],
    };    
  }

  onChange = (value, e) => {
    const { valList } = this.state;
    const checked = e.target.checked;

    if(checked) {
      valList.push(value);
    }else {
      const idx = valList.indexOf(value);
      if(idx > -1) {
        valList.splice(idx, 1);
      }
    }

    this.setState({
      valList,
    });
  }
  
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    const { valList } = this.state;
    const data = [
      {value: 0, label: '选项一'},
      {value: 1, label: '选项二'},
      {value: 2, label: '选项三'},
      {value: 3, label: '选项四'},
      {value: 4, label: '选项五'},
    ]

    return (
      <div className='components-checkbox-demo-basic'>
        <div className='demo-title'>基础样式</div>
        <List>
        {data.map(i => (
          <CheckboxItem
            key={i.value}
            onChange={(e) => this.onChange(i.value, e)}
            checked={valList.includes(i.value)}
            disabled={i.value === 3 || i.value === 4}>
            {i.label}
          </CheckboxItem>
        ))}
        </List>
      </div>);
  }
```

```less
.components-checkbox-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 自定义颜色

:::demo 自定义颜色

```js
  constructor(props){
    super(props);
    this.state = {
      valList: [0, 1, 4],
    };    
  }

  onChange = (value, e) => {
    const { valList } = this.state;
    const checked = e.target.checked;

    if(checked) {
      valList.push(value);
    }else {
      const idx = valList.indexOf(value);
      if(idx > -1) {
        valList.splice(idx, 1);
      }
    }

    this.setState({
      valList,
    });
  }
  
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    const { valList } = this.state;
    const data = [
      {value: 0, label: '选项一'},
      {value: 1, label: '选项二'},
      {value: 2, label: '选项三'},
      {value: 3, label: '选项四'},
      {value: 4, label: '选项五'},
    ]

    return (
      <div className='components-checkbox-demo-basic'>
        <div className='demo-title'>自定义颜色</div>
        <List>
        {data.map(i => (
          <CheckboxItem
            key={i.value}
            onChange={(e) => this.onChange(i.value, e)}
            checked={valList.includes(i.value)}
            disabled={i.value === 3 || i.value === 4}
            checkedcolor="#07c160">
            {i.label}
          </CheckboxItem>
        ))}
        </List>
      </div>);
  }
```

```less
.components-checkbox-demo-basic {
  padding-bottom: 20px;
}
```
:::

## 自定义形状

:::demo 自定义形状

```js
  constructor(props){
    super(props);
    this.state = {
      valList: [0, 1, 4],
    };    
  }

  onChange = (value, e) => {
    const { valList } = this.state;
    const checked = e.target.checked;

    if(checked) {
      valList.push(value);
    }else {
      const idx = valList.indexOf(value);
      if(idx > -1) {
        valList.splice(idx, 1);
      }
    }

    this.setState({
      valList,
    });
  }
  
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    const { valList } = this.state;
    const data = [
      {value: 0, label: '选项一'},
      {value: 1, label: '选项二'},
      {value: 2, label: '选项三'},
      {value: 3, label: '选项四'},
      {value: 4, label: '选项五'},
    ]

    return (
      <div className='components-checkbox-demo-basic'>
        <div className='demo-title'>自定义形状</div>
        <List>
        {data.map(i => (
          <CheckboxItem
            key={i.value}
            onChange={(e) => this.onChange(i.value, e)}
            checked={valList.includes(i.value)}
            disabled={i.value === 3 || i.value === 4}
            shape="square">
            {i.label}
          </CheckboxItem>
        ))}
        </List>
      </div>);
  }
```

```less
.components-checkbox-demo-basic {
  padding-bottom: 20px;
}
```
:::



## API

### Checkbox

|属性 | 说明 | 类型 | 默认值|
|----|-----|------|------|
| defaultChecked  |  初始是否选中  | Boolean   | 无  |
| checked         |   指定当前是否选中   | Boolean  | 无  |
| checkedcolor    |   选中状态颜色   | Boolean  | 无  |
| shape           |   形状，可选值为 square   | String  | round  |
| disabled        |    失效状态    | Boolean |  false  |
| onChange        | change 事件触发的回调函数 | (e: Object): void |   无  |

### Checkbox.CheckboxItem

基于`List.Item`对`Checkbox`进行封装,`List.Item`的`thumb`属性固定传入`Checkbox`,其他属性和`List.Item`一致。
其他 API 和 Checkbox 相同。

### Checkbox.AgreeItem

用于同意协议这种场景的复选框
