# 快速上手

## 安装
推荐使用 npm 的方式安装，它能更好地和`webpack`打包工具配合使用。
若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`。

```shell
npm i fishd-mobile --save
```

## 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'fishd-mobile/es/components/index.js';
import 'fishd-mobile/es/components/style/index.less';

ReactDOM.render(
  <Button type="primary">Primary</Button>, document.getElementById('app')
);

```

## 按需加载

通常情况下可能只使用了部分组件，如果你使用 `import { Button } from 'fishd-mobile'`，babel通常会把整个fishd-mobile打包出来。
你可以使用babel插件，比如 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)，他会将
```js
import { Button } from 'fishd-mobile'
```
转换成
```js
import Button from 'fishd-mobile/es/components/Button/index.js'
import 'fishd-mobile/es/components/Button/style/index.less'
```
根据您引入的组件库所在路径进行配置调整，以下示例是基于[create-react-app](https://www.html.cn/create-react-app/docs/getting-started/)配合[craco](https://www.npmjs.com/package/@craco/craco)进行配置的

```js
module.exports = function({ env }){
  return {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'fishd-mobile',       // 组件库名称
            libraryDirectory: 'es/components', // 组件所在目录
            camel2DashComponentName: false,    // 是否自动转换组件名称
            style: true                        // 设置为true即是less
          }
        ]
      ]
    }
  };
};


```

## 使用CDN上的fishd-mobile组件库

请使用已经存在的CDN资源或自行打包并上传至CDN上。从CDN上引入fishd-mobile组件库与使用CDN上的React库文件的方式是一样的，都是在html文件中使用script标签引用CDN资源。由于fishd-mobile组件库依赖于react、react-dom这两个库文件，所以请确保这两个文件的位置在组件库的CDN资源之前。另外还需要手动引入组件库的样式CDN资源。

```html
<html>
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
      <link rel="stylesheet" href="./dist/ppfish.css">
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.0/umd/react.production.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.0/umd/react-dom.production.min.js"></script>
    <script src="./dist/ppfish.min.js"></script>

    <script type="text/jsx">
      console.log(window['fishd-mobile'])
      const Button = window['fishd-mobile'].Button;
      class App extends React.Component {
        render() {
          return (
            <div className="demo-select">
              <Button type="primary">Primary</Button>
            </div>
          )
        }
      }

      ReactDOM.render(<App/>, document.getElementById('root'));
    </script>
  </body>
</html>
```
