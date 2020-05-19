# ppfish-design-mobile

## 快速开始
```
# 安装依赖
npm install
# 启动开发环境
npm run dev
# 编译组件库
npm run build:mobile
# 编译文档站点
npm run build
```

## 如何开发一个组件
1. 全局安装fishd-mobile-tools
```
npm i fishd-mobile-tools -g
```
2. 在组件库项目根目录执行命令
```
fm create 组件名称
```
3. 在/source/components/index 引入创建的组件
4. 在site/docs/zh-CN 中创建组件说明文档
5. 在site/config 配置组件


## 单元测试

* [jest](https://jestjs.io/docs/zh-Hans/getting-started)
* [enzyme](https://enzymejs.github.io/enzyme/)
* antd、ppfish
  * 组件UI测试：snapshot，有一个统一的实现方法demoTest.js，去render打快照(demo.test.js)
  * 交互逻辑测试(index.test.js)
* [vant](https://github.com/youzan/vant)列了一些交互逻辑测试

## git commit

husky lint-staged travis-ci commitizen conventional-changelog
husky cnpm时会有问题 => https://github.com/typicode/husky/issues/640

## travis
[travis-ci](https://travis-ci.org/)需要github owner激活下travis
![Build Status](https://travis-ci.org/zrj1031/fishd-mobile.svg?branch=master)

## 直接script引入

引入dist下的fishd-mobile.min.js和fishd-mobile.min.css和cdn的react react-dom

```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

```js
const Button = window['fishd-mobile'].Button;

function App() {
  return (
    <div className="App">
      <Button type="primary">button</Button>
    </div>
  );
}
```
