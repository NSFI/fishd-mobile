# Layout 布局 【交互：刘莹莹 |视觉：徐剑杰 |开发：周旋】



## 何时使用



:::demo

```js
render(){
  const {Row, Col} = Layout 
  return(
  <div className="components-layout-demo-basic">
    <div className="components-layout-demo_title">
      基础用法
    </div>
    <Row>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
    </Row>

    <Row>
      <Col span="4">span:4</Col>
      <Col span="10" offset="4">offset:4,span:10</Col>
    </Row>

    <Row>
      <Col span="12" offset="12">offset:12,span:12</Col>
    </Row>

    <div className="components-layout-demo_title">
      在列元素之间增加间距
    </div>
    <Row gutter="20">
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
    </Row>
    <div className="components-layout-demo_title">
      Flex 布局
    </div>
    {/* 左对齐 */}
    <Row type="flex">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>

    {/* 居中 */}
    <Row type="flex" justify="center">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>

    {/* 右对齐 */}
    <Row type="flex" justify="end">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>

    {/* 两端对齐 */}
    <Row type="flex" justify="space-between">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>

    {/* 每个元素的两侧间隔相等 */}
    <Row type="flex" justify="space-around">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
  </div>
  )
}
```

```less

.components-layout-demo-basic {
  .components-layout-demo_title {
    margin: 0;
    padding: 16px 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .fm-col{
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
    &:nth-child(odd) {
      background-color: #337EFF;
    }

    &:nth-child(even) {
      background-color: #66d4ff;
    }
  }
}

```


:::

## API


### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为`flex` | _string_ | - |
| gutter | 列元素之间的间距（单位为 px） | _number \| string_ | - |
| tag | 自定义元素标签 | _string_ | `div` |
| justify | Flex 主轴对齐方式，可选值为 `start` `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `top` `center` `bottom` | _string_ | `top` |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number \| string_ | -      |
| offset | 列元素偏移距离 | _number \| string_ | -      |
| tag    | 自定义元素标签 | _string_           | `div`  |

### Row Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| onClick  | 点击时触发 | _event: Event_ |

### Col Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| onClick  | 点击时触发 | _event: Event_ |