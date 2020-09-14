# Avatar 头像 【交互：刘莹莹 |视觉：徐剑杰 |开发：张艳玲】

头像用于展示一个对象及其附带信息。

## 何时使用

标记一个信息对象。


##  基本用法

:::demo 头像有三种类型：图片头像、图标头像、文字头像, 默认头像为圆形文字头像，可置为不可操作。

```js
render(){
  const Item = List.Item;
 return(
   <div className="components-avatar-demo-basic demo-card">
      <div className='demo-title'>基础用法</div>
      <List>
        <Item><Avatar/>默认圆形 </Item>
        <Item><Avatar>default</Avatar>默认文字头像</Item>
        <Item><Avatar disabled>不可操作</Avatar>不可操作</Item>
      </List>
  </div>
  )
}
```

```less
[class^="components-avatar-demo-"] .fm-badge{
  margin-rgiht: 15px;
  >.fm-avatar {
    margin-right: 0 ;
  }
}
[class^="components-avatar-demo-"] .fm-avatar {
  //margin-bottom: 15px ;
  margin-right: 15px ;
}
.fm-avatar-icon-font {
    background: #3a7dbf;
}

```
:::

## 头像类型

:::demo 头像展示方式有图片、图标、文字三种。

通过设置特性 `type` 为 `image`(图片头像) `icon`(图标头像) `text`(文字头像) 调整头像类型。若不设置 `type`，则默认为`text`(文字头像)。

```js
  state = {
    type: 'text',
    imageUrl: "https://i.picsum.photos/id/722/300/300.jpg?hmac=9W3nCepg3HA4qJrDeIB4ugk5PmSRTM4Z4RRXlGfsMhI", //https://unsplash.it/300/300

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
.fm-avatar-icon-font {
    background: #3a7dbf;
}

```



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
          <List>
            <Item>
              <Avatar size="xs">xsmall</Avatar>
              <Avatar size="sm">small</Avatar>
              <Avatar>middle</Avatar>
              <Avatar size="lg">large</Avatar>
            </Item>
            <Item>
              <Avatar type="image" imageUrl={this.state.imageUrl} size="xs"/> 
              <Avatar type="image" imageUrl={this.state.imageUrl} size="sm"/> 
              <Avatar type="image" imageUrl={this.state.imageUrl} /> 
              <Avatar type="image" imageUrl={this.state.imageUrl} size="lg"/> 
            </Item>
            <Item> 
              <Avatar type="icon" icon="user" size="xs"/>
              <Avatar type="icon" icon="user" size="sm"/>
              <Avatar type="icon" icon="user" />
              <Avatar type="icon" icon="user" size="lg"/>
            </Item>
            <Item>
              <Avatar type="icon" icon={customIcon} size="xs"/>
              <Avatar type="icon" icon={customIcon} size="sm"/>
              <Avatar type="icon" icon={customIcon} />
              <Avatar type="icon" icon={customIcon} size="lg"/>
            </Item>
          </List>
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
            <Item><Avatar type="image" imageUrl={this.state.imageUrl} size="lg"/>图片头像</Item>
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
.fm-avatar-icon-font {
    background: #3a7dbf;
}

```

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
.fm-avatar-icon-font {
    background: #3a7dbf;
}

```

:::


## 头像徽章

:::demo 头像有大、中、小、加小四种尺寸。

通过设置特性`size` 为 `lg` `md` `sm` `xs` 调整头像的大、小尺寸。若不设置 `size`，则尺寸为中 `md`。

