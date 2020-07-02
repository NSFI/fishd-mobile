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
            tabDirection={"horizontal"}
            tabs={[{key: "t1", title: "Tabs1"},
                   {key: "t2", title: "Tabs2"},
                   {key: "t3", title: "Tabs3"}]}>
      <div key="t1">
        content1
      </div>
      <div key="t2">
        content2
      </div>
      <div key="t3">
        content3
      </div>
      </Tabs>
    </div>
  )
}
```

:::

:::demo 跟手滚动。
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
    <div>
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
            <div key={tab.key}>{`content${index+1}`}</div>
          ))
        }
      </Tabs>
    </div>
  )
}
```

:::


:::demo 纵向Tabs标签页
```js
render(){
 return(
    <div>
      <div>
        纵向Tabs标签页
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            tabDirection={"vertical"}
            tabs={[{key: "t1", title: "Tabs1"},
                   {key: "t2", title: "Tabs2"},
                   {key: "t3", title: "Tabs3"}]}>
      <div key="t1">
        content1
      </div>
      <div key="t2">
        content2
      </div>
      <div key="t3">
        content3
      </div>
      </Tabs>
    </div>
  )
}
```

:::


## API

| 属性 | 说明         | 类型      | 默认值    |
|----|-----|------|------
| tabs   | 标签数据   | array |   无|
| tabDirection | 标签页方向, "vertical" 或 "horizontal" | string | "horizontal"
|initialPage|初始标签页的下标或者key值|number或string|无|
|count|一屏展示的标签数量|number|3|
|useOnPan|是否跟手滚动|boolean|true或false|
|swipeable|是否可以通过左右滑动来切换Tab(只适用于横向标签页)|boolean|true或false|
|animated|Tab切换是否使用动画|boolean|true或false|
