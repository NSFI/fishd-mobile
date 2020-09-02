# Picker 选择器 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
state = {
  value: null,
  sValue: null,
  addressValue: null,
}

fmtValue = (data) => {
  const value = this.state.addressValue;
  if (!value) {
    return '';
  }
  const treeChildren = arrayTreeFilter(data, (c, level) => {
    return c.value === value[level];
  });
  return treeChildren.map((v) => {
    return v.label;
  }).join(',');
}

render() {
  const fruit = [
    {
      label: '苹果',
      value: '苹果',
    },
    {
      label: '橘子',
      value: '橘子',
    },
    {
      label: '香蕉',
      value: '香蕉',
    },
  ]
  const seasons = [
    [
      {
        label: '2019',
        value: '2019',
      },
      {
        label: '2020',
        value: '2020',
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
      {
        label: '秋',
        value: '秋',
      },
      {
        label: '冬',
        value: '冬',
      },
    ],
  ];
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
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <List>
          <Picker
            data={fruit}
            title="选择水果"
            cascade={false}
            extra="请选择(可选)"
            value={this.state.value}
            onChange={v => {
              this.setState({ value: v }) 
            }}
            onDismiss={ () => {
              Toast.info('取消选择');
            }}
            onPickerChange={(v) => {}}
          >
            <List.Item extra={this.state.value ? this.state.value : '水果' }>单列</List.Item>
          </Picker>
          <Picker
            data={seasons}
            title="选择季节"
            cascade={false}
            extra="请选择(可选)"
            value={this.state.sValue}
            onChange={v => {
              this.setState({ sValue: v })
            }}
            onDismiss={ () => {
              Toast.info('取消选择');
            }}
          >
            <List.Item extra={this.state.sValue ? this.state.sValue.join(',') : '年份/季节' }>多列</List.Item>
          </Picker>
          <Picker
            data={province}
            title="地区选择"
            cascade
            extra="请选择(可选)"
            value={this.state.addressValue}
            onChange={v => {
              this.setState({ addressValue: v })
            }}
            onDismiss={ () => {
              Toast.info('取消选择');
            }}
          >
            <List.Item extra={this.fmtValue(province) || '地区选择'}>级联</List.Item>
          </Picker>
        </List>
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
| itemStyle | 每列样式 | object | - |
| indicatorStyle | indicator 样式 | object | - |
| disabled | 是否不可用 | boolean | `false` |
| onChange | 选中后的回调 | `(val): void` | - |
| onOk | 点击选中时执行的回调 | `(val): void` | - |
| onDismiss | 点击取消时执行的回调 | `(): void` | - |
| onVisibleChange | 当显隐状态变化时回调函数 | `(visible: bool): void` | - |
