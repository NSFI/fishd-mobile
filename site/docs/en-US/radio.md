# Radio 单选框 【交互：李东岳 |视觉：徐剑杰 |开发：于雯】

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本用法

:::demo 最简单的用法。

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

    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];

    return (
      <List>
        {data.map(i => (
          <Radio.RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </Radio.RadioItem>
        ))}
      </List>);
  }

```

:::

## API

### Radio

|Properties | Descrition | Type | Default|
|-----------|------------|------|--------|
| name    |   name  | String |   -  |
| defaultChecked |   the initial checked state   | Boolean  | -  |
| checked    |   to set the current checked state  | Boolean  | -  |
| disabled      |  whether disabled  | Boolean |  false  |
| onChange    | a callback function, can be executed when the checked state changes | (e: Object): void |  -  |

### Radio.RadioItem

The encapsulation about `Radio` based on `List.Item`, the property `extra` of `List.Item` will be passed to `Radio`, while other properties remain the same.

Other APIs are identical with `Radio`.