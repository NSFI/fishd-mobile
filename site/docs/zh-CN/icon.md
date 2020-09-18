# Icon 图标 【视觉：徐剑杰 |开发：赵仁建】

## 基本用法

:::demo

```js
render(){
 return(
   <div className="demo-icon">
    <div className="label">基本用法</div>
    <div className="wrapper">
      <div className="icon-item"><Icon type="home-x1x" /></div>
      <div className="icon-item"><Icon type="chat-x1x" /></div>
      <div className="icon-item"><Icon type="application-x1x" /></div>
    </div>
  </div>
  )
}
```

```less
.demo-icon {
  margin-bottom: 32px;
  .wrapper {
    display: flex;
    background-color: #fff;
    padding: 25px 0;
    .icon-item {
      width: 20vw;
      text-align: center;
    }
  }
  .fm-icon {
    font-size: 24px;
  }
  .label {
    font-size: 12px;
    color: #333;
    margin-bottom: 12px;
    padding-left: 16px;
  }
}
```

:::

## 徽标提示

:::demo

```js
render(){
 return(
   <div className="demo-icon">
    <div className="label">徽标提示</div>
    <div className="wrapper">
      <div className="icon-item"><Icon type="chat-x1x" dot /></div>
      <div className="icon-item"><Icon type="chat-x1x" badge="9" /></div>
      <div className="icon-item"><Icon type="chat-x1x" badge="99+" /></div>
    </div>
  </div>
  )
}
```

```less
.demo-icon {
  margin-bottom: 32px;
  .wrapper {
    display: flex;
    background-color: #fff;
    padding: 25px 0;
    .icon-item {
      width: 20vw;
      text-align: center;
    }
  }
  .fm-icon {
    font-size: 24px;
  }
  .label {
    font-size: 12px;
    color: #333;
    margin-bottom: 12px;
    padding-left: 16px;
  }
}
```

:::

## 图标颜色

:::demo

```js
render(){
 return(
   <div className="demo-icon">
    <div className="label">图标颜色</div>
    <div className="wrapper">
      <div className="icon-item"><Icon type="chat-x1x" color="#337EFF" /></div>
      <div className="icon-item"><Icon type="chat-x1x" color="#8875FF" /></div>
      <div className="icon-item"><Icon type="chat-x1x" color="#26BD71" /></div>
    </div>
  </div>
  )
}
```

```less
.demo-icon {
  margin-bottom: 32px;
  .wrapper {
    display: flex;
    background-color: #fff;
    padding: 25px 0;
    .icon-item {
      width: 20vw;
      text-align: center;
    }
  }
  .fm-icon {
    font-size: 24px;
  }
  .label {
    font-size: 12px;
    color: #333;
    margin-bottom: 12px;
    padding-left: 16px;
  }
}
```

:::

## 图标大小

:::demo

```js
render(){
 return(
   <div className="demo-icon">
    <div className="label">图标大小</div>
    <div className="wrapper">
      <div className="icon-item"><Icon type="chat-x1x" fontSize={15} /></div>
      <div className="icon-item"><Icon type="chat-x1x" fontSize="20px" /></div>
      <div className="icon-item"><Icon type="chat-x1x" fontSize="2rem" /></div>
    </div>
  </div>
  )
}
```

```less
.demo-icon {
  margin-bottom: 32px;
  .wrapper {
    display: flex;
    background-color: #fff;
    padding: 25px 0;
    .icon-item {
      width: 20vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .fm-icon {
    font-size: 24px;
  }
  .label {
    font-size: 12px;
    color: #333;
    margin-bottom: 12px;
    padding-left: 16px;
  }
}
```

:::

## API

| 参数 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| type | 类型，可选值为 primary guide warning danger | string | default
| dot | 是否显示图标右上角小红点 | boolean             | false |
| badge | 图标右上角徽标的内容| string | - |
| color | 图标颜色| string | inherit |
| size | 图标大小，如 20px 2em，默认单位为px| number \| string | inherit |
| click | 点击图标时触发| event: Event | - |
