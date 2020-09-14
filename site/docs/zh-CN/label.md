# Label 标签 【交互：刘莹莹 | 视觉：徐剑杰 |开发：周明阳】


标签组件，用于标记和选择。
## 基础用法

:::demo

```js
  constructor(props){
    super(props);
    this.state = {
      data: ['#337EFF','#26BD71','#F24957','#F29900','#8875FF','#969799'],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className='components-label-demo-basic'>
        <div className='demo-title'>基础样式</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} key={`1${c}`.toString()} className="label">
              <span>标签</span>
            </Label>
          ))}
        </div>

        <div className='demo-title'>圆角样式</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} type='round' key={`2${c}`.toString()} className="label">
              <span>标签</span>
            </Label>
          ))}
        </div>

        <div className='demo-title'>标记样式</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} type='mark' key={`3${c}`.toString()} className="label">
              <span>标签</span>
            </Label>
          ))}
        </div>

        <div className='demo-title'>浅底样式</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} type='shallow' key={`4${c}`.toString()} className="label">
              <span>标签</span>
            </Label>
          ))}
        </div>

        <div className='demo-title'>空心样式</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} type='plain' key={`5${c}`.toString()} className="label">
              <span>标签</span>
            </Label>
          ))}
        </div>

      </div>
    );
  }
```

```less
.label-demo-body {
  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  .label {
    margin-right: 8px;
  }
}
```
:::

:::demo

```js
  render() {

    return (
      <div className='components-label-demo-basic'>
        <div className='demo-title'>标签大小</div>
        <div className='label-demo-body'>
          <Label size='sm' className="label">
            <span>标签</span>
          </Label>
          <Label size='md' className="label">
            <span>标签</span>
          </Label>
          <Label size='lg' className="label">
            <span>标签</span>
          </Label>
        </div>
      </div>
    );
  }
```

```less
.label-demo-body {
  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  .label {
    margin-right: 8px;
  }
}
```
:::

:::demo

```js
  constructor(props){
    super(props);
    this.state = {
      data: ['#337EFF','#26BD71','#F24957','#F29900'],
    };
  }
  render() {
    const {data} = this.state;

    return (
      <div className='components-label-demo-basic'>
        <div className='demo-title'>可关闭标签</div>
        <div className='label-demo-body'>
          {data.map(c => (
            <Label color={c} key={c} className="label" closeable
              onClose={() => {
                  console.log('close');
                }}
                afterClose={() => {
                  console.log('afterClose');
                }}
              >
              <span>标签</span>
            </Label>
          ))}
        </div>

      </div>
    );
  }
```

```less
.label-demo-body {
  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  .label {
    margin-right: 8px;
  }
}
```
:::


## API

| 属性            | 说明                           | 类型    | 默认值 |
| --------------- | ------------------------------ | ------- | ------ |
| color           | 标签颜色                   | string | '#337EFF'  |
| size        | 标签大小 可选`lg`,`md`,`sm`              | boolean | 'md'   |
| type | 标签类型 可选`normal`,`plain`,`round`,`mark`,`shallow` | string  | 'normal' |
| closeable | 标签是否可以关闭 | boolean  | 'false' |
| onClose | 标签关闭时的回调 | function  | '-' |
| afterClose | 关闭后的回调 | function  | '-' |
