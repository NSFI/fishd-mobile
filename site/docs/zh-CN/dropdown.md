# Dropdown 下拉菜单 【交互：刘莹莹 |视觉：徐剑杰 |开发：赵仁建】

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

:::demo 按钮有四种类型：主按钮、次按钮、危险按钮,主按钮在同一个操作区域最多出现一次。

```js
const dropdownOptions1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2, disabled: true },
]
const dropdownOptions2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
]

const DropdownItem = DropdownMenu.DropdownItem

class DropDownDemo extends React.Component {
  state = {
    dropDownValue1: 1,
    dropDownValue2: 'a',
  }
  setDropDownValue1 = (value) => {
    this.setState({
      dropDownValue1: value
    })
  }
  setDropDownValue2 = (value) => {
    this.setState({
      dropDownValue2: value
    })
  }
  render () {
    return (
      <div className="dropdown-container">
        <div className='demo-item'>
          <DropdownMenu>
            <DropdownItem
              options={dropdownOptions1}
              value={this.state.dropDownValue1}
              onChange={this.setDropDownValue1}
            />
            <DropdownItem
              options={dropdownOptions2}
              value={this.state.dropDownValue2}
              onChange={this.setDropDownValue2}
            />
          </DropdownMenu>
        </div>
        <div className='demo-item'>
          <DropdownMenu
            activeColor="#ee0a24"
            direction="up"
          >
            <DropdownItem
              options={dropdownOptions1}
              value={this.state.dropDownValue1}
              onChange={this.setDropDownValue1}
            />
            <DropdownItem title="筛选">
              <div className="fm-switch-cell">
                <div className="title">包邮</div>
                <Switch />
              </div>
               <div className="fm-switch-cell">
                  <div className="title">团购</div>
                  <Switch />
                </div>
                <Button type="primary">确定</Button>
            </DropdownItem>
          </DropdownMenu>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<DropDownDemo />, mountNode)
```

```less
.dropdown-container {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #f7f8fa;
  .demo-item {
    margin-bottom: 150px;
  }
  .fm-switch-cell {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 16px;
    box-sizing: border-box;
    width: 100%;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 16px;
      bottom: 0;
      left: 16px;
      border-bottom: 1px solid #ebedf0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}

```

:::

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| size | 设置按钮大小 | Enum {'small', 'large', 'default'}              | 'default' |
| type | 设置按钮类型 | Enum {'primary', 'dashed', 'danger', 'default'} | 'default' |
