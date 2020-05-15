# ppfish-design-mobile

![Build Status](https://travis-ci.org/zrj1031/fishd-mobile.svg?branch=master)

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
5. 在site/desktop/config 配置组件
6. site/mobile/config 配置组件

## 全局样式

去ant-design-mobile先copy一套，再在开发中具体用到一些定义，再参照ppfish的规范去修正
还是先把所有规范先定下来

## 公共前缀

fishd? 应该和web端区分开 参照ant-design-mobile 取了am 我们取fm？

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

[travis-ci](https://travis-ci.org/)需要github owner激活下travis

## 代码规范

eslint stylelint prettier
eslint-plugin-jsx-a11y不集成？

## webpack

TODO 暂时没写
npm run dev对应site中webpackConfig修改的webpack是对这个文档生成
npm run build:mobile对应组件库（有点疑惑 doc的webpack没有读取该部分，怎么能保证一系列webpack配置后打出的包和文档包是完全一致的）


## 文档部分(高钶)

config.js抽离下  不希望在mobile/desk 配俩遍
