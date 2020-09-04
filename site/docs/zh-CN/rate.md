# Divider 分割线 【交互：刘莹莹 | 视觉：徐剑杰 |开发：马旭天】

分割线组件，用于页面的分割。

## 基本用法-五星

:::demo

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        基本用法-五星
      </div>
      <Rate className="components-rate" value={this.state.value} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 半星模式（显示状态）

:::demo 半星模式（显示状态）

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2.5,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        半星模式（显示状态）
      </div>
      <Rate className="components-rate" value={this.state.value} onChange={this.onChange} allowHalf />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 基本用法-三星

:::demo 基本用法-三星

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        基本用法-三星
      </div>
      <Rate className="components-rate" count={3} value={this.state.value} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 点赞/点踩模式

:::demo 点赞/点踩模式

```js
constructor(props) {
  super(props);
  this.state = {
    thumb: 'thumbUp',
  };
}

onThumbChange = (value) => {
  this.setState({
    thumb: value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        点赞/点踩模式
      </div>
      <Rate className="components-rate" mode="thumb" thumb={this.state.thumb} onThumbChange={this.onThumbChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 自定义形状

:::demo 自定义形状

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        自定义形状
      </div>
      <Rate className="components-rate" value={this.state.value} character={() => <Icon type="fm-dian" />} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 自定义数量

:::demo 自定义数量

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        自定义数量
      </div>
      <Rate className="components-rate" count={6} value={this.state.value} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 尺寸-中号

:::demo 尺寸-中号

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        尺寸-中号
      </div>
      <Rate className="components-rate" size="md" value={this.state.value} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 尺寸-小号

:::demo 尺寸-小号

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        尺寸-小号
      </div>
      <Rate className="components-rate" size="sm" value={this.state.value}  onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 禁用状态

:::demo 禁用状态

```js
render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        禁用状态
      </div>
      <Rate className="components-rate" disabled value={2} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 只读状态

:::demo 只读状态

```js
render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        只读状态
      </div>
      <Rate className="components-rate" readonly value={2} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## 变更Toast提示

:::demo 变更Toast提示

```js
constructor(props) {
  super(props);
  this.state = {
    value: 2,
  };
}

onChange = (value) => {
  this.setState({
    value,
  });
  Toast.info('满意度: 3星')
};

render() {
  return (
    <div className="components-rate-demo">
      <div className="demo-title">
        变更Toast提示
      </div>
      <Rate className="components-rate" value={this.state.value} onChange={this.onChange} />
    </div>
  );
}
```

```less
.components-rate {
  width: 100%;
  padding: 16px;
  background-color: #fff;
}
```

:::

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 组件模式 | 'normal' \| 'thumb' | true |
| allowClear | 是否允许再次点击后清除 | boolean | true |
| allowHalf | 是否允许半选 | boolean | false |
| character | 自定义字符 | ReactNode \| (RateProps) => ReactNode | &lt;Icon type="fm-star-defaultcommit" /> |
| className | 自定义样式类名 | string | - |
| count | star 总数 | number | 5 |
| defaultValue | 默认值 | number | 0 |
| disabled | 禁用，按钮置灰，无法进行交互 | boolean | false |
| readonly | 只读，无法进行交互 | boolean | false |
| style | 自定义样式对象 | CSSProperties | - |
| tooltips | 自定义每项的提示信息 | string\[] | - |
| value | 当前数，受控值 | number | - |
| thumb | 点赞模式的值 | 'up' \| 'down' \| 'upcancel' \| 'downcancel' \| '' | - |

## Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 选择时的回调 | value: number |
| onThumbChange | 点赞模式下，选择的回调 | value: 'up' \| 'down' \| 'upcancel' \| 'downcancel' \| '' |
