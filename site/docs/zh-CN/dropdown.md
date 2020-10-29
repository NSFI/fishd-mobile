# Dropdown 下拉菜单 【交互：刘莹莹 |视觉：徐剑杰 |开发：赵仁建】

## 基础用法

:::demo

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
}
```

:::

## 自定义选中态颜色和向上展开

:::demo 通过activeColor属性可以自定义菜单标题和选项的选中态颜色；将direction属性值设置为up，菜单即可向上展开

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
        <DropdownMenu activeColor="#ee0a24" direction="up">
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
    )
  }
}
ReactDOM.render(<DropDownDemo />, mountNode)
```

```less
.dropdown-container {
  position: absolute;
  left: 0;
  top: 200px;
  width: 100%;
  background-color: #f7f8fa;
}
```

:::

:::

## 自定义菜单内容

:::demo

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
        <DropdownMenu>
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
              <Button type="primary" block>确定</Button>
          </DropdownItem>
        </DropdownMenu>
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
  top: 300px;
  width: 100%;
  background-color: #f7f8fa;
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

### DropdownMenu Props

| 参数        | 说明                       | 类型                | 默认值    |
| ----------- | -------------------------- | ------------------- | --------- |
| activeColor | 菜单标题和选项的选中态颜色 | string              | '#1989fa' |
| direction   | 菜单展开方向，可选值为up   | Enum {'down', 'up'} | 'down'    |

### DropdownItem Props

| 参数    | 说明                   | 类型                 | 默认值 |
| ------- | ---------------------- | -------------------- | ------ |
| value   | 当前选中项对应的 value | string &#124; number | -      |
| options | 选项数组               | Option[]             | []     |

### Option 数据结构

| 参数  | 说明   | 类型                 |
| ----- | ------ | -------------------- |
| text  | 文字   | string               |
| value | 标识符 | string &#124; number |
