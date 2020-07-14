# Input 输入框 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

表单中的输入框组件

## 何时使用

用于文本内容输入

:::demo

```js
class InputDemo extends React.Component {
  state = {
    mark: '',
    phone: '',
    hasError: false,
  }

  handleClick = (e) => {
    e.preventDefault()
    this.inputRef.focus()
  }

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleMarkChange = (value) => {
    this.setState({
      mark: value
    })
  }

  handlePhoneChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      phone: value,
    });
  }

  render () {
    const { getFieldProps } = this.props.form
    const { mark, phone, hasError } = this.state
    const { TextArea } = Input;
    return (
      <div className='components-input-demo-basic'>
        <div className='sub-title'>基础用法</div>
        <Input placeholder='请输入标题' labelWidth={80} clear>
          标题
        </Input>

        <div className='sub-title'>自定义类型</div>
        <Input type='digit' placeholder='请输入价格' labelWidth={80}>
          价格
        </Input>
        <Input type='number' placeholder='请输入数字' labelWidth={80}>
          数字
        </Input>
        <Input type='phone' placeholder='请输入手机号' labelWidth={80}>
          手机号
        </Input>
        <Input type='bankCard' placeholder='请输入银行卡' labelWidth={80}>
          银行卡
        </Input>
        <Input type='password' placeholder='请输入密码' labelWidth={80}>
          密码
        </Input>

        <div className='sub-title'>禁用输入框</div>
        <Input placeholder='输入框只读' value='输入框只读' labelWidth={80} editable={false}>
          标题
        </Input>
        <Input placeholder='输入框禁用' value='输入框禁用' labelWidth={80} disabled>
          标题
        </Input>

        <div className='sub-title'>自定义右侧内容</div>
        <Input type='digit' placeholder='请输入价格' labelWidth={80} extra='¥'>
          标题
        </Input>

        <div className='sub-title'>自定义左侧标题</div>
        <Input placeholder='请输入用户名' labelWidth={80}>
          <img
            src='https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png'
            style={{ width: 15, height: 15 }}
          />
        </Input>

        <div className='sub-title'>自定义右侧按钮</div>
        <Input center placeholder='请输入短信验证码' labelWidth={80} extra={
          <Button size='small' type='primary'>发送验证码</Button>
        }>
          短信验证码
        </Input>

        <div className='sub-title'>手动聚焦</div>
        <Input placeholder='请输入内容' labelWidth={80} ref={(el) => (this.inputRef = el)} clear>
          标题
        </Input>
        <a className='u-button' onClick={this.handleClick}>
          点击聚焦
        </a>


        <div className='sub-title'>普通受控组件</div>
        <Input value={mark} onChange={this.handleMarkChange} placeholder='请输入备注' labelWidth={80} >
          标题
        </Input>

        <div className='sub-title'>rc-form受控组件</div>
        <Input {...getFieldProps('name')} placeholder='请输入内容' labelWidth={80} >
          标题
        </Input>
        <a className='u-button' onClick={this.handleSubmit}>
          提交
        </a>

        <div className='sub-title'>错误验证</div>
        <Input type='phone' value={phone} onChange={this.handlePhoneChange}  error={hasError} clear errorMessage='请输入正确的手机号' placeholder='请输入11位手机号码' labelWidth={80}>
          手机号码
        </Input>

        <div className='sub-title'>多行输入-自适应高度</div>
        <TextArea placeholder='请输入备注' autoHeight labelWidth={80} clear>
          标题
        </TextArea>

        <div className='sub-title'>多行输入-显示字数</div>
        <TextArea rows={3} count={100} placeholder='请输入备注' autoHeight labelWidth={80} clear>
          标题
        </TextArea>
      </div>
    )
  }
}

const InputDemoWrapper = rcForm.createForm()(InputDemo)
ReactDOM.render(<InputDemoWrapper />, mountNode)

```

```less
.components-input-demo-basic {
  padding-bottom: 40px;
}
[class^="components-input-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
[class^="components-input-demo-"] .u-button {
  display: block;
  padding: 10px 0;
  color: #337EFF;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| type | 	可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); 以及其他标准 html input type 类型| string | `text` |
| value | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html) | string | - |
| defaultValue | 设置初始默认值 | string | - |
| placeholder | placeholder | string | - |
| editable | 是否可编辑 | boolean | `true` |
| disabled | 是否禁用 | boolean | `false` |
| clear | 是否带清除功能(仅editable为true,disabled为false才生效) | boolean | `false` |
| maxLength | 最大长度 | number | - |
| error | 报错样式 | boolean | `false` |
| extra | 右边自定义内容 | string \| ReactNode | - |

## Event
| 事件名 | 说明         | 回调参数                                            |
| ---- | ------------ | ----------------------------------------------- |
| onChange | change 事件触发的回调函数 | val: string |
| onBlur | blur 事件触发的回调函数 | val: string |
| onFocus | focus 事件触发的回调函数 | val: string |
| onErrorClick | 点击报错 | event: object |
| onExtraClick | extra 点击事件触发的回调函数 | event: object |