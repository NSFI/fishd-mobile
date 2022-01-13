# Tabs 标签页

## 一般用法

:::demo 基础用法

```js
render() {
  return (
    <div>
      <div className="demo-title">基本用法（数量2～4）</div>
      <Tabs
        style={{ marginTop: 10 }}
        tabDirection={'horizontal'}
        tabs={[
          { key: 't1', title: '标题1' },
          { key: 't2', title: '标题2' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
      </Tabs>
      <Tabs
        style={{ marginTop: 10 }}
        tabDirection={'horizontal'}
        tabs={[
          { key: 't1', title: '标题1' },
          { key: 't2', title: '标题2' },
          { key: 't3', title: '标题3' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
        <div key="t3" className="demo-tabs-content">
          标签内容3
        </div>
      </Tabs>
      <Tabs
        style={{ marginTop: 10 }}
        tabDirection={'horizontal'}
        count={4}
        tabs={[
          { key: 't1', title: '标题1' },
          { key: 't2', title: '标题2' },
          { key: 't3', title: '标题3' },
          { key: 't4', title: '标题4' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
        <div key="t3" className="demo-tabs-content">
          标签内容3
        </div>
        <div key="t4" className="demo-tabs-content">
          标签内容4
        </div>
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 30px 0;
  color: #999999;
  font-size: 12px;
}
```

:::
:::demo 无动画

```js
render() {
  return (
    <div>
      <div className="demo-title">无动画</div>
      <Tabs
        animated={false}
        tabs={[
          { key: 't1', title: '标签1' },
          { key: 't2', title: '标签2' },
          { key: 't3', title: '标签3' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
        <div key="t3" className="demo-tabs-content">
          标签内容3
        </div>
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 50px 0;
}
```

:::

## 跟手滚动

:::demo 跟手滚动

```js
render() {
  const tabs = [
    { key: 't1', title: '标签1' },
    { key: 't2', title: '标签2' },
    { key: 't3', title: '标签3' },
    { key: 't4', title: '标签4' },
    { key: 't5', title: '标签5' },
    { key: 't6', title: '标签6' },
    { key: 't7', title: '标签7' },
    { key: 't8', title: '标签8' },
    { key: 't9', title: '标签9' },
  ];
  return (
    <div>
      <div className="demo-title">基本用法（数量4个以上）-选择标签自动滑动</div>
      <Tabs initialPage={2} useOnPan={true} tabDirection={'horizontal'} tabs={tabs} count={3}>
        {tabs.map((tab, index) => (
          <div key={tab.key} className="demo-tabs-content">{`content${index + 1}`}</div>
        ))}
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 50px 0;
}
```

:::

## 纵向 Tabs 标签页

:::demo 纵向 Tabs 标签页

```js
render() {
  return (
    <div>
      <div className="demo-title">垂直标签</div>
      <Tabs
        style={{ height: 200 }}
        tabDirection={'vertical'}
        tabs={[
          { key: 't1', title: '标签1' },
          { key: 't2', title: '标签2' },
          { key: 't3', title: '标签3' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
        <div key="t3" className="demo-tabs-content">
          标签内容3
        </div>
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 20px;
}
```

:::

## 自定义样式

:::demo 自定义样式

```js
render() {
  return (
    <div>
      <div className="demo-title">自定义颜色</div>
      <Tabs
        tabsUnderlineStyle={{ background: '#26BD71' }}
        tabBarActiveTextColor={'#000000'}
        tabBarInactiveTextColor={'#333333'}
        tabs={[
          { key: 't1', title: '标签1' },
          { key: 't2', title: '标签2' },
          { key: 't3', title: '标签3' },
        ]}
      >
        <div key="t1" className="demo-tabs-content">
          标签内容1
        </div>
        <div key="t2" className="demo-tabs-content">
          标签内容2
        </div>
        <div key="t3" className="demo-tabs-content">
          标签内容3
        </div>
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 50px 0;
}
```

:::

## API

| 属性                    | 说明                                               | 类型             | 默认值       |
| ----------------------- | -------------------------------------------------- | ---------------- | ------------ |
| tabs                    | 标签数据                                           | array            | -            |
| tabDirection            | 标签页方向, "vertical" 或 "horizontal"             | string           | `horizontal` |
| initialPage             | 初始标签页的下标或者 key 值                        | number 或 string | -            |
| count                   | 一屏展示的标签数量                                 | number           | `4`          |
| useOnPan                | 是否跟手滚动                                       | boolean          | `true`       |
| swipeable               | 是否可以通过左右滑动来切换 Tab(只适用于横向标签页) | boolean          | `false`      |
| animated                | Tab 切换是否使用动画                               | boolean          | `true`       |
| tabsUnderlineStyle      | 被激活 Tab 下划线的样式                            | object           | -            |
| tabBarActiveTextColor   | 被激活 Tab 的文字颜色                              | string           | `#337eff`    |
| tabBarInactiveTextColor | 未被激活 Tab 的文字颜色                            | string           | -            |
