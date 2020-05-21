# NavBar 导航栏 

导航栏组件，主要用于头部导航。

## 一般用法

:::demo 一般用法。
```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="components-navbar-demo_title">
        一般用法
      </div>
      <NavBar
        onLeftClick={() => console.log('onLeftClick')}
        leftContent="Back"
      >
      NavBar导航栏示例
      </NavBar>
    </div>
  )
}
```

```less
.components-navbar-demo_title {
  padding: 5px 10px;
  border-left: 2px solid #108ee9;
  margin: 10px 0px;
  color: 10px;
}
```

:::


## 左侧定制

:::demo 左侧可自定义定制。
```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="components-navbar-demo_title">
        左侧定制
      </div>
       <NavBar
        mode="light"
        leftContent={[
          <i className="iconfont fm-home"></i>
        ]}
      >NavBar导航栏示例</NavBar> 
    </div>
  )
}
```

```less
.components-navbar-demo_title {
  padding: 5px 10px;
  border-left: 2px solid #108ee9;
  margin: 10px 0px;
  color: 10px;
}
```
:::


## 右侧定制

:::demo 右侧可自定义定制。
```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="components-navbar-demo_title">
        右侧定制
      </div>
      <NavBar
        mode="dark"
        leftContent={[
          <i className="iconfont fm-home"></i>
        ]}
        rightContent={[
          <i className="iconfont fm-search" style={{'marginRight': '20px'}}></i>,
          <i className="iconfont fm-more"></i>
        ]}
      >NavBar导航栏示例</NavBar>
    </div>
  )
}
```

```less
.components-navbar-demo_title {
  padding: 5px 10px;
  border-left: 2px solid #108ee9;
  margin: 10px 0px;
  color: 10px;
}
```

:::


## 定义模式

:::demo dark和light可选择。
```js
render(){
 return(
    <div className="components-navbar-demo">
        <div className="components-navbar-demo_title">
          选择模式
        </div>
        <NavBar
          mode="light"
          leftContent={[
            <i className="iconfont fm-home"></i>
          ]}
          rightContent={[
            <i className="iconfont fm-search" style={{'marginRight': '20px'}}></i>,
            <i className="iconfont fm-more"></i>
          ]}
        >NavBar导航栏示例</NavBar>
    </div>
  )
}
```

```less
.components-navbar-demo_title {
  padding: 5px 10px;
  border-left: 2px solid #108ee9;
  margin: 10px 0px;
  color: 10px;
}
```

:::


## API

| 属性 | 说明         | 类型                                            | 默认值    |
|----|-----|------|------
| mode   | 模式   | string |  'dark' enum{'dark', 'light'} |
| icon   | 出现在最左边的图标占位符  | ReactNode |  - |
| leftContent   | 导航左边内容      | any |    无  |
| rightContent   | 导航右边内容      | any |    无  |
| onLeftClick   | 导航左边点击回调      | (e: Object): void |    无  |