# ppfish-design-mobile

![Build Status](https://travis-ci.org/zrj1031/fishd-mobile.svg?branch=master)

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

本地run时候 eslint终端报错太多，属于fishd-doc读取了我们的eslint配置，site下的代码不符合我们的规则，暂时注释掉了源码中webpack eslint-loader的相关配置，且在.eslintignore中忽略site/ tools/ public/

package.json中关于eslint的依赖项还要再整理下，最好把文档部分的eslint抽出去
