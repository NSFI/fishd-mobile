/**
 * 定制webpack相关配置
 */
const path = require('path');

module.exports = {
  // 启动端口
  port: 4000,
  // 入口名称，默认值`index`
  entryName: 'site',
  // 主题模版位置
  theme: './site/desktop',
  // html模版路径
  htmlTemplate: path.join(__dirname, './desktop/template.html'),
  // html输出名称，默认值`index`
  htmlFileName: 'index',
  // 文件输出目录
  outputPath: './dist/desktop',
  // 同webpack publicPath
  publicPath: './',
  // dll配置
  dll: {
    name: 'desktopDll',
    value: ['react', 'react-dom', 'react-router', 'codemirror', 'marked', 'less', 'prismjs'],
  },
  // 自定义webpack配置
  webpackConfig(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@docs': path.join(__dirname, './docs'),
      '@': path.join(__dirname, './desktop'),
    };
    return config;
  },
};
