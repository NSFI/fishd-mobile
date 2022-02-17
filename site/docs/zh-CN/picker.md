# Picker 选择器 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
const Demo = () => {
  const columns = [
    ['A', 'B', 'C', 'D', 'E', 'F'],
    ['1', '2', '3', '我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目'],
  ];
  const [current, setCurrent] = React.useState(null);
  const [value, setValue] = React.useState(['B', '2']);

  return (
    <DemoBlock title="基础用法" noStyle>
      <List>
        <List.Item
          arrow
          onClick={() => {
            setCurrent('popup1');
          }}
        >
          选择：{value.join('-')}
        </List.Item>
      </List>
      <Picker
        visible={current === 'popup1'}
        value={value}
        columns={columns}
        bodyStyle={{
          minHeight: '40vh',
        }}
        onConfirm={(val, extendValue) => {
          setValue(val);
        }}
        onClose={() => {
          setCurrent(null);
        }}
      ></Picker>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## 函数式调用

:::demo

```js
const Demo = () => {
  const columns = [
    ['A', 'B', 'C', 'D', 'E', 'F'],
    ['1', '2', '3', '我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目'],
  ];
  const [value, setValue] = React.useState([]);
  return (
    <DemoBlock title="函数式调用" noStyle>
      <List>
        <List.Item
          arrow
          onClick={() => {
            Picker.show({
              defaultValue: value,
              columns: columns,
            })
              .then(res => {
                setValue(res);
              })
              .catch(() => {
                Toast.show('取消选择');
              });
          }}
        >
          选择：{value.join('-')}
        </List.Item>
      </List>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## Picker

| 属性         | 说明             | 类型                                                                          | 默认值  |
| ------------ | ---------------- | ----------------------------------------------------------------------------- | ------- |
| visible      | 是否显示         | `boolean`                                                                     | `false` |
| columns      | 列数据           | `PickerViewColumn[] \| ((value: PickerColumnValue[]) => PickerViewColumn[]);` | `[]`    |
| value        | 值               | `PickerColumnValue[]`                                                         | -       |
| defaultValue | 默认值           | `PickerColumnValue[]`                                                         | `[]`    |
| confirmText  | 确认文案         | `string`                                                                      | `确认`  |
| cancelText   | 取消文案         | `string`                                                                      | `取消`  |
| onSelect     | 选择器改变时触发 | `(value: PickerColumnValue[], extend: PickerValueExtend) => void`             | -       |
| onConfirm    | 确认时触发       | `(value: PickerColumnValue[], extend: PickerValueExtend) => void`             | -       |
| onCancel     | 取消时触发       | `() => void`                                                                  | -       |
| onClose      | 关闭时触发       | `() => void`                                                                  | -       |

此外还有`Popup`组件的`'afterShow' | 'afterClose' | 'getContainer' | 'mask'`

## Picker.show 函数式调用

```
show: (props: Omit<PickerProps, 'value' | 'visible'>) => Promise<PickerValue[] | null>
```

当选择器确认时，会`resolve`调用返回的`promise`，取消或者点击遮罩关闭则会执行`reject`
