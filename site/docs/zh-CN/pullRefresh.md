# PullRefresh 下拉刷新 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

用于提供下拉刷新的交互操作。

## 基础用法

:::demo

```js
state = {
  loading: false
}
handleRefresh = () => {
  this.setState({
    loading: true
  })

  setTimeout(() => {
    this.setState({
      loading: false
    })
  }, 2000);
}
render() {
  const { loading } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <NoticeBar>请在移动端打开体验</NoticeBar>
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <PullRefresh loading={loading} onRefresh={this.handleRefresh}>
          <div className="pull-area">下拉此处区域，触发刷新</div>
        </PullRefresh>
      </div>
    </div>
  );
}
```

```less
[class^='components-tpl-demo-'] .demo-card {
  margin-bottom: 12px;

  .pull-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    font-size: 14px;
    color: #999;
    background-color: #fff;
  }
}
```

:::

## API

| 属性              | 说明                                     | 类型              | 默认值            |
| ----------------- | ---------------------------------------- | ----------------- | ----------------- |
| loading           | 是否加载中                               | `boolean`         | `false`           |
| disabled          | 是否禁用                                 | `boolean`         | `false`           |
| pullingText       | 下拉文案                                 | `string`          | `下拉即可刷新...` |
| loosingText       | 释放文案                                 | `string`          | `释放即可刷新...` |
| loadingText       | 加载文案                                 | `string`          | `加载中...`       |
| successText       | 加载成功文案                             | `string`          | -                 |
| successDuration   | 加载成功文案持续时间                     | `number`          | `500`             |
| animationDuration | 动画时长                                 | `number`          | `300`             |
| headHeight        | 头部高度                                 | `number`          | `50`              |
| pullDistance      | 触发下拉刷新的距离，默认等于`headHeight` | `number`          | `50`              |
| customPulling     | 自定义下拉节点                           | `React.ReactNode` | -                 |
| customLoosing     | 自定义释放节点                           | `React.ReactNode` | -                 |
| customLoading     | 自定义加载节点                           | `React.ReactNode` | -                 |
| children          | 内容元素                                 | `React.ReactNode` | -                 |
| onRefresh         | 刷新事件                                 | `() => void`      | -                 |
