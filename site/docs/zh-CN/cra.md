# 在create-react-app中使用

[create-react-app](https://github.com/facebookincubator/create-react-app) 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 ppfish-mobile 组件，并自定义 webpack 的配置以满足各类工程化需求。

## 安装和初始化
在开始之前，你可能需要安装 yarn。
```
$ yarn create react-app fm-demo

# or

$ npx create-react-app fm-demo
```
工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。
```
$ cd fm-demo
$ yarn start
```
此时浏览器会访问 http://localhost:3000/ ，看到 Welcome to React 的界面就算成功了。

## 引入ppfish-mobile
这是 create-react-app 生成的默认目录结构。
```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```
现在从 yarn 或 npm 安装并引入 ppfish-mobile。
```
$ yarn add ppfish-mobile
```

修改 src/App.js，引入 ppfish-mobile 的按钮组件。
```js
import React from 'react';
import { Button } from 'ppfish-mobile';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

修改 src/App.css，在文件顶部引入 ppfish-mobile/dist/ppfish-mobile.min.css。
```
@import '~ppfish-mobile/dist/ppfish-mobile.min.css';
```
好了，现在你应该能看到页面上已经有了 ppfish-mobile 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 [create-react-app](https://github.com/facebookincubator/create-react-app) 的官方文档。

## 高级配置
这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 craco （一个对 create-react-app 进行自定义配置的社区解决方案）。

现在我们安装 craco 并修改 package.json 里的 scripts 属性。

```
$ yarn add @craco/craco
```
```json
/* package.json */
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
}
```
然后在项目根目录创建一个 craco.config.js 用于修改默认配置。
```js
/* craco.config.js */
module.exports = {
  // ...
}
```

## 自定义主题
[参考](/#/zh-CN/components/theme)