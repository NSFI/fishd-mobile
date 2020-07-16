# Tabs 标签页


## 一般用法

:::demo 基础用法
```js
render(){
  return(
    <div>
      <div>
        基础用法
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
      </Tabs>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabDirection={"horizontal"}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"},
              {key: "t3", title: "Tabs3"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
        <div key="t3" className="demo-tabs-content">
          content3
        </div>
      </Tabs>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabDirection={"horizontal"}
            count={4}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"},
              {key: "t3", title: "Tabs3"},
              {key: "t4", title: "Tabs4"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
        <div key="t3" className="demo-tabs-content">
          content3
        </div>
        <div key="t4" className="demo-tabs-content">
          content4
        </div>
      </Tabs>
    </div>
  )
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding-top: 50px;
}
```
:::
:::demo 无动画
```js
render(){
  return(
    <div style={{marginTop: "30px"}}>
      <div>
        无动画
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            animated={false}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"},
              {key: "t3", title: "Tabs3"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
        <div key="t3" className="demo-tabs-content">
          content3
        </div>
      </Tabs>
    </div>
  )
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding-top: 50px;
}
```

:::


## 跟手滚动
:::demo 跟手滚动
```js
render(){
  const tabs = [
    {key: "t1", title: "Tabs1"},
    {key: "t2", title: "Tabs2"},
    {key: "t3", title: "Tabs3"},
    {key: "t4", title: "Tabs4"},
    {key: "t5", title: "Tabs5"},
    {key: "t6", title: "Tabs6"},
    {key: "t7", title: "Tabs7"},
    {key: "t8", title: "Tabs8"},
    {key: "t9", title: "Tabs9"}
  ];
  return(
    <div style={{marginTop: "30px"}}>
      <div>
        跟手滚动
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            initialPage={2}
            useOnPan={true}
            tabDirection={"horizontal"}
            tabs={tabs}
            count={3}>
        {
          tabs.map((tab, index) => (
            <div key={tab.key} className="demo-tabs-content">{`content${index+1}`}</div>
          ))
        }
      </Tabs>
    </div>
  )
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding-top: 50px;
}
```

:::

## 纵向Tabs标签页
:::demo 纵向Tabs标签页
```js
render(){
  return(
    <div style={{marginTop: "30px"}}>
      <div>
        纵向Tabs标签页
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabDirection={"vertical"}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"},
              {key: "t3", title: "Tabs3"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
        <div key="t3" className="demo-tabs-content" >
          content3
        </div>
      </Tabs>
    </div>
  )
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding: 50px 0 0 50px;
}
```
:::

## 自定义样式

:::demo 自定义样式

```js
render(){
  return(
    <div style={{marginTop: "30px"}}>
      <div>
        自定义样式
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabsUnderlineStyle={{background: "#26BD71"}}
            tabBarActiveTextColor={"#000000"}
            tabBarInactiveTextColor={"#333333"}
            tabs={[{key: "t1", title: "Tabs1"},
              {key: "t2", title: "Tabs2"},
              {key: "t3", title: "Tabs3"}]}>
        <div key="t1" className="demo-tabs-content">
          content1
        </div>
        <div key="t2" className="demo-tabs-content">
          content2
        </div>
        <div key="t3"className="demo-tabs-content">
          content3
        </div>
      </Tabs>
    </div>
  );
}
```

```less
.demo-tabs-content {
  text-align: center;
  padding-top: 50px;
}
```
:::


## API

| 属性 | 说明         | 类型      | 默认值    |
|----|-----|------|------
| tabs   | 标签数据   | array |   -|
| tabDirection | 标签页方向, "vertical" 或 "horizontal" | string | `horizontal`
|initialPage|初始标签页的下标或者key值|number或string|-|
|count|一屏展示的标签数量|number|`4`|
|useOnPan|是否跟手滚动|boolean|`true`|
|swipeable|是否可以通过左右滑动来切换Tab(只适用于横向标签页)|boolean|`false`|
|animated|Tab切换是否使用动画|boolean|`true`|
|tabsUnderlineStyle|被激活Tab下划线的样式|object|-|
|tabBarActiveTextColor|被激活Tab的文字颜色|string|`#337eff`|
|tabBarInactiveTextColor|未被激活Tab的文字颜色|string|-|
