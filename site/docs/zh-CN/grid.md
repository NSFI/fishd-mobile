# Grid 宫格 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

遵循一定规则来使用固定格子进行页面的布局设计，使布局规范简洁有规则

:::demo

```js
state = {}

render(){
  const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  const data2 = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg'
  ]
 return(
    <div className="components-grid-demo-basic">
      <div className="sub-title">基础用法</div>
      <Grid data={data} activeStyle={false} />
      <div className="sub-title">自定义-列数</div>
      <Grid data={data} columnNum={3} />
      <div className="sub-title">自定义-内容</div>
      <Grid
        data={data2}
        columnNum={3}
        border={false}
        itemStyle={{ padding: 0 }}
        activeStyle={false}
        renderItem={dataItem => (
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <img src={dataItem} style={{ width: '100%', height: '80px' }} alt="" />
          </div>
        )}
      />
      <div className="sub-title">正方形内容</div>
      <Grid data={data} square={true} />
      <div className="sub-title">无边框</div>
      <Grid data={data} border={false} />
      <div className="sub-title">格子间距</div>
      <Grid data={data} columnNum={3} gutter={16} />
      <div className="sub-title">格子间距 + 正方形</div>
      <Grid data={data} columnNum={3} gutter={16} square={true}/>
      <div className="sub-title">自定义背景</div>
      <Grid data={data} columnNum={3} itemStyle={{ background: '#337EFF' }} />
    </div>
  )
}
```

```less
.components-grid-demo-basic {
  padding-bottom: 40px;
}
[class^="components-grid-demo-"] .sub-title {
  padding: 10px 0;
  color: #ccc;
  font-size: 12px;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| data | 传入的菜单数据 | Array<{icon, text}> | `[]` |
| onClick | 点击每个菜单的回调函数 | (el: Object, index: number): void | `default` |
| columnNum | 列数 | number | `4` |
| border | 是否有边框 | boolean | `true` |
| renderItem | 自定义每个 grid 条目的创建函数 | (el, index) => React.Node | `-` |
| square|	每个格子是否固定为正方形 | boolean | false |
| activeStyle | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | `{}` |
| activeClassName | 点击反馈的自定义类名 | string | `-` |
| itemStyle | 每个格子自定义样式 | object | `{}` |