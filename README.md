<img src="https://ysf.qiyukf.net/operation/47281777f053234001a98a9445377dbe" alt="logo" width="160" />

# ppfish-mobile
![tag](https://img.shields.io/bundlephobia/min/ppfish-mobile)
![tag](https://img.shields.io/github/forks/NSFI/fishd-mobile)
![tag](https://img.shields.io/github/stars/NSFI/fishd-mobile)
![tag](https://img.shields.io/github/license/NSFI/fishd-mobile)

[在线文档](https://nsfi.github.io/fishd-mobile-site/index.html#/zh-CN/components/quickStart)

## 快速开始
```bash
npm i ppfish-mobile --save
```

## 贡献指南
```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 编译文档站点
npm run build

# 发布文档站点
npm run publish:site

# 编译组件库
npm run build:lib
npm run build:dist

# 发布组件库
npm publish
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
4. 在site/docs/zh-CN 中创建组件说明文档，文档中:::demo部分会被编译成预览demo
5. 在site/config 配置组件

## 文档即DEMO
* 在开发组件时，我们只需要单独维护【组件.md】即可，fishd-doc插件会自动编译markdown中的demo并通过文档库站点实时预览。
* 具体使用方法参见[fishd-doc](https://github.com/NSFI/fishd-doc#markdown%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)

## 单元测试

* [jest](https://jestjs.io/docs/zh-Hans/getting-started)
* [enzyme](https://enzymejs.github.io/enzyme/)
* antd、ppfish
  * 组件UI测试：snapshot，有一个统一的实现方法demoTest.js，去render打快照(demo.test.js)
  * 交互逻辑测试(index.test.js)
* [vant](https://github.com/youzan/vant) 列了一些交互逻辑测试

## LICENSE
[MIT](https://en.wikipedia.org/wiki/MIT_License)
