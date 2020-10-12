# Toast 轻提示 

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 一般用法

:::demo 一般用法。
```js

showToast = () => {
  Toast.info('提示内容', 1);
}

showBigToast = () => {
  Toast.info('提示内容比较长，超过限定字数会自动换行', 1);
}

showToastLoading = () => {
  Toast.loading('加载中...', 1);
}

showToastSuccess = () => {
  Toast.success('成功文案', 1);
}

showToastError = () => {
  Toast.fail('失败文案', 1);
}

showToastFail = () => {
  Toast.offline('offline', 1)
}

showToastCustom = () => {
  Toast.info(<div><Icon type="voice" fontSize={30} /><p>自定义图标</p></div>, 1);
}

render(){
 return(
    <div className="components-toast-demo">
      <div className='demo-title'>文字提示</div>
      <div className="demo-wrap">
        <Button type="primary" onClick={this.showToast}>文本提示</Button>
        <Button type="primary" onClick={this.showBigToast}>长文字提示</Button>
      </div>

      <div className='demo-title'>加载提示</div>
      <div className="demo-wrap">
        <Button type="primary" onClick={this.showToastLoading}>加载提示</Button>
      </div>

      <div className='demo-title'>成功/失败提示</div>
      <div className="demo-wrap">
        <Button type="guide" onClick={this.showToastSuccess}>成功提示</Button>
        <Button type="danger" onClick={this.showToastError}>失败提示</Button>
      </div>

      <div className='demo-title'>自定义图标</div>
      <div className="demo-wrap">
        <Button type="primary" onClick={this.showToastCustom}>自定义图标</Button>
      </div>
    </div>
  )
}

```

```less
.components-toast-demo {
  margin-top: 10px;
  width: 100%;
  .demo-wrap {
    padding: 0 16px;
  }
  .fm-button {
    margin-right: 10px
  }
}
```
:::


## API

| 属性 | 说明         | 类型                                            | 默认值    |
|----|-----|------|------
| content   | 提示内容   | React.Element or String |  - |
| duration   | 自动关闭的延时，单位秒  | number |  3 |
| onClose   | 关闭后回调      | Function |    -  |
| mask   | 是否显示透明蒙层，防止触摸穿透      | Boolean |    true  |