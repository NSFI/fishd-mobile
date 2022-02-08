# PickerView 选择器面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

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
  const handleChange = (value, extendValue) => {
    console.log('pickerView:', value, extendValue.items);
  };
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <PickerView columns={columns} onChange={handleChange} />
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## 受控模式

:::demo

```js
const Demo = () => {
  const columns = [
    ['A', 'B', 'C', 'D', 'E', 'F'],
    ['1', '2', '3', '我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目我是超长的的项目'],
  ];
  const [value, setValue] = React.useState(['B', '3']);

  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">受控模式：{JSON.stringify(value)}</div>
      <div className="demo-card">
        <PickerView
          columns={columns}
          value={value}
          onChange={(value, extendValue) => {
            setValue(value);
            console.log('受控pickerView:', value, extendValue.items);
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## 级联

:::demo

```js
const Demo = () => {
  const [options, setOptions] = React.useState([
    {
      label: '浙江省',
      value: 'zhejiang',
      children: [
        {
          label: '杭州市',
          value: 'hangzhou',
        },
        {
          label: '宁波市',
          value: 'ningbo',
        },
      ],
    },
    {
      label: '江苏省',
      value: 'jiangsu',
      children: [
        {
          label: '南京',
          value: 'nanjing',
        },
        {
          label: '苏州',
          value: 'suzhou',
        },
      ],
    },
  ]);
  const [value, setValue] = React.useState([]);
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">级联：{JSON.stringify(value)}</div>
      <div className="demo-card">
        <CascadePickerView
          value={value}
          options={options}
          onChange={(value, extendValue) => {
            setValue(value);
            console.log('受控CascadePickerView:', value, extendValue.items);
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## 异步级联

:::demo

```js
const Demo = () => {
  const [options, setOptions] = React.useState([
    {
      label: '浙江省',
      value: 'zhejiang',
      leaf: false,
    },
    {
      label: '江苏省',
      value: 'jiangsu',
      leaf: false,
    },
  ]);
  const [value, setValue] = React.useState([]);
  const sleep = delay => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };
  const loadData = async item => {
    await sleep(2000);
    if (item.value === 'zhejiang') {
      return [
        {
          label: '杭州市',
          value: 'hangzhou',
          leaf: true,
        },
        {
          label: '宁波市',
          value: 'ningbo',
          leaf: true,
        },
      ];
    }
    if (item.value === 'jiangsu') {
      return [
        {
          label: '南京',
          value: 'nanjing',
          leaf: true,
        },
        {
          label: '苏州',
          value: 'suzhou',
          leaf: true,
        },
      ];
    }
  };
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">异步加载级联：{JSON.stringify(value)}</div>
      <div className="demo-card">
        <CascadePickerView
          value={value}
          options={options}
          lazy
          lazyLoad={loadData}
          onOptionsUpdate={setOptions}
          onChange={(value, extendValue) => {
            setValue(value);
            console.log('异步加载CascadePickerView:', value, extendValue.items);
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

:::

## PickerView

| 属性         | 说明           | 类型                                                                          | 默认值 |
| ------------ | -------------- | ----------------------------------------------------------------------------- | ------ |
| columns      | 列数据         | `PickerViewColumn[] \| ((value: PickerColumnValue[]) => PickerViewColumn[]);` | `[]`   |
| value        | 值             | `PickerColumnValue[]`                                                         | -      |
| defaultValue | 默认值         | `PickerColumnValue[]`                                                         | `[]`   |
| onChange     | 选项值改变回调 | `(value: PickerColumnValue[], extend: PickerValueExtend) => void;`            | -      |
| onSelect     | 单列选中回调   | `onSelect?: (item?: PickerColumnItem) => void;`                               | -      |

#### PickerColumnItem

```ts
export type PickerColumnItem = {
  label: React.ReactNode;
  value: string;
  loading?: boolean;
};
```

#### PickerViewColumn

```ts
export type PickerViewColumn = (PickerColumnItem | string)[];
```

#### PickerColumnValue

```ts
export type PickerColumnValue = string | null;
```

#### PickerValueExtend

```ts
export type PickerValueExtend = {
  items: (PickerColumnItem | null)[];
};
```

## CascaderPickerView

| 属性            | 说明                 | 类型                                                       | 默认值  |
| --------------- | -------------------- | ---------------------------------------------------------- | ------- |
| options         | 级联配置             | `CascadePickerOption`                                      | `[]`    |
| lazy            | 是否异步加载         | `boolean`                                                  | `false` |
| lazyLoad        | 异步加载函数         | `(CascadePickerOption) => Promise<CascadePickerOption[]>;` | -       |
| onOptionsUpdate | 异步加载后，最新配置 | `(CascadePickerOption) => void;`                           | -       |

#### CascadePickerOption
```ts
export type CascadePickerOption = {
  label: string;
  value: string;
  leaf?: boolean;
  children?: CascadePickerOption[];
};
```