```js
  state = {
    type: 'text',
    imageUrl: "https://unsplash.it/300/300",

  };

  handleTypeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    let badgeDot = {dot: true},
    badgeText = {text: '123'},
     badgeNumberMax= {text: 123456789, overflowCount: 999};

    const Item = List.Item;
    const customIcon = <img
          alt="scream icon"
          src="https://img.icons8.com/ios/2x/scream.png" 
          style={{height: 50, width: 50, background: '#bdeaff'}}/>;
    return (
      <div className="components-avatar-demo-badge demo-card">
        <div className='demo-title'>徽章选择</div>
        <Tabs
        style={{ marginTop: 10 }}
        tabDirection={'horizontal'}
        tabs={[
          { key: 'dot', title: '仅提醒' },
          { key: 'text', title: '文字' },
          { key: 'number', title: '数字' },
          { key: 'numberMax', title: '数字含上限' },
        ]}
      >
       <div key="dot" className="demo-tabs-content dot">
          <List>
            <Item>
              <Avatar size="xs" badge={badgeDot}>xsmall</Avatar>
              <Avatar size="sm"  badge={badgeDot}>small</Avatar>
              <Avatar  badge={badgeDot}>middle</Avatar>
              <Avatar size="lg"  badge={badgeDot}>large</Avatar>
            </Item>
            <Item>
              <Avatar size="xs" shape={'square'} badge={badgeDot}>xsmall</Avatar>
              <Avatar size="sm" shape={'square'}  badge={badgeDot}>small</Avatar>
              <Avatar  shape={'square'} badge={badgeDot}>middle</Avatar>
              <Avatar size="lg" shape={'square'} badge={badgeDot}>large</Avatar>
            </Item>
          </List>
        </div>
        <div key="text" className="demo-tabs-content text">
          <List>
            <Item>
              <Avatar size="xs" badge={{text: '促销'}}>xsmall</Avatar>
              <Avatar size="sm"  badge={{text: '特惠', hot: true}}>small</Avatar>
              <Avatar  badge={{text: "打折", corner: true}}>middle</Avatar>
              <Avatar size="lg"  badge={{text: "减免"}}>large</Avatar>
            </Item>
            <Item>
              <Avatar size="xs" shape={'square'} badge={{text: '促销'}}>xsmall</Avatar>
              <Avatar size="sm" shape={'square'}  badge={{text: '特惠'}}>small</Avatar>
              <Avatar shape={'square'} badge={{text: "打折"}}>middle</Avatar>
              <Avatar size="lg"  shape={'square'} badge={{text: "减免"}}>large</Avatar>
            </Item>
          </List>
        </div>

        <div key="number" className="demo-tabs-content number">
          <List>
            <Item>
              <Avatar size="xs" badge={{text: 1234}}>xsmall</Avatar>
              <Avatar size="sm"  badge={{text: 123}}>small</Avatar>
              <Avatar  badge={{text: 12}}>middle</Avatar>
              <Avatar size="lg"  badge={{text: 1}}>large</Avatar>
            </Item>
            <Item>
              <Avatar size="xs" shape={'square'} badge={{text: 1}}>xsmall</Avatar>
              <Avatar size="sm" shape={'square'}  badge={{text: 13}}>small</Avatar>
              <Avatar  shape={'square'} badge={{text: 123}}>middle</Avatar>
              <Avatar size="lg" shape={'square'} badge={{text: 1234}}>large</Avatar>
            </Item>
          </List>
        </div>

        <div key="numberMax" className="demo-tabs-content numberMax">
          <List>
            <Item>
              <Avatar size="xs" badge={badgeNumberMax}>xsmall</Avatar>
              <Avatar size="sm"  badge={badgeNumberMax}>small</Avatar>
              <Avatar  badge={badgeNumberMax}>middle</Avatar>
              <Avatar size="lg"  badge={badgeNumberMax}>large</Avatar>
            </Item>
            <Item>
              <Avatar size="xs" shape={'square'} badge={badgeNumberMax}>xsmall</Avatar>
              <Avatar size="sm" shape={'square'}  badge={badgeNumberMax}>small</Avatar>
              <Avatar  shape={'square'} badge={badgeNumberMax}>middle</Avatar>
              <Avatar size="lg" shape={'square'} badge={badgeNumberMax}>large</Avatar>
            </Item>
          </List>
        </div>
   

         <div key="lg" className="demo-tabs-content">
          <List>
            <Item><Avatar type="text" size="lg">文字图标</Avatar> 文字图标 </Item>
            <Item><Avatar type="image" imageUrl={this.state.imageUrl} size="lg"/>图片头像</Item>
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
[class^="components-avatar-demo"] .dot .fm-avatar {
  margin-right: 26px ;
}
[class^="components-avatar-demo"] .text .fm-avatar {
  margin-right: 35px ;
}
[class^="components-avatar-demo"] .number .fm-avatar {
  margin-right: 35px ;
}
[class^="components-avatar-demo"] .numberMax .fm-avatar {
  margin-right: 45px ;
}
.demo-tabs-content.default {
  margin: 15px;
}

.fm-list-item .fm-list-line .fm-list-content{
  overflow-x: scroll;
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px transparent;//rgba(0,0,0,0.3);
    background-color: transparent;
  }

  &::-webkit-scrollbar
  {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: transparent;
  }
}

.fm-avatar-icon-font {
    background: #3a7dbf;
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
| badge | 头像带徽章，特性同\<Badge\> API, hot/corner特性除外  | [BadgeProps](#/zh-CN/components/badge)    | -- |

