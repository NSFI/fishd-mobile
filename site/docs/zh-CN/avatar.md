# Avatar 头像 【交互：刘莹莹 |视觉：徐剑杰 |开发：张艳玲】

头像用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 头像类型

:::demo 头像有四种类型：主头像、次头像、危险头像,主头像在同一个操作区域最多出现一次。

```js
render(){
  const Item = List.Item;
 return(
   <div className="components-avatar-demo-basic demo-card">
      <div className='demo-title'>基础用法</div>
      <List>
        <Item><Avatar/> 默认圆形 </Item>
        <Item><Avatar>default</Avatar> 默认文字头像</Item>
        <Item><Avatar disabled/>不可操作</Item>
      </List>
  </div>
  )
}
```

```less
[class^="components-avatar-demo-"] .fm-avatar {
  margin-bottom: 15px ;
  margin-right: 15px ;
}
```
:::

## 头像类型

:::demo 头像展示方式有图片、图标、文字三种。

通过设置特性 `type` 为 `image`(图片头像) `icon`(图标头像) `text`(文字头像) 调整头像类型。若不设置 `type`，则默认为`text`(文字头像)。

```js
  state = {
    type: 'text',
    imageUrl: "https://i.picsum.photos/id/722/300/300.jpg?hmac=9W3nCepg3HA4qJrDeIB4ugk5PmSRTM4Z4RRXlGfsMhI", //"https://unsplash.it/300/300",

  };

  handleTypeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const Item = List.Item;
    const customIcon = <img
          alt="scream icon"
          src="https://img.icons8.com/ios/2x/scream.png" 
          style={{height: 50, width: 50, background: '#bdeaff'}}/>;
    return (
      <div className="components-avatar-demo-size demo-card">
        <div className='demo-title'>类型选择</div>
        <List>
          <Item><Avatar type="text">文字内容</Avatar> 文字信息</Item>
          <Item><Avatar type="image" imageUrl={this.state.imageUrl}/>图片头像</Item>
          <Item><Avatar type="icon" icon="user"/> 字体图标</Item>
          <Item><Avatar type="icon" icon={customIcon}/> 自定义图标 </Item>
        </List>
      </div>
    );
  }
```

```less
[class^="components-avatar-demo-"] .fm-avatar {
  margin-right: 15px ;
}
```

:::




:::

## 头像尺寸

:::demo 头像有大、中、小、加小四种尺寸。

通过设置特性`size` 为 `lg` `md` `sm` `xs` 调整头像的大、小尺寸。若不设置 `size`，则尺寸为中 `md`。

