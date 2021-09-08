# ListView 长列表 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用

适用于移动端无限滚动列表

## 基础用法

:::demo

```js
state = {
  refreshLoading: false,
  loading: false,
  finished: false,
  error: false,
  pageNo: 1,
  list: [],
}

handleRefresh = () => {
  this.setState({
    refreshLoading: true,
    pageNo: 1,
  })

  console.log('[debug]刷新数据', this.state.pageNo)
  setTimeout(() => {
    const newList = []
    for(let i = 0; i < 10; i++) {
      const articalIndex = i + 1
      newList.push(`文章${articalIndex}`)
    }
    this.setState(state => {
      return {
        pageNo: state.pageNo + 1,
        refreshLoading: false,
        list: newList
      }
    })
  }, 2000);
}

loadmore = () => {
  this.setState({
    loading: true
  })

  console.log('[debug]加载数据', this.state.pageNo)
  setTimeout(() => {
    this.setState(state => {
      const newList = []
      const startIndex = state.list.length
      for(let i = 0; i < 10; i++) {
        const articalIndex = startIndex + i + 1
        newList.push(`文章${articalIndex}`)
      }
      return {
        loading: false,
        finished: state.list.length > 50,
        list: [...state.list, ...newList],
        pageNo: state.pageNo + 1
      }
    })
  }, 1000);
}

render() {
  const { refreshLoading, loading, finished, error, list } = this.state
  return (
    <div className="components-tpl-demo-basic">
      <NoticeBar>请在移动端打开体验</NoticeBar>
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <PullRefresh loading={refreshLoading} onRefresh={this.handleRefresh}>
          <ListView loading={loading || refreshLoading} finished={finished} error={error} onLoad={this.loadmore}>
            {list.map(text => {
              return <div key={text} className="list-item">{text}</div>
            })}
          </ListView>
        </PullRefresh>
      </div>
    </div>
  );
}
```

```less
[class^='components-tpl-demo-'] .demo-card {
  padding: 0;
  background: #fff;

  .list-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
}
```

:::

## API

| 属性           | 说明                                           | 类型               | 默认值       |
| -------------- | ---------------------------------------------- | ------------------ | ------------ |
| loading        | 是否加载中                                     | boolean            | `false`      |
| finished       | 是否全部加载完成                               | boolean            | `false`      |
| error          | 是否加载异常                                   | boolean            | `false`      |
| disabled       | 禁止响应，通常多列 tab 时可能需要用到          | boolean            | `false`      |
| loadingText    | 加载中文案                                     | string             | `加载中...`  |
| finishedText   | 加载结束文案                                   | string             | `没有更多了` |
| immediateCheck | 是否初始化检查加载                             | string             | `加载异常`   |
| offset         | 滚动条与底部距离小于 offset 时触发 onLoad 事件 | number             | `50`         |
| children       | 内容元素                                       | ReactNode          | -            |
| customLoading  | 自定义 loading                                 | ReactNode          | -            |
| customFinished | 自定义 finished                                | ReactNode          | -            |
| customError    | 自定义 error                                   | ReactNode          | -            |
| onLoad         | 加载更多事件                                   | () => void         | -            |
| onScroll       | 滚动事件                                       | (e: Event) => void | -            |
