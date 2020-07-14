# Badge 徽标数 【交互：刘莹莹 | 视觉：徐剑杰 |开发：欧晨曦】

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

## 何时使用

- 当用户只需知道大致有内容更新时，应该使用红点型，如：社交中的群消息通知。
- 当用户有必要知晓每条更新时，应该使用数字型。如：社交中的一对一的消息通知。

## 基础用法

:::demo 基础用法。
```js
render() {
  return (
    <div className='components-badge-demo-basic'>
    <div className='sub-title'>基础用法</div>
      <List>
        <List.Item extra="extra" arrow="horizontal">
          <Badge dot>
            <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
          </Badge>
          <span style={{ marginLeft: 12 }}>Dot badge</span>
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-basic {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
```
:::

## 展示封顶的数字值

:::demo 展示封顶的数字值。
```js
render() {
  return (
    <div className='components-badge-demo-overflow'>
    <div className='sub-title'>展示封顶的数字值</div>
      <List>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
          extra={<Badge text={77} overflowCount={55} />}
          arrow="horizontal"
        >
          Content
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-overflow {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
```
:::

## 置于角落

:::demo 置于角落。
```js
render() {
  return (
    <div className='components-badge-demo-corner'>
    <div className='sub-title'>置于角落</div>
      <List>
        <List.Item><Badge text={'促'} corner>
          <div className="corner-badge">Use corner prop</div>
        </Badge></List.Item>
        <List.Item className="special-badge" extra={<Badge text={'促'} />}>
          Custom corner
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-corner {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
.corner-badge {
  height: 50px;
  width: 200px;
}
.special-badge .fm-list-line {
  padding-right: 0;
}
.special-badge .fm-list-line .fm-list-extra {
  padding: 0;
  height: 44px;
}
.special-badge .fm-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 13px;
  width: 50px;
}
.special-badge .fm-badge-text {
  border-radius: 1px;
}
```
:::

## text为0时隐藏

:::demo text为0时隐藏。
```js
render() {
  return (
    <div className='components-badge-demo-hidden'>
    <div className='sub-title'>text为0时隐藏</div>
      <List>
        <List.Item extra="extra" arrow="horizontal">
          <Badge text={0} style={{ marginLeft: 12 }}>Text 0</Badge>
          <Badge text={'new'} style={{ marginLeft: 12 }} />
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-hidden {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
```
:::

## 营销样式

:::demo 营销样式。
```js
render() {
  return (
    <div className='components-badge-demo-market'>
    <div className='sub-title'>营销样式</div>
      <List>
        <List.Item>
          Marketing:
          <Badge text="减" hot style={{ marginLeft: 12 }} />
          <Badge text="惠" hot style={{ marginLeft: 12 }} />
          <Badge text="免" hot style={{ marginLeft: 12 }} />
          <Badge text="HOT" hot style={{ marginLeft: 12 }} />
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-market {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
```
:::

## 自定义样式

:::demo 自定义样式。
```js
render() {
  return (
    <div className='components-badge-demo-custom'>
    <div className='sub-title'>自定义样式</div>
      <List>
        <List.Item>
          Customize
          <Badge text="券" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
          <Badge text="NEW" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
          <Badge text="自动缴费"
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736',
            }}
          />
        </List.Item>
      </List>
    </div>
  );
}
```

```less
.components-badge-demo-custom {
  padding-bottom: 24px;
}
[class^="components-badge-demo-"] .sub-title {
  padding-bottom: 10px;
  color: #333;
  font-size: 12px;
}
```
:::


## API

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
size | 大小，可选 `large` `small` | string | `'small'`
text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | string\|number | -
corner | 置于角落 | boolean | `false`
dot | 不展示数字，只有一个小红点 | boolean | `false`
overflowCount | 展示封顶的数字值 | number | `99`
hot | 营销样式 | boolean | `false`