# 定制主题

ppfish-mobile 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

## 样式变量

ppfish-mobile 使用了 less 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/NSFI/fishd-mobile/blob/master/source/assets/css/themes/default.less)。

```less
/** 色彩 **/
@color-primary: #337eff;
@color-primary-hover: #5c98ff;
@color-primary-active: #3d84ff;
@color-success: #00bf80;
@color-warning: #ffaa00;
@color-danger: #f24957;
@color-danger-hover: #f56d79;
@color-danger-active: #f3525f;

/** 中性色 */
@color-gray-1: #222222; // 一级灰（正文）
@color-gray-2: #666666; // 二级灰（较弱的正文）
@color-gray-3: #999999; // 三级灰（说明文字）
@color-gray-4: #bfbfbf; // 四级灰（弱提示类文字，例如输入框内的暗文）
@color-gray-5: #d9d9db; // 五级灰（深边框色）
@color-gray-6: #e6e7eb; // 六级灰（浅边框色）
@color-gray-7: #f0f0f2; // 七级灰（深背景色）
@color-gray-8: #f5f5f7; // 八级灰（浅背景色）
```

## 定制方法

### 在 webpack 中定制主题

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader', // translates CSS into CommonJS
        },
        {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: {
              // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
              modifyVars: {
                '@color-primary': 'pink',
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
      // ...other rules
    },
  ],
  // ...other config
};
```

### 在 create-react-app 中定制主题

```js
const CracoLessPlugin = require('craco-less');

module.exports = function({ env }) {
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                '@color-primary': 'pink',
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
            style: true,
          },
        ],
      ],
    },
  };
};
```
