# Grid 宫格 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

在水平和垂直方向，将布局切分成若干等大的区块。

## 何时使用

区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

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
      <Grid data={data2}
        columnNum={3}
        border={false}
        renderItem={dataItem => (
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <img src={dataItem} style={{ width: '60px', height: '60px' }} alt="" />
          </div>
        )}
      />
      <div className="sub-title">正方形内容</div>
      <Grid data={data} square={true} />
      <div className="sub-title">无边框</div>
      <Grid data={data} border={false} />
      <div className="sub-title">格子间距</div>
      <Grid data={data} columnNum={3} gutter={16} square={false}/>
      <div className="sub-title">格子间距 + 正方形</div>
      <Grid data={data} columnNum={3} gutter={16} square={true}/>
      <div className="sub-title">自定义背景</div>
      <Grid data={data} columnNum={3} itemStyle={{ background: 'pink' }} />
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
