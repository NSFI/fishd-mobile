# Grid 宫格 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

:::demo

```js
const Demo = () => {
  const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  const data2 = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg',
  ];

  return (
    <div>
      <DemoBlock title="基础用法" noStyle>
        <Grid data={data} activeStyle={false} />
      </DemoBlock>

      <DemoBlock title="自定义-列数" noStyle>
        <Grid data={data} columnNum={3} />
      </DemoBlock>

      <DemoBlock title="自定义-内容" noStyle>
        <Grid
          data={data2}
          columnNum={3}
          border={false}
          itemStyle={{ padding: 0 }}
          activeStyle={false}
          renderItem={dataItem => (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src={dataItem} style={{ width: '100%', height: '80px' }} alt="" />
            </div>
          )}
        />
      </DemoBlock>

      <DemoBlock title="正方形内容" noStyle>
        <Grid data={data} square={true} />
      </DemoBlock>

      <DemoBlock title="无边框" noStyle>
        <Grid data={data} border={false} />
      </DemoBlock>

      <DemoBlock title="间距" noStyle>
        <Grid data={data} columnNum={3} gutter={16} />
      </DemoBlock>

      <DemoBlock title="间距 + 正方形" noStyle>
        <Grid data={data} columnNum={3} gutter={16} square={true} />
      </DemoBlock>

      <DemoBlock title="自定义背景颜色" noStyle>
        <Grid data={data} columnNum={3} itemStyle={{ background: '#337EFF' }} />
      </DemoBlock>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
.demo-block__body {
  background-color: transparent;
}
```

:::

## API

| 属性            | 说明                                                 | 类型                                              | 默认值  |
| --------------- | ---------------------------------------------------- | ------------------------------------------------- | ------- |
| data            | 传入的菜单数据                                       | `DataItem[]`                                      | `[]`    |
| onClick         | 点击每个菜单的回调函数                               | `(DataItem: Object, index: number): void`         | -       |
| columnNum       | 列数                                                 | `number`                                          | `4`     |
| border          | 是否有边框                                           | `boolean`                                         | `true`  |
| renderItem      | 自定义每个 grid 条目的创建函数                       | `(DataItem: Object, index: number) => React.Node` | -       |
| square          | 每个格子是否固定为正方形                             | `boolean`                                         | `false` |
| activeStyle     | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | `React.CSSProperties \| false`                    | -       |
| activeClassName | 点击反馈的自定义类名                                 | `string`                                          | -       |
| itemStyle       | 每个格子自定义样式                                   | `React.CSSProperties`                             | -       |

### DataItem

| 属性 | 说明 | 类型              | 默认值 |
| ---- | ---- | ----------------- | ------ |
| icon | 图标 | `React.ReactNode` | -      |
| text | 标题 | `React.ReactNode` | -      |