```js
  state = {
    type: 'text',
    imageUrl: "https://i.picsum.photos/id/722/300/300.jpg?hmac=9W3nCepg3HA4qJrDeIB4ugk5PmSRTM4Z4RRXlGfsMhI", //"https://unsplash.it/300/300",

  };

  handleTypeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const Item = List.Item;
    const customIcon = <img
          alt="scream icon"
          src="https://img.icons8.com/ios/2x/scream.png" 
          style={{height: 50, width: 50, background: '#bdeaff'}}/>;
    return (
      <div className="components-avatar-demo-size demo-card">
        <div className='demo-title'>尺寸选择</div>
        <Tabs
        style={{ marginTop: 10 }}
        tabDirection={'horizontal'}
        tabs={[
          { key: 'default', title: '默认' },
          { key: 'xs', title: '加小' },
          { key: 'sm', title: '小' },
          { key: 'md', title: '中' },
          { key: 'lg', title: '大' },
        ]}
      >
       <div key="default" className="demo-tabs-content default">
          <Avatar size="xs">xsmall</Avatar>
          <Avatar size="sm">small</Avatar>
          <Avatar>middle</Avatar>
          <Avatar size="lg">large</Avatar>
        </div>
        <div key="xs" className="demo-tabs-content">
           <List>
            <Item><Avatar type="text" size="xs">文字图标</Avatar> 文字图标 </Item>
            <Item> <Avatar type="image" imageUrl={this.state.imageUrl} size="xs"/> 图片头像</Item>
            <Item><Avatar type="icon" icon="user" size="xs"/> 字体图标</Item>
            <Item><Avatar type="icon" icon={customIcon} size="xs"/> 自定义图标 </Item>
          </List>
        </div>
        <div key="sm" className="demo-tabs-content">
          <List>
            <Item><Avatar type="text" size="sm">文字图标</Avatar> 文字图标 </Item>
            <Item> <Avatar type="image" imageUrl={this.state.imageUrl} size="sm"/> 图片头像</Item>
            <Item><Avatar type="icon" icon="user" size="sm"/> 字体图标</Item>
            <Item><Avatar type="icon" icon={customIcon} size="sm"/> 自定义图标 </Item>
          </List>
        </div>

        <div key="md" className="demo-tabs-content">
          <List>
            <Item><Avatar type="text" size="md">文字图标</Avatar> 文字图标 </Item>
            <Item> <Avatar type="image" imageUrl={this.state.imageUrl} size="md"/> 图片头像</Item>
            <Item><Avatar type="icon" icon="user" size="md"/> 字体图标</Item>
            <Item><Avatar type="icon" icon={customIcon} size="md"/> 自定义图标 </Item>
          </List>
        </div>

         <div key="lg" className="demo-tabs-content">
          <List>
            <Item><Avatar type="text" size="lg">文字图标</Avatar> 文字图标 </Item>
            <Item><Avatar type="image" imageUrl={this.state.imageUrl} size="lg"/>>图片头像</Item>
            <Item><Avatar type="icon" icon="user" size="lg"/> 字体图标</Item>
            <Item><Avatar type="icon" icon={customIcon} size="lg"/> 自定义图标 </Item>
          </List>
        </div>
      </Tabs>

      </div>
    );
  }
```

```less
[class^="components-avatar-demo-"] .fm-avatar {
  margin-right: 15px ;
}
.demo-tabs-content.default {
  margin: 15px;
}
```

:::




:::

## 头像形状

:::demo 头像有大、中、小、加小四种尺寸。

通过设置特性`shape` 为 `circle`(圆形) `square`(方形) \`$length\`或\`${length}px\` \`${length}%\`(自定义), 调整头像的形状。若不设置 `shape`，默认为 `circle`。

```js

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const Item = List.Item;
    return (
      <div className="components-avatar-demo-size demo-card">
        <div className='demo-title'>形状选择</div>
        <List>
            <Item><Avatar/> 默认圆形 -`circle` </Item>
            <Item><Avatar shape="square"/> 方形 - `square`</Item>
            <Item><Avatar shape="5"/> 自定义 -  length</Item>
            <Item><Avatar shape="1em"/> 自定义 -  em</Item>
            <Item><Avatar shape="10px"/>  自定义 - px</Item>
            <Item><Avatar shape="10%"/>  自定义 - %</Item>
          </List>
      </div>
    );
  }
```

```less
[class^="components-avatar-demo-"] .fm-avatar {
  margin-bottom: 15px ;
  margin-right: 15px ;
}
```

:::

## API

通过设置 Avatar 的属性来产生不同的头像样式，
推荐顺序为：`type` -> `shape` -> `size` -> `disabled`

头像的属性说明如下：

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| type | 头像类型, 默认文字类型，去内容第一位 | Enum {'text', 'image', 'icon'}             | 'text' |
| size | 头像大小 | Enum {'xs', 'sm', 'md', 'lg'}              | 'md' |
| shape | 头像形状 |  Number(\|px\|%\|em) \| Enum {'circle', 'square' } | 'circle' |
| imageUrl | 当类型为`image`时，图片头像地址 |   url        | -- |
| icon | 当类型为`icon`时，Icon类型 或自定义图标节点  | Icon[type] \| ReactNode     | -- |

