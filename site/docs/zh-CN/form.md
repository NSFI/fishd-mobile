# Form 表单 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

表单校验

:::demo

```js
const InputItem = Form.addErrorExplanation(Input);
class InputDemo extends React.Component {
  handleSubmit = () => {
    console.log('>>> 提交')
    this.props.form.validateFields({ force: true }, (errors, value) => {
      console.log('>>> 表单验证结果', errors)
      if (errors === null) {
        Toast.success('提交完成', 1);
      }
    });
  };

  checkContent = (rule, value) => {
    setTimeout(() => {
      Toast.loading('验证中...', 999, false)
    }, 0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Toast.hide();
        if (value != 123) {
          reject('内容不正确')
        } else {
          resolve()
        }
      }, 1000)
    })
  };

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='components-input-demo-basic'>
        <div className='demo-title'>基础用法</div>
        <div className='u-form'>
          {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "请输入您的手机号"
                }
              ]
            })(<InputItem type='phone' placeholder='请输入手机号' labelWidth={80} autoComplete='off'>手机号</InputItem>)
          }
          {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码"
                }
              ]
            })(<InputItem type='password' placeholder='请输入密码' labelWidth={80} autoComplete='new-password'>密码</InputItem>)
          }
          {getFieldDecorator("content", {
              validateTrigger: 'onBlur',
              rules: [
                {
                  required: true,
                  message: "请输入内容",
                  asyncValidator: this.checkContent,
                }
              ]
            })(<InputItem type='text' placeholder='请输入内容' labelWidth={80} autoComplete='off'>异步校验</InputItem>)
          }
        </div>
        <Button className='u-button' onClick={this.handleSubmit}>
          提交
        </Button>
      </div>
    )
  }
}

const InputDemoWrapper = Form.create()(InputDemo)
ReactDOM.render(<InputDemoWrapper />, mountNode)

```

```less
.components-input-demo-basic {
  padding-bottom: 10px;
  .u-form {
    background: #fff;
  }
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
.form-error-explain {
  padding: 0 16px;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| addErrorExplanation | 对原生的组件，如 InputItem，Picker 等组件，需要用 addErrorExplanation 包裹，返回一个新的组件。该新组件支持错误提示，将在 getFieldDecorator 中使用：const MyInputItem = addErrorExplanation(InputItem)。 | (WrappedComponent: React.Component) => React.Component | - |
| create | 创建表单 | (option: Object) => (WrappedComponent: React.Component) => React.Component | - |
