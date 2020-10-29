# Switch 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：唐志华】

在两个互斥对象进行选择，eg：选择开或关。

## 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。

:::demo

```js

class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true
    };
  }

  render() {
    return (
      <div className="components-switch-demo-basic">
            <div className="demo-title">基本用法</div>
            <div className="switch-content demo-card">
                <Switch
                    checked={this.state.checked}
                    onClick={() => {
                        this.setState({
                            checked: !this.state.checked,
                        });
                    }}
                />
                <Switch
                    style={{marginLeft: '20px'}}
                    checked={this.state.checked1}
                    onChange={() => {
                        this.setState({
                            checked1: !this.state.checked1,
                        });
                    }}
                />
            </div>
            <div className="demo-title">禁用状态</div>
            <div className="switch-content demo-card">
                <Switch
                    disabled
                    checked={this.state.checked2}
                />
                <Switch
                    style={{marginLeft: '20px'}}
                    disabled
                    checked={this.state.checked3}
                />
            </div>
            <div className="demo-title">加载状态</div>
            <div className="switch-content demo-card">
                <Switch
                    platform="ios"
                    loading
                    disabled
                />
                <span style={{marginLeft: '20px'}}>
                    <Switch
                        platform="android"
                        loading
                        disabled
                    />
                </span>
                
            </div>
            <div className="demo-title">自定义颜色</div>
            <div className="switch-content demo-card">
                <Switch
                    checked={this.state.checked7}
                    onChange={() => {
                        this.setState({
                            checked7: !this.state.checked7,
                        });
                    }}
                    platform="ios"
                    color="#4dd865"
                />
                <Switch
                    style={{marginLeft: '20px'}}
                    checked={this.state.checked4}
                    onChange={() => {
                        this.setState({
                            checked4: !this.state.checked4,
                        });
                    }}
                    platform="android"
                    color="#4dd865"
                />
            </div>
            
            
       </div>
    );
  }
}

ReactDOM.render(<SwitchExample />, mountNode);


```

```less
[class^="components-switch-demo-"] .switch-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
}
```

:::



## API

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| checked    | 是否默认选中    | Boolean       |   false  |
| disabled   | 是否不可修改    | Boolean       |   false  |
| onChange   | change 事件触发的回调函数 | (checked: bool): void |  无  |
| color | 开关打开后的颜色 | String | #337EFF  |
| name | switch 的 name    | String   |      |
| platform |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|
| onClick   | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。 | (checked: bool): void |  无  |
