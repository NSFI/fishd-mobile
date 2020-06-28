# Toast 轻提示 

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 一般用法

:::demo 一般用法。
```js

showToast = () => {
    Toast.info('文本提示', 1);
}

showToastLoading = () => {
    Toast.loading('loading', 1);
}

showToastSuccess = () => {
    Toast.success('success', 1);
}

showToastError = () => {
    Toast.fail('fail', 1);
}

showToastFail = () => {
    Toast.offline('offline', 1)
}

showToastCustom = () => {
    Toast.info(<svg t="1593324588986" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2465" width="200" height="200"><path d="M855.194 512.34A263.12 263.12 0 0 0 663.28 259.39a33.907 33.907 0 0 0-42.045 33.908 33.907 33.907 0 0 0 24.074 33.907 194.628 194.628 0 0 1 0 374.676 33.907 33.907 0 0 0-24.074 33.907 33.907 33.907 0 0 0 42.045 33.907A263.12 263.12 0 0 0 855.194 512.34zM529.006 0a46.114 46.114 0 0 0-27.804 12.546l-10.85 9.494-109.86 89.515L224.18 240.064H83.465a67.815 67.815 0 0 0-67.815 67.814v400.784a67.815 67.815 0 0 0 67.815 67.815h131.899l160.381 131.9 111.216 91.21 14.58 11.867A46.114 46.114 0 0 0 529.345 1024c11.868 0 20.006-8.816 23.057-24.413a65.78 65.78 0 0 0 0-12.546V37.298a67.815 67.815 0 0 0 0-14.92C548.672 7.799 540.196 0 529.006 0z m-208.19 775.12l-81.039-67.814H83.465V307.878h164.789l78.665-64.424 158.686-130.543V910.75z" p-id="2466"></path><path d="M733.806 71.544a33.907 33.907 0 0 0-48.826 30.178 33.907 33.907 0 0 0 19.327 30.516 421.128 421.128 0 0 1 0 756.133 33.907 33.907 0 0 0-19.327 30.516 33.907 33.907 0 0 0 48.826 30.856 488.943 488.943 0 0 0 0-878.538z" p-id="2467"></path></svg>, 1);
}

render(){
 return(
    <div className="components-toast-demo">
       <Button onClick={this.showToast}>文本</Button>
       <br />
       <Button onClick={this.showToastLoading}>loading</Button>
       <br />
       <Button onClick={this.showToastSuccess}>success</Button>
       <br />
       <Button onClick={this.showToastError}>error</Button>
       <br />
       <Button onClick={this.showToastFail}>network failure</Button>
       <br />
       <Button onClick={this.showToastCustom}>自定义</Button>
    </div>
  )
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