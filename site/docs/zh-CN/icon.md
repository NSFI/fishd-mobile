# Icon 图标 【视觉：徐剑杰 |开发：赵仁建】

## 基本用法

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="基本用法">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="home-o" />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" />
        </div>
        <div className="icon-item">
          <Icon type="application-o" />
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background-color: #fff;
  .icon-item {
    text-align: center;
  }
}
```

:::

## 徽标提示

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="徽标提示">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="chat-o" dot />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" badge="9" />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" badge="99+" />
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background-color: #fff;
  .icon-item {
    text-align: center;
  }
}
```

:::

## 图标颜色

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="图标颜色">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="chat-o" color="#337EFF" />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" color="#8875FF" />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" color="#26BD71" />
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background-color: #fff;
  .icon-item {
    text-align: center;
  }
}
```

:::

## 图标大小

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="图标大小">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="chat-o" fontSize={15} />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" fontSize="20px" />
        </div>
        <div className="icon-item">
          <Icon type="chat-o" fontSize="2rem" />
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background-color: #fff;
  .icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

:::

## 基础图标

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="基础图标">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="allow-left" />
          <span className="icon-text">allow-left</span>
        </div>
        <div className="icon-item">
          <Icon type="allow-right" />
          <span className="icon-text">allow-right</span>
        </div>
        <div className="icon-item">
          <Icon type="allow-up" />
          <span className="icon-text">allow-up</span>
        </div>
        <div className="icon-item">
          <Icon type="allow-down" />
          <span className="icon-text">allow-down</span>
        </div>
        <div className="icon-item">
          <Icon type="search" />
          <span className="icon-text">search</span>
        </div>
        <div className="icon-item">
          <Icon type="plus" />
          <span className="icon-text">plus</span>
        </div>
        <div className="icon-item">
          <Icon type="cross" />
          <span className="icon-text">cross</span>
        </div>
        <div className="icon-item">
          <Icon type="check" />
          <span className="icon-text">check</span>
        </div>
        <div className="icon-item">
          <Icon type="fail" />
          <span className="icon-text">fail</span>
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 20px;
  background-color: #fff;
  .icon-item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.icon-text {
  font-size: 6px;
  color: #666;
  max-width: 100%;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 8px;
}
```

:::

:::

## 线框风格

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="线框风格">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="home-o" />
          <span className="icon-text">home-o</span>
        </div>
        <div className="icon-item">
          <Icon type="calendar-o" />
          <span className="icon-text">calendar-o</span>
        </div>
        <div className="icon-item">
          <Icon type="chat-o" />
          <span className="icon-text">chat-o</span>
        </div>
        <div className="icon-item">
          <Icon type="user-o" />
          <span className="icon-text">user-o</span>
        </div>
        <div className="icon-item">
          <Icon type="application-o" />
          <span className="icon-text">application-o</span>
        </div>
        <div className="icon-item">
          <Icon type="problem-o" />
          <span className="icon-text">problem-o</span>
        </div>
        <div className="icon-item">
          <Icon type="info-o" />
          <span className="icon-text">info-o</span>
        </div>
        <div className="icon-item">
          <Icon type="more-o" />
          <span className="icon-text">more-o</span>
        </div>
        <div className="icon-item">
          <Icon type="play-o" />
          <span className="icon-text">play-o</span>
        </div>
        <div className="icon-item">
          <Icon type="pause-o" />
          <span className="icon-text">pause-o</span>
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 20px;
  background-color: #fff;
  .icon-item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.icon-text {
  font-size: 6px;
  color: #666;
  max-width: 100%;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 8px;
}
```

:::

## 实底风格

:::demo

```js
const Demo = () => {
  return (
    <DemoBlock title="实底风格">
      <div className="wrapper">
        <div className="icon-item">
          <Icon type="home" />
          <span className="icon-text">home</span>
        </div>
        <div className="icon-item">
          <Icon type="calendar" />
          <span className="icon-text">calendar</span>
        </div>
        <div className="icon-item">
          <Icon type="chat" />
          <span className="icon-text">chat</span>
        </div>
        <div className="icon-item">
          <Icon type="user" />
          <span className="icon-text">user</span>
        </div>
        <div className="icon-item">
          <Icon type="application" />
          <span className="icon-text">application</span>
        </div>
        <div className="icon-item">
          <Icon type="problem" />
          <span className="icon-text">problem</span>
        </div>
        <div className="icon-item">
          <Icon type="info" />
          <span className="icon-text">info</span>
        </div>
        <div className="icon-item">
          <Icon type="more" />
          <span className="icon-text">more</span>
        </div>
        <div className="icon-item">
          <Icon type="play" />
          <span className="icon-text">play</span>
        </div>
        <div className="icon-item">
          <Icon type="pause" />
          <span className="icon-text">pause</span>
        </div>
      </div>
    </DemoBlock>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 20px;
  background-color: #fff;
  .icon-item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.icon-text {
  font-size: 6px;
  color: #666;
  max-width: 100%;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 8px;
}
```

:::

## API

| 参数    | 说明                                 | 类型               | 默认值    |
| ------- | ------------------------------------ | ------------------ | --------- |
| type    | 内置 icon 名称                       | `string`           |
| dot     | 是否显示图标右上角小红点             | `boolean`          | `false`   |
| badge   | 图标右上角徽标的内容                 | `string`           | -         |
| color   | 图标颜色                             | `string`           | `inherit` |
| size    | 图标大小，如 20px 2em，默认单位为 px | `number \| string` | `inherit` |
| onClick | 点击图标时触发                       | `event: Event`     | -         |
