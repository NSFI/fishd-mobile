# 定制主题
ppfish-mobile 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

## 样式变量
ppfish-mobile 使用了 Less 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/NSFI/ppfish-mobile/blob/master/source/assets/css/themes/default.less)。
```less
@hd: 1px; // 基本单位

// 主题色
@color-blue: #337eff;

// 辅助色
@color-red: #f24957;
@color-green: #26bd71;
@color-orange: #f2a60f;

// 拓展色
@color-pink: #f260b6;
@color-purple: #8875ff;
@color-sky-blue: #33bbff;
@color-blue-green: #3dd9af;
@color-grass-green: #aacc00;
@color-light-yellow: #ffe23d;

```

## 定制方法

### 在 webpack 中定制主题
```js
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
          modifyVars: {
            '@primary-button-fill': 'pink',
            '@primary-button-fill-tap': 'fade(pink, 60%)'
          },
          javascriptEnabled: true,
        },
      },
    }],
    // ...other rules
  }],
  // ...other config
}
```

### 在create-react-app中定制主题

```js
const CracoLessPlugin = require('craco-less');

module.exports = function({ env }){
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                '@primary-button-fill': 'pink',
                '@primary-button-fill-tap': 'fade(pink, 60%)'
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    // 按需引入
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ppfish-mobile',
            libraryDirectory: 'es/components',
            camel2DashComponentName: false,
            style: true
          }
        ]
      ]
    }
  };
};
```