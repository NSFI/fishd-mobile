# Cascade 级联筛选器 【交互：刘莹莹 |视觉：徐剑杰 |开发：赵仁建】

## 基本使用

:::demo

```js
render(){
  const cascadeData = [
    {
      key: 'key-1',
      label: 'label-1',
      children: [
        {
          key: 'key-1-1',
          label: 'label-1-1',
          parentKey: 'key-1',
        },
        {
          key: 'key-1-2',
          label: 'label-1-2',
          parentKey: 'key-1',
        },
        {
          key: 'key-1-3',
          label: 'label-1-3',
          parentKey: 'key-1',
          children: [
            {
              key: 'key-1-3-1',
              label: 'label-1-3-1',
              parentKey: 'key-1-3',
            },
            {
              key: 'key-1-3-2',
              label: 'label-1-3-2',
              parentKey: 'key-1-3',
            },
          ],
        },
      ],
    },
    {
      key: 'key-2',
      label: 'label-2',
      children: [
        {
          key: 'key-2-1',
          label: 'label-2-1',
          parentKey: 'key-2',
        },
        {
          key: 'key-2-2',
          label: 'label-2-2',
          parentKey: 'key-2',
        },
      ],
    },
  ];
  return(
    <div>
      <Cascade cascadeData={cascadeData} onSelect = {(value) => {console.log(value)}} />
      <Cascade cascadeData={cascadeData} selectId = 'key-1-3-1' onSelect = {(value) => {console.log(value)}} />
    </div>
  )
}
```

```less
.fm-cascade-wrapper {
  margin-bottom: 250px;
}
```

:::

## API

| 参数 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| cascadeData | 级联选择器数据 | Array< {key, label, [children]} > | -
| selectId | 指定当前选中的条目 | string | number | -
| onSelect | 被选中时调用，参数为选中项的 value 值 | (value) => Void             | - |
