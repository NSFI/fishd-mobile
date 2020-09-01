# Upload 文件上传 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
state = {
  fileList: []
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## 可预览

:::demo

```js
state = {
  fileList: [
   {
      url: 'https://placekitten.com/600/400',
    },
    {
      url: 'https://placekitten.com/1200/900',
    },
  ]
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">可预览</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## 上传状态

:::demo

```js
state = {
  fileList: [
   {
      url: 'https://placekitten.com/600/400',
      status: 'uploading',
      message: '上传中...',
    },
    {
      url: 'https://placekitten.com/1200/900',
      status: 'failed',
      message: '上传失败',
    },
  ]
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">上传状态</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## 限制数量以及图片大小

:::demo

```js
state = {
  fileList: [
    {
      url: 'https://placekitten.com/600/400',
    },
  ]
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

handleOversize = (file) => {
  Toast.show(`文件超出尺寸${file.file.name}`);
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">限制上传数量</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
          onOversize={this.handleOversize}
          maxCount={2}
          maxSize={500}
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## 限制上传大小

:::demo

```js
state = {
  fileList: [
    {
      url: 'https://placekitten.com/600/400',
    },
  ]
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

handleOversize = (file) => {
  Toast.show(`文件大小不能超过 500kb`);
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">限制上传大小</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
          onOversize={this.handleOversize}
          maxSize={500 * 1024}
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## 禁用上传

:::demo

```js
state = {
  fileList: []
}

handleAfterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...'
  this.setState({})
  setTimeout(() => {
    file.status = 'done';
    file.message = '上传失败'
    this.setState({})
  }, 1000)
}

handleChange = (files) => {
  this.setState({
    fileList: files
  })
}

hanldeDelete = (file, index) => {
  this.setState(state => {
    state.fileList.splice(index, 1)
    return {
      fileList: state.fileList
    }
  })
}

render() {
  const { fileList } = this.state;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">禁用上传</div>
      <div className="demo-card">
        <Upload 
          fileList={fileList}
          onAfterRead={this.handleAfterRead}
          onChange={this.handleChange}
          onDelete={this.hanldeDelete}
          disabled
        >
        </Upload>
      </div>
    </div>
  );
}
```
:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| fileList | 已上传的文件列表 | FileListItem[] | - |
| maxCount | 文件上传数量限制 | number | string | - |
| maxSize | 文件大小限制，单位为`byte` | number | string | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | boolean | `false` |
| disabled | 是否禁用文件上传 | boolean | `false` |
| deletable | 是否展示删除按钮 | boolean | `true` |
| previewSize | 预览图和上传区域的尺寸，默认单位为px | 	number | string | `80px` |
| previewImage | 是否在上传完成后展示预览图 | boolean | `true` |
| previewFullImage | 是否在点击预览图后展示全屏图片预览 | boolean | `true` |
| previewOptions | 全屏图片预览的配置项，可选值见ImageView | object | - |
| showUpload | 是否展示上传区域 | boolean | `true` |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | string | - |
| accept | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | string | `image/*` |
| imageFit | 预览图裁剪模式 | string | `cover` |
| resultType | 文件读取结果类型，可选值为`file``text` | string | `dataUrl` |
| onBeforeRead | 文件读取前的回调函数，返回`false`可终止文件读取，支持返回Promise | `(files) => (boolen | Promise<boolean>)` | - |
| onAfterRead | 文件读取完成后的回调函数 | `(files, oversize: boolean) => void` | - |
| onDelete | 点击文件删除回调函数 | `(file, index: number) => void` | - |
| onImageClick | 点击图片回调函数 | `(file, index: number) => void` | - |
| onOversize | 文件大小超过限制时触发 | `(oversizeFiles) => void` | - |
| onChange | 文件改变回调函数 | `(files) => void` | - |
