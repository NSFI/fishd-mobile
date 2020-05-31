# Checkbox 复选框 【交互：刘莹莹 | 视觉：徐剑杰 |开发：于雯】

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本用法

:::demo 简单的 Checkbox

```js
  onChange = (val) => {
    console.log('Checkbox', val);
  }
  
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    const AgreeItem = Checkbox.AgreeItem;

    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];

    return (
      <List renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>);
  }
```
:::


## API

### Checkbox

|属性 | 说明 | 类型 | 默认值|
|----|-----|------|------|
| defaultChecked  |  初始是否选中  | Boolean   | 无  |
| checked         |   指定当前是否选中   | Boolean  | 无  |
| disabled        |    失效状态    | Boolean |  false  |
| onChange        | change 事件触发的回调函数 | (e: Object): void |   无  |

### Checkbox.CheckboxItem

基于`List.Item`对`Checkbox`进行封装,`List.Item`的`thumb`属性固定传入`Checkbox`,其他属性和`List.Item`一致。
其他 API 和 Checkbox 相同。

### Checkbox.AgreeItem

用于同意协议这种场景的复选框
