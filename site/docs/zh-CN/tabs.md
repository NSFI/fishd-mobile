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
            tabs={[{key: "t1", title: "Tabs1"}, {key: "t2", title: "Tabs2"}]}
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
