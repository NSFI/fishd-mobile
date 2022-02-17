# Form 表单 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

表单提交组件

## 何时使用

用于用户数据提交场景

## 垂直布局

:::demo

```js
const Demo = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    Toast.show({
      content: JSON.stringify(values),
    });
  };
  return (
    <DemoBlock title="垂直布局" noStyle>
      <Form
        form={form}
        onFinish={onFinish}
        footer={
          <div style={{ padding: 12 }}>
            <Button type="primary" size="small" htmlType="submit" block>
              提 交
            </Button>
          </div>
        }
      >
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: '姓名不能为空' }]}>
          <Input placeholder="请输入姓名" clearable />
        </Form.Item>

        <Form.Item name="age" label="年龄">
          <Input placeholder="请输入年龄" clearable />
        </Form.Item>

        <Form.Item name="sex" label="性别">
          <Radio.Group>
            <Radio value="男" style={{ marginRight: 8 }}>
              男
            </Radio>
            <Radio value="女" style={{ marginRight: 8 }}>
              女
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="fruit" label="喜欢的水果">
          <Checkbox.Group>
            <Checkbox value="车厘子" style={{ marginRight: 8 }}>
              车厘子
            </Checkbox>
            <Checkbox value="莲雾" style={{ marginRight: 8 }}>
              莲雾
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="rate" label="评分">
          <Rate allowHalf />
        </Form.Item>
      </Form>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## 水平布局

:::demo

```js
const Demo = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    Toast.show({
      content: JSON.stringify(values),
    });
  };
  return (
    <DemoBlock title="水平布局" noStyle>
      <Form
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        footer={
          <div style={{ padding: 12 }}>
            <Button type="primary" size="small" htmlType="submit" block>
              提 交
            </Button>
          </div>
        }
      >
        <Form.Item
          name="name"
          label="姓名"
          validateTrigger={['onBlur']}
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder="请输入姓名" clearable />
        </Form.Item>

        <Form.Item name="age" label="年龄">
          <Input placeholder="请输入年龄" clearable />
        </Form.Item>

        <Form.Item name="sex" label="性别">
          <Radio.Group>
            <Radio value="男" style={{ marginRight: 8 }}>
              男
            </Radio>
            <Radio value="女" style={{ marginRight: 8 }}>
              女
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="fruit" label="喜欢的水果">
          <Checkbox.Group>
            <Checkbox value="车厘子" style={{ marginRight: 8 }}>
              车厘子
            </Checkbox>
            <Checkbox value="莲雾" style={{ marginRight: 8 }}>
              莲雾
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="rate" label="评分">
          <Rate allowHalf />
        </Form.Item>

        <Form.List
          name="remarks"
          rules={[
            {
              validator: async (_, value) => {
                if (!value || value.length < 2) {
                  return Promise.reject(new Error('至少输入两条爱好'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  key={field.key}
                  label={index === 0 ? '爱好' : ' '}
                  required={false}
                  extra={<Icon type="cross" onClick={() => remove(field.name)}></Icon>}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: '请输入内容',
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="爱好内容，例如篮球、足球" style={{ width: '60%' }} />
                  </Form.Item>
                </Form.Item>
              ))}
              <Form.Item label={fields.length > 0 ? ' ' : '爱好'}>
                <Form.ErrorList style={{ marginBottom: 10 }} errors={errors} />
                <Button size="small" type="primary" fill="outline" onClick={() => add()} style={{ width: '60%' }}>
                  添 加
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
      </Form>
    </DemoBlock>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

### Form

| 属性        | 说明                                                       | 类型                     | 默认值     |
| ----------- | ---------------------------------------------------------- | ------------------------ | ---------- |
| layout      | 布局模式                                                   | `vertical \| horizontal` | `vertical` |
| labelWidth  | 水平布局时，label 的宽度，支持`auto`                       | `string`                 | `6em`      |
| header      | form 头部自定义内容，通常用来放置原生提交按钮              | `React.ReactNode`        | -          |
| footer      | form 底部自定义内容，通常用来放置原生提交按钮              | `React.ReactNode`        | -          |
| hasFeedback | 是否展示错误反馈                                           | `boolean`                | `true`     |
| form        | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance`           | -          |

其他参数参见 https://www.npmjs.com/package/rc-field-form

### Form.Item

| 属性        | 说明                                        | 类型                     | 默认值     |
| ----------- | ------------------------------------------- | ------------------------ | ---------- |
| layout      | 布局模式                                    | `vertical \| horizontal` | `vertical` |
| hasFeedback | 是否展示错误反馈                            | `boolean`                | `true`     |
| label       | 名称                                        | `vertical \| horizontal` | `vertical` |
| labelWidth  | 水平布局时，label 的宽度，支持`auto`        | `string`                 | `6em`      |
| required    | 是否必填，如果不传则根据 rules 规则自动计算 | `boolean`                | -          |
| disabled    | 是否禁用                                    | `boolean`                | `false`    |
| noStyle     | 不使用样式，只使用字段管理                  | `boolean`                | `false`    |
| hidden      | 是否隐藏整个字段                            | `boolean`                | `false`    |
| name        | 字段名，支持数组                            | `NamePath`               | -          |
| rules       | 校验规则                                    | `Rule[]`                 | -          |

其他参数参见 https://www.npmjs.com/package/rc-field-form

### Form.List

| 属性         | 说明                                                              | 类型                                                                                       | 默认值 |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ |
| children     | 渲染函数                                                          | `(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode` | -      |
| initialValue | 设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准 | `any[]`                                                                                    | -      |
| name         | 字段名，支持数组                                                  | `NamePath`                                                                                 | -      |
| rules        | 校验规则，仅支持自定义规则。需要配合 ErrorList 一同使用。         | `{ validator, message }[]`                                                                 | -      |

其他参数参见 https://www.npmjs.com/package/rc-field-form

### Form.ErrorList

错误展示组件，仅限配合 Form.List 的 rules 一同使用

| 属性   | 说明     | 类型          | 默认值 |
| ------ | -------- | ------------- | ------ |
| errors | 错误列表 | `ReactNode[]` | -      |

### Form.useForm

参数参见 https://www.npmjs.com/package/rc-field-form
