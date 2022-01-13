# Button 按钮 【交互：刘莹莹 |视觉：徐剑杰 |开发：赵仁建】

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
      <Button type="success">成功按钮</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 朴素按钮

:::demo

```js
render(){
 return(
   <div className="button-plain-md">
    <div className="label">朴素按钮</div>
    <div className="wrapper">
      <Button type="primary" fill="outline">朴素按钮</Button>
      <Button type="success" fill="outline">朴素按钮</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 文本按钮

:::demo

```js
render(){
 return(
   <div className="button-plain-md">
    <div className="label">文本按钮</div>
    <div className="wrapper">
      <Button type="primary" fill="none">文本按钮</Button>
      <Button type="success" fill="none">文本按钮</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
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
      <Button type="primary" fill="outline" hairline>细边框按钮</Button>
      <Button type="success" fill="outline" hairline>细边框按钮</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 禁用状态

:::demo

```js
render(){
 return(
   <div className="button-hairline-md">
    <div className="label">禁用状态</div>
    <div className="wrapper">
      <Button type="primary" disabled>禁用状态</Button>
      <Button type="primary" fill="outline" disabled>禁用状态</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 加载状态

:::demo

```js
render(){
 return(
   <div className="button-loading-md">
    <div className="label">加载状态</div>
    <div className="wrapper">
      <Button type="primary" loading>加载按钮</Button>
      <Button type="primary" fill="outline" loading>加载按钮</Button>
      <Button type="primary" loading loadingText="加载中">加载按钮</Button>
      <Button type="primary" fill="outline" loading loadingText="加载中">加载按钮</Button>
    </div>
  </div>
  )
}
```

```less
.button-loading-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 图标按钮

:::demo

```js
render(){
 return(
   <div className="button-loading-md">
    <div className="label">图标按钮</div>
    <div className="wrapper">
      <Button type="primary">
        <Icon type="plus"></Icon>
      </Button>
      <Button type="primary" fill="outline">
        <Icon type="chat-o" style={{ marginRight: 4 }}></Icon>
        <span>按钮</span>
      </Button>
    </div>
  </div>
  )
}
```

```less
.button-loading-md {
  padding: 0 16px 24px;
  .label {
    font-size: 12px;
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## 块级元素

:::demo

```js
render(){
 return(
   <div className="button-color-md">
    <div className="label">块级元素</div>
    <div className="wrapper">
      <Button type="primary" block>块级元素</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
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
      <Button color="#6850FF" fill="outline">幽灵按钮</Button>
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
    margin-bottom: 12px;
  }
  .fm-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
```

:::

## API

| 参数            | 说明                                      | 类型                                                 | 默认值    |
| --------------- | ----------------------------------------- | ---------------------------------------------------- | --------- |
| activeClassName | 自定义激活类名                            | `string`                                             | -         |
| activeStyle     | 自定义激活样式，设置 false 禁用激活效果   | `boolean \| React.CSSProperties`                      | -         |
| htmlType        | 原生 html 类型                            | `submit \| reset \| button`                          | `button`  |
| type            | 类型                                      | `primary \| success \| warning \| danger \| default` | `default` |
| fill            | 按钮填充效果                              | `solid \| outline \| none`                           | `solid`   |
| size            | 尺寸                                      | `large \| normal \| small \| mini`                         | `normal`  |
| hairline        | 是否使用 0.5px 边框                       | `boolean`                                            | `false`   |
| color           | 按钮颜色，支持传入 linear-gradient 渐变色 | `string`                                             | -         |
| square          | 是否为方形按钮                            | `boolean`                                            | `false`   |
| round           | 是否为圆形按钮                            | `boolean`                                            | `false`   |
| block           | 是否渲染为块                              | `boolean`                                            | `false`   |
| disabled        | 是否禁用                                  | `boolean`                                            | `false`   |
| loading         | 加载状态                                  | `boolean`                                            | `false`   |
| loadingText     | 加载文案                                  | `boolean`                                            | -   |
