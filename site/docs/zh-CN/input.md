# Input 输入框 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

表单中的输入框组件

## 何时使用

用于文本内容输入

:::demo

```js
class InputDemo extends React.Component {
  state = {};

  render() {
    const { mark, phone, hasError, content } = this.state;
    return (
      <div className="components-input-demo-basic">
        <div className="demo-title">Input-基础用法</div>
        <div className="demo-block">
          <Input placeholder="请输入标题" clearable={true}></Input>
        </div>

        <div className="demo-title">Input-前缀和后缀</div>
        <div className="demo-block">
          <Input placeholder="请输入金额" clearable={true} prefix={<span>¥</span>} suffix={<span>RMB</span>}></Input>
        </div>

        <div className="demo-title">Input-禁用</div>
        <div className="demo-block">
          <Input value="网易云商yyds" placeholder="请输入标题" disabled={true} clearable={true}></Input>
        </div>

        <div className="demo-title">Input-只读</div>
        <div className="demo-block">
          <Input value="网易云商yyds" placeholder="请输入标题" readOnly={true} clearable={true}></Input>
        </div>

        <div className="demo-title">TextArea-自适应高度</div>
        <div className="demo-block">
          <Input.TextArea placeholder="请输入内容" clearable={true} autoSize={true} rows={1}></Input.TextArea>
        </div>

        <div className="demo-title">TextArea-显示字数</div>
        <div className="demo-block">
          <Input.TextArea placeholder="请输入内容" clearable={true} showCount={true} maxLength={20}></Input.TextArea>
        </div>

        <div className="demo-title">TextArea-禁用</div>
        <div className="demo-block">
          <Input.TextArea value="网易云商yyds" disabled={true} placeholder="请输入内容" clearable={true} showCount={true} maxLength={20}></Input.TextArea>
        </div>

        <div className="demo-title">TextArea-只读</div>
        <div className="demo-block">
          <Input.TextArea value="网易云商yyds" readOnly placeholder="请输入内容" clearable={true} showCount={true} maxLength={20}></Input.TextArea>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<InputDemo />, mountNode);
```

```less
.components-input-demo-basic {
  padding-bottom: 40px;
}
[class^='components-input-demo-'] .demo-block {
  padding: 12px;
  background: #fff;
}
```

:::

## Input

| 属性         | 说明           | 类型                | 默认值  |
| ------------ | -------------- | ------------------- | ------- |
| value        | 输入值         | string              | -       |
| defaultValue | 默认值         | string              | -       |
| placeholder  | 提示文本       | string              | -       |
| readOnly     | 是否只读       | boolean             | `true`  |
| disabled     | 是否禁用       | boolean             | `false` |
| clearable    | 是否带清除功能 | boolean             | `false` |
| maxLength    | 最大字符数     | number              | -       |
| prefix       | 左边自定义内容 | string \| ReactNode | -       |
| suffix       | 右边自定义内容 | string \| ReactNode | -       |

## Input Event

| 事件名       | 说明                 | 类型                                               |
| ------------ | -------------------- | -------------------------------------------------- |
| onChange     | 输入框内容变化时触发 | (val: string) => void                              |
| onBlur       | 输入框失去焦点时触发 | () => void                                         |
| onFocus      | 输入框获取焦点时触发 | () => void                                         |
| onClear      | 点击清除按钮后触发   | () => void                                         |
| onEnterPress | 按下回车时触发       | (e: React.KeyboardEvent<HTMLInputElement>) => void |

## Input Ref

| 事件名 | 说明             | 类型       |
| ------ | ---------------- | ---------- |
| clear  | 清空输入内容     | () => void |
| focus  | 让输入框获得焦点 | () => void |
| blur   | 让输入框失去焦点 | () => void |

## TextArea

| 属性         | 说明                     | 类型    | 默认值  |
| ------------ | ------------------------ | ------- | ------- |
| value        | 输入值                   | string  | -       |
| defaultValue | 默认值                   | string  | -       |
| placeholder  | 提示文本                 | string  | -       |
| readOnly     | 是否只读                 | boolean | `true`  |
| disabled     | 是否禁用                 | boolean | `false` |
| clearable    | 是否带清除功能           | boolean | `false` |
| autoSize     | 自适应内容高度           | boolean | `false` |
| rows         | 行数                     | number  | `2`     |
| maxLength    | 最大字符数               | number  | -       |
| showCount    | 显示字数，支持自定义渲染 | boolean | `false` |
| maxLength    | 最大字符数               | number  | -       |

## TextArea Event

| 事件名   | 说明                 | 类型                  |
| -------- | -------------------- | --------------------- |
| onChange | 输入框内容变化时触发 | (val: string) => void |
| onBlur   | 输入框失去焦点时触发 | () => void            |
| onFocus  | 输入框获取焦点时触发 | () => void            |
| onClear  | 点击清除按钮后触发   | () => void            |

## TextArea Ref

| 事件名 | 说明             | 类型       |
| ------ | ---------------- | ---------- |
| clear  | 清空输入内容     | () => void |
| focus  | 让输入框获得焦点 | () => void |
| blur   | 让输入框失去焦点 | () => void |
