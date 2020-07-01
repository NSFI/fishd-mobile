# TabBar 标签栏 【交互：刘莹莹 | 视觉：徐剑杰 |开发：欧晨曦】

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

## 何时使用

- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## 基础用法

:::demo 基础用法。
```js
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'life',
    };
  }

  render() {
    return (
      <div className='components-tabBar-demo-basic'>
        <div className='sub-title'>基础用法</div>
        <div>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            noRenderContent
          >
            <TabBar.Item
              title="生活"
              key="life"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'life'}
              onPress={() => { this.setState({ selectedTab: 'life' }) }}
            />
            <TabBar.Item
              title="口碑"
              key="public"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'public'}
              onPress={() => { this.setState({ selectedTab: 'public' }) }}
            />
            <TabBar.Item
              title="朋友"
              key="friend"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'friend'}
              onPress={() => { this.setState({ selectedTab: 'friend' }) }}
            />
            <TabBar.Item
              title="我的"
              key="my"
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              selected={this.state.selectedTab === 'my'}
              onPress={() => { this.setState({ selectedTab: 'my' }) }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```

```less
.components-tabBar-demo-basic {
  padding-bottom: 20px;
}
[class^="components-tabBar-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
.components-tabBar-demo-content {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: middle;
  justify-content: center;
  align-items: center;
}
```
:::

## 徽标提示

:::demo 徽标提示。
```js
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'public',
    };
  }

  render() {
    return (
      <div className='components-tabBar-demo-badge'>
        <div className='sub-title'>徽标提示</div>
        <div>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            noRenderContent
          >
            <TabBar.Item
              title="生活"
              key="life"
              badge={1}
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'life'}
              onPress={() => { this.setState({ selectedTab: 'life' }) }} 
            />
            <TabBar.Item
              title="口碑"
              key="public"
              badge={'new'}
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'public'}
              onPress={() => { this.setState({ selectedTab: 'public' }) }}
            />
            <TabBar.Item
              title="朋友"
              key="friend"
              dot
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'friend'}
              onPress={() => { this.setState({ selectedTab: 'friend' }) }}
            />
            <TabBar.Item
              title="我的"
              key="my"
              badge={'99+'}
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              selected={this.state.selectedTab === 'my'}
              onPress={() => { this.setState({ selectedTab: 'my' }) }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```

```less
.components-tabBar-demo-badge {
  padding-bottom: 20px;
}
[class^="components-tabBar-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
.components-tabBar-demo-content {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: middle;
  justify-content: center;
  align-items: center;
}
```
:::

## 自定义颜色

:::demo 自定义颜色。
```js
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'friend',
    };
  }

  render() {
    return (
      <div className='components-tabBar-demo-custom'>
        <div className='sub-title'>自定义颜色</div>
        <div>
          <TabBar
            unselectedTintColor="blue"
            tintColor="red"
            barTintColor="yellow"
          >
            <TabBar.Item
              title="生活"
              key="life"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'life'}
              onPress={() => {
                this.setState({
                  selectedTab: 'life',
                });
              }}
            />
            <TabBar.Item
              title="口碑"
              key="public"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'public'}
              onPress={() => {
                this.setState({
                  selectedTab: 'public',
                });
              }}
            />
            <TabBar.Item
              title="朋友"
              key="friend"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'friend'}
              onPress={() => {
                this.setState({
                  selectedTab: 'friend',
                });
              }}
            />
            <TabBar.Item
              title="我的"
              key="my"
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              selected={this.state.selectedTab === 'my'}
              onPress={() => {
                this.setState({
                  selectedTab: 'my',
                });
              }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```

```less
.components-tabBar-demo-custom {
  padding-bottom: 20px;
}
[class^="components-tabBar-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
.components-tabBar-demo-content {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: middle;
  justify-content: center;
  align-items: center;
}
```
:::

## 隐藏标签栏

:::demo 隐藏标签栏。
```js
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'my',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div className='components-tabBar-demo-content'>
        <div>【{pageText}】内容</div>
        <a style={{ marginTop: 10, color: '#108ee9', cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击 显示/隐藏 标签栏
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className='components-tabBar-demo-hidden'>
        <div className='sub-title'>隐藏标签栏</div>
        <div style={{ height: 150 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="生活"
              key="life"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'life'}
              onPress={() => { this.setState({ selectedTab: 'life' }) }}
            >
              {this.renderContent('生活')}
            </TabBar.Item>
            <TabBar.Item
              title="口碑"
              key="public"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'public'}
              onPress={() => { this.setState({ selectedTab: 'public' }) }}
            >
              {this.renderContent('口碑')}
            </TabBar.Item>
            <TabBar.Item
              title="朋友"
              key="friend"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={this.state.selectedTab === 'friend'}
              onPress={() => { this.setState({ selectedTab: 'friend' }) }}
            >
              {this.renderContent('朋友')}
            </TabBar.Item>
            <TabBar.Item
              title="我的"
              key="my"
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              selected={this.state.selectedTab === 'my'}
              onPress={() => { this.setState({ selectedTab: 'my' }) }}
            >
              {this.renderContent('我的')}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```

```less
.components-tabBar-demo-hidden {
  padding-bottom: 20px;
}
[class^="components-tabBar-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
.components-tabBar-demo-content {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: middle;
  justify-content: center;
  align-items: center;
}
```
:::

## API

### TabBar

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| barTintColor        | tabbar 背景色                     | String   | `white`            |
| tintColor         | 选中的字体颜色                               | String | `#108ee9`         |
| unselectedTintColor       | 未选中的字体颜色  | String | '#888'           |
| hidden      | 是否隐藏  | Boolean | false           |
| prefixCls| 样式前缀  | String   | 'fm-tab-bar'      |
| noRenderContent| 不渲染内容部分  | Boolean   |   false   |
| prerenderingSiblingsNumber| 预加载相邻的tab内容，Infinity: 加载所有的tab内容，0: 仅加载当前tab内容； 当页面较复杂时，建议设为0，提升页面加载性能  | number |   1   |
| tabBarPosition | tabbar 位置 | 'top'\|'bottom' | 'bottom' |

### TabBar.Item

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| badge  | 徽标数  | Number \ String           | 无     |
| dot | 是否在右上角显示小红点（在设置badge的情况下失效）  | Boolean            |  false  |
| onPress  | bar 点击触发，需要自己改变组件 state & selecte={true} | Function | `(){}`     |
| selected  | 是否选中 | Boolean | false     |
| icon  | 默认展示图片 | 见 demo |      |
| selectedIcon  |  选中后的展示图片 | 见 demo |      |
| title  |  标题文字 | String |      |
| key  |  唯一标识 | String |   无   |
