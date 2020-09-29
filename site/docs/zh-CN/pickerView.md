# PickerView 选择器面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
state = {
  value: null
}

onChange = (value) => {
  this.setState({ value })
}

render() {
  const seasons = [
    [
      {
        label: '2013',
        value: '2013',
      },
      {
        label: '2014',
        value: '2014',
      },
    ],
    [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ],
  ];
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <PickerView
          onChange={this.onChange}
          value={this.state.value}
          data={seasons}
          cascade={false}
        />
      </div>
    </div>
  );
}
```

:::

## 单选

:::demo

```js
state = {
  value: null
}

onChange = (value) => {
  this.setState({ value })
}

render() {
  const seasons = [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ];
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">单选</div>
      <div className="demo-card">
        <PickerView
          onChange={this.onChange}
          value={this.state.value}
          data={seasons}
          cascade={false}
        />
      </div>
    </div>
  );
}
```

:::

## 级联

:::demo

```js
state = {
  value: null
}

onChange = (value) => {
  this.setState({ value })
}

render() {
  const province = [
    {
      label: '北京',
      value: '01',
      children: [
        {
          label: '东城区',
          value: '01-1',
        },
        {
          label: '西城区',
          value: '01-2',
        },
        {
          label: '崇文区',
          value: '01-3',
        },
        {
          label: '宣武区',
          value: '01-4',
        },
      ],
    },
    {
      label: '浙江',
      value: '02',
      children: [
        {
          label: '杭州',
          value: '02-1',
          children: [
            {
              label: '西湖区',
              value: '02-1-1',
            },
            {
              label: '上城区',
              value: '02-1-2',
            },
            {
              label: '江干区',
              value: '02-1-3',
            },
            {
              label: '下城区',
              value: '02-1-4',
            },
          ],
        },
        {
          label: '宁波',
          value: '02-2',
          children: [
            {
              label: '海曙区',
              value: '02-2-1',
            },
            {
              label: '舟山区',
              value: '02-2-2',
            },
          ],
        },
        {
          label: '温州',
          value: '02-3',
        },
        {
          label: '嘉兴',
          value: '02-4',
        },
        {
          label: '湖州',
          value: '02-5',
        },
        {
          label: '绍兴',
          value: '02-6',
        },
      ],
    },
  ];
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">级联</div>
      <div className="demo-card">
        <PickerView
          onChange={this.onChange}
          value={this.state.value}
          data={province}
          cascade
        />
      </div>
    </div>
  );
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| data | 数据源 | `Array<{value, label}>` / `Array<Array<{value, label}>>` | - |
| value | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value | Array<any> | - |
| cascade | 是否级联 | boolean | `false` |
| cols | 列数 | number | `3` |
| onChange | 选中后的回调 | `(val): void` | - |
| itemStyle | 每列样式 | object | - |
| indicatorStyle | indicator 样式 | object | - |
