# Button 按钮 【交互：刘莹莹 |视觉：徐剑杰 |开发：吴圣筑】

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

:::demo 按钮有四种类型：主按钮、次按钮、危险按钮,主按钮在同一个操作区域最多出现一次。

```js
render(){
 return(
   <div className="button-type-md">
    <div className="label">按钮类型</div>
    <div className="wrapper">
      <Button type="primary">主要按钮</Button>
      <Button type="guide">引导按钮</Button>
      <Button>默认按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-type-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .fm-button {
    margin: 12px 16px 0 0;
  }
}
```

:::

## 幽灵按钮

:::demo

```js
render(){
 return(
   <div className="button-plain-md">
    <div className="label">幽灵按钮</div>
    <div className="wrapper">
      <Button type="primary" plain>主要按钮</Button>
      <Button type="guide" plain>引导按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-plain-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .fm-button {
    margin: 12px 16px 0 0;
  }
}
```

:::

## 细边框按钮

:::demo

```js
render(){
 return(
   <div className="button-hairline-md">
    <div className="label">细边框按钮</div>
    <div className="wrapper">
      <Button type="primary" plain hairline>主要按钮</Button>
      <Button type="guide" plain hairline>引导按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-hairline-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .fm-button {
    margin: 12px 16px 0 0;
  }
}
```

:::

## 按钮形状

:::demo

```js
render(){
 return(
   <div className="button-size-md">
    <div className="label">按钮形状</div>
    <div className="wrapper">
      <Button type="primary" square>方形按钮</Button>
      <Button type="primary" round>圆形按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-size-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .fm-button {
    margin: 12px 16px 0 0;
  }
}
```

:::

## 按钮尺寸

:::demo

```js
render(){
 return(
   <div className="button-size-md">
    <div className="label">按钮尺寸</div>
    <div className="wrapper">
      <Button type="primary" size="large">大号按钮</Button>
      <Button type="primary" size="normal">普通按钮</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">迷你按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-size-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .fm-button {
    margin: 12px 16px 0 0;
  }
}
```

:::

## 自定义颜色

:::demo

```js
render(){
 return(
   <div className="button-color-md">
    <div className="label">自定义颜色</div>
    <div className="wrapper">
      <Button color="#6850FF">单色按钮</Button>
      <Button color="#6850FF" plain>幽灵按钮</Button>
      <Button color="linear-gradient(269deg, #A783FF 0%, #7921FF 100%)">渐变色按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-color-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    margin-bottom: 12px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .fm-button {
    margin: 12px 16px 0 0;
    &:last-child {
      margin-right: 0;
    }
  }
}
```

:::

## API

| 参数 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| type | 类型，可选值为 primary guide warning danger | string | default
| size | 尺寸，可选值为 large small mini | string             | normal |
| color | 按钮颜色，支持传入linear-gradient渐变色| string | - |
| plain | 是否为朴素按钮| boolean | false |
| square | 是否为方形按钮| boolean | false |
| round | 是否为圆形按钮| boolean | false |
