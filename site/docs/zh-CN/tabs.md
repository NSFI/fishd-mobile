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

:::demo 跟手滚动。
```js
render(){
 return(
    <div>
      <div>
        跟手滚动
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            initialPage={2}
            useOnPan={true}
            tabDirection={"horizontal"}
            tabs={[{key: "t1", title: "Tabs1"},
{key: "t2", title: "Tabs2"},
{key: "t3", title: "Tabs3"},
{key: "t4", title: "Tabs4"},
{key: "t5", title: "Tabs5"},
{key: "t6", title: "Tabs6"},
{key: "t7", title: "Tabs7"},
{key: "t8", title: "Tabs8"},
{key: "t9", title: "Tabs9"}]}
count={3}
      >
      <div key="t1">
        content1
      </div>
      <div key="t2">
        content2
<br/>
        content2
<br/>
        content2
<br/>
        content2
<br/>
        content2
<br/>
content2
<br/>
        content2
<br/>
        content2
<br/>
        content2
<br/>
        content2

      </div>
<div key="t3">
        content3
      </div>
<div key="t4">
        content4
      </div>
<div key="t5">
        content5
      </div>
<div key="t6">
        content6
      </div>
<div key="t7">
        content7
      </div>
<div key="t8">
        content8
      </div>
<div key="t9">
        content9
      </div>
      </Tabs>
    </div>
  )
}
```

:::


## API

| 属性 | 说明         | 类型                                            | 默认值    |
|----|-----|------|------
| tabs   | 标签数据   | array |   |
