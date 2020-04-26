# QuickStart

## Install
NPM is recommended for installation. It can be better used with the `webpack` packaging tool.
If the installation is slow and error is reported, you can try to install by yourself with cnpm or other image sources：`rm -rf node_modules && cnpm install`。

```shell
npm i ppfish --save
```

## Use

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'ppfish';

ReactDOM.render(
  <Button type="primary">Primary</Button>, document.getElementById('app')
);

```

## Load on demand
Usually, only some components are used. If you use `import {button} from' ppfish `, Babel usually packages the whole ppfish.

You can use Babel plug-ins, such as [Babel plugin transform imports](https://www.npmjs.com/package/babel) plugin transform imports), to automatically convert this writing method into 'Import button from' ppfish / ES / components / button 'at compile time;

However, you need to tell [Babel plugin transform imports]((https://www.npmjs.com/package/babel plugin transform imports)) the path name rule of the ppfish component of the plug-in.

```js
module.exports = function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);
  return {
    plugins: [
      "transform-imports", {
        "ppfish": {
          "transform": "ppfish/es/components/${member}"
        },
      }
    ]
  };
};

```

__Note: because the component uses the reference method when importing the public style, the public style will not be packaged when it is loaded on demand. It needs to be imported manually using 'import' ppfish / ES / assets / CSS / index. Less'. __


## Using ppfish component library on CDN

Please use existing CDN resources or package and upload to CDN by yourself. The way to introduce ppfish component library from CDN is the same as using react library file on CDN, which uses script tag to reference CDN resources in HTML file. Because ppfish component library depends on react and react DOM, please make sure that the location of these two files is before CDN resource of component library. In addition, you need to manually introduce the style CDN resource of the component library.

```html
<html>
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ppfish@1.5.2/dist/ppfish.css">
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.0/umd/react.production.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ppfish@1.5.2/dist/ppfish.min.js"></script>

    <script type="text/jsx">
      console.log(window['ppfish'])
      const Select = window['ppfish'].Select;
      const Button = window['ppfish'].Button;
      class App extends React.Component {
        render() {
          return (
            <div className="demo-select">
              <Select mode={'multiple'} errorMessage={'最多仅能选择3项'} labelClear maxCount={3} style={{width: 300, margin: 10}} showSelectAll>
                <Select.Option value={"1"}>{'选项1'}</Select.Option>
                <Select.Option value={"2"} disabled>{'选项2'}</Select.Option>
                <Select.Option value={"3"}>{'选项3'}</Select.Option>
                <Select.Option value={"4"}>{'比较长的选项比较长的选项-选项4'}</Select.Option>
                <Select.Option value={"5"}>{'选项5'}</Select.Option>
              </Select>
            </div>
          )
        }
      }

      ReactDOM.render(<App/>, document.getElementById('root'));
    </script>
  </body>
</html>
```

## Demo

[Fish Design Demo](https://nsfi.github.io/ppfish-demo/#/homePage/home)
