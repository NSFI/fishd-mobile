# Tabs 标签页


## 一般用法

:::demo 一般用法。
```js
render(){
 return(
    <div>
      <div>
        一般用法
      </div>
      <Tabs style={{height: "200px", marginTop: "10px"}}
            initialPage={2}
            useOnPan={true}
            tabDirection={"vertical"}
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
        <p>content1</p>
      </div>
      <div key="t2">
        <p>content2</p>
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
