# Layout 布局 【交互：刘莹莹 |视觉：徐剑杰 |开发：周旋】

## 何时使用

行列布局场景下可使用

:::demo

```js
render(){
  const { Row, Col } = Layout
  return(
  <div>
    <DemoBlock title="基础用法">
      <Row>
        <Col span="12">ospan:12</Col>
        <Col span="12">span:12</Col>
      </Row>
      <Row>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
    </Row>

    <Row>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
      <Col span="8">span:8</Col>
    </Row>

    <Row>
      <Col span="4">span:4</Col>
      <Col span="10" offset="4">offset:4,span:10</Col>
    </Row>
    </DemoBlock>


    <DemoBlock title="元素间增加间距">
      <Row gutter="20">
      <Col span="12">span: 12</Col>
      <Col span="12">span: 12</Col>
    </Row>
    <Row gutter="20">
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
    </Row>
    <Row gutter="20">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
    </DemoBlock>

    <DemoBlock title="柔性布局">
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
   </DemoBlock>
  </div>
  )
}
```

```less
.fm-row {
  margin-bottom: 12px;
}
.fm-col {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  background-clip: content-box;
  &:nth-child(odd) {
    background-color: #337eff;
  }

  &:nth-child(even) {
    background-color: #337eff;
    opacity: 0.8;
  }
}
```

:::

## API

### Row API

| 参数    | 说明                                                                                   | 类型                     | 默认值  |
| ------- | -------------------------------------------------------------------------------------- | ------------------------ | ------- |
| type    | 布局方式，可选值为`flex`                                                               | `string`                 | -       |
| gutter  | 列元素之间的间距（单位为 px）                                                          | `number \| string`       | -       |
| tag     | 自定义元素标签                                                                         | `string`                 | `div`   |
| justify | Flex 主轴对齐方式，可选值为 `start` `end` `center` <br> `space-around` `space-between` | `string`                 | `start` |
| align   | Flex 交叉轴对齐方式，可选值为 `top` `center` `bottom`                                  | `string`                 | `top`   |
| onClick | 点击回调                                                                               | `(event: Event) => void` | -       |

### Col API

| 参数    | 说明           | 类型                     | 默认值 |
| ------- | -------------- | ------------------------ | ------ |
| span    | 列元素宽度     | `number \| string`       | -      |
| offset  | 列元素偏移距离 | `number \| string`       | -      |
| tag     | 自定义元素标签 | `string`                 | `div`  |
| onClick | 点击回调       | `(event: Event) => void` | -      |
