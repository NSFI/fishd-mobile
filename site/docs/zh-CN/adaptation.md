# 移动端适配
在移动端，我们需要通过一些方法对产品进行布局适配，来应对不通手机呈现效果的一致性，直接使用px会导致产品的展现形式和设计稿存在出入，
针对上述场景，下面罗列了两种常见的适配方案。

## 基于 Viewport 的适配方案 【推荐】
ppfish-mobile 中的样式默认使用px作为单位，如果需要使用vw单位，推荐使用以下工具：
- [postcss-px-to-viewport](https://www.npmjs.com/package/postcss-px-to-viewport)

`postcss.config.js`
```js
module.exports = ({ file }) => {
  // 组件库设计尺寸是375，所以如果匹配组件库，则将布局尺寸设计成375
  const designWidth = file.dirname.includes('node_modules/ppfish-mobile') ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: [ '*' ],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  };
};

```

## 基于 Rem 的适配方案
ppfish-mobile 中的样式默认使用px作为单位，如果需要使用rem单位，推荐使用以下两个工具：
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

PostCSS 配置
下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

`postcss.config.js`
```js
module.exports = ({ file }) => {
  // 组件库设计尺寸是375，所以如果匹配组件库，则将布局尺寸设计成375
  const designWidth = file.dirname.includes('node_modules/ppfish-mobile') ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: designWidth / 10,
        propList: ['*'],
      },
    }
  };
};
```
在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 ppfish-mobile 样式无法被编译
