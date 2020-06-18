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

|Properties | Descrition | Type | Default|
|-----------|------------|------|--------|
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### Checkbox.CheckboxItem

The encapsulation about `Checkbox` based on `List.Item`, the property `thumb` of `List.Item` will be passed to `Checkbox`, while other properties remain the same.

Other APIs are identical with `Checkbox`.

### Checkbox.AgreeItem

Almost the same as CheckboxItem and be used for special scenes. See demo for details.
