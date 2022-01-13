# NavBar 导航栏

导航栏组件，主要用于头部导航。

## 一般用法

:::demo 基本用法

```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="demo-title">
        基本用法
      </div>
      <NavBar
        onLeftClick={() => console.log('onLeftClick')}
        leftContent={<Icon type="allow-left" fontSize={20} />}
        rightContent="按钮"
      >标题</NavBar>
    </div>
  )
}
```

:::

## 左侧定制

:::demo 左侧可自定义定制。

```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="demo-title">
        左侧定制
      </div>
       <NavBar
        mode="light"
        leftContent={[
          <Icon type="allow-left" fontSize={20} />,
          <span>返回</span>
        ]}
        rightContent="按钮"
      >标题</NavBar>
    </div>
  )
}
```

:::

## 右侧定制

:::demo 右侧可自定义定制。

```js
render(){
 return(
    <div className="components-navbar-demo">
      <div className="demo-title">
        右侧定制
      </div>
      <NavBar
        mode="dark"
        leftContent={[
          <Icon type="home-o" fontSize={20} />
        ]}
        rightContent={[
          <Icon type="search" fontSize={20} style={{ marginRight: '10px' }} />,
          <Icon type="plus" fontSize={20} />,
        ]}
      >标题</NavBar>
    </div>
  )
}
```

:::

## 自定义导航

:::demo dark 和 light 可选择。

```js
render(){
 return(
    <div className="components-navbar-demo">
        <div className="demo-title">
          自定义导航
        </div>
        <NavBar
          leftContent={[
            <Icon type="allow-left" fontSize={20} />
          ]}
          rightContent={[
            <Icon type="plus" fontSize={20} />,
          ]}
        ><div class="u-search"><Icon type="search" fontSize={14} color='#B2B5C2' style={{ marginRight: '5px' }} />搜索</div></NavBar>
    </div>
  )
}
```

```less
.components-navbar-demo {
  .u-search {
    display: flex;
    align-items: center;
    width: 220px;
    height: 30px;
    padding: 0 13px;
    font-size: 12px;
    background: #fff;
    color: #b2b5c2;
    border: 1px solid #e1e3e6;
    border-radius: 15px;
  }
}
```

:::

:::

## 自定义导航

:::demo dark 和 light 可选择。

```js
render(){
 return(
    <div className="components-navbar-demo">
        <div className="demo-title">
          自定义导航
        </div>
        <NavBar
          style={{ background: '#337EFF' }}
          leftContent={[
            <Icon type="allow-left" fontSize={20} color='#fff' />
          ]}
          rightContent={[
            <Icon type="plus" fontSize={20} color='#fff' />,
          ]}
        ><div class="u-search"><Icon type="search" fontSize={14} color='#B2B5C2' style={{ marginRight: '5px' }} />搜索</div></NavBar>
    </div>
  )
}
```

```less
.components-navbar-demo {
  .u-search {
    display: flex;
    align-items: center;
    width: 220px;
    height: 30px;
    padding: 0 13px;
    font-size: 12px;
    background: #fff;
    color: #b2b5c2;
    border-radius: 15px;
  }
}
```

:::

:::

## API

| 属性         | 说明                     | 类型                | 默认值 |
| ------------ | ------------------------ | ------------------- | ------ |
| mode         | 模式                     | `dark \| light`     | `dark` |
| icon         | 出现在最左边的图标占位符 | `React.ReactNode`   | -      |
| leftContent  | 导航左边内容             | `React.ReactNode`   | -     |
| rightContent | 导航右边内容             | `React.ReactNode`   | -     |
| onLeftClick  | 导航左边点击回调         | `(e: Object): void` | -     |
