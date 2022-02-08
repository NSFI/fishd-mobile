# Modal 对话框 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 函数式用法

:::demo

```js
const Demo = () => {
  const sleep = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  const handleAlertClick = action => {
    Modal.alert({
      title: '提示',
      content: '网易云商',
      onConfirm: () => {
        Toast.show(`确认完成`);
      },
    });
  };
  const handleAsyncAlertClick = action => {
    Modal.alert({
      title: '提示',
      content: '网易云商',
      onConfirm: async () => {
        await sleep(2000);
        Toast.show(`确认完成`);
      },
    });
  };
  const handleConfirmClick = action => {
    Modal.confirm({
      title: '提示',
      content: '网易云商',
      onConfirm: () => {
        Toast.show(`确认完成`);
      },
      onCancel: () => {
        Toast.show(`确认取消`);
      },
    });
  };
  const handleAsyncConfirmClick = action => {
    Modal.confirm({
      title: '提示',
      content: '网易云商',
      onConfirm: async () => {
        await sleep(2000);
        Toast.show(`确认完成`);
      },
      onCancel: async () => {
        await sleep(2000);
        Toast.show(`确认取消`);
      },
    });
  };
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">函数式调用</div>
      <div className="demo-card">
        <List>
          <List.Item arrow onClick={handleAlertClick}>
            提示弹窗
          </List.Item>
          <List.Item arrow onClick={handleAsyncAlertClick}>
            异步提示弹窗
          </List.Item>
          <List.Item arrow onClick={handleConfirmClick}>
            确认弹窗
          </List.Item>
          <List.Item arrow onClick={handleAsyncConfirmClick}>
            异步确认弹窗
          </List.Item>
        </List>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## 组件式用法

:::demo

```js
const Demo = () => {
  const sleep = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
  const [show, setShow] = React.useState(false);
  const actions = [
    {
      key: 'cancel',
      type: 'default',
      text: '取消',
    },
    {
      key: 'confirm',
      type: 'primary',
      text: '确认',
    },
  ];
  const handleAction = action => {
    Toast.show(`点击按钮 - ${action.key}`);
    setShow(false);
  };

  const [asyncShow, setAsyncShow] = React.useState(false);
  const asyncActions = [
    {
      key: 'cancel',
      type: 'default',
      text: '取消',
      onClick: async () => {
        await sleep(2000);
        Toast.show(`取消完成`);
      },
    },
    {
      key: 'confirm',
      type: 'primary',
      text: '确认',
      onClick: async () => {
        await sleep(2000);
        Toast.show(`确认完成`);
      },
    },
  ];
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">组件式调用</div>
      <div className="demo-card">
        <List>
          <List.Item
            arrow
            onClick={() => {
              setShow(true);
            }}
          >
            组件式弹窗
          </List.Item>
          <List.Item
            arrow
            onClick={() => {
              setAsyncShow(true);
            }}
          >
            组件式异步弹窗
          </List.Item>
        </List>
        <Modal
          visible={show}
          title="提示"
          content="网易云商"
          actions={actions}
          onAction={handleAction}
          onClose={() => setShow(false)}
        ></Modal>
        <Modal
          visible={asyncShow}
          title="提示"
          content="网易云商"
          actions={asyncActions}
          closeOnAction={true}
          onClose={() => setAsyncShow(false)}
        ></Modal>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## Modal

| 属性              | 说明                   | 类型                                                       | 默认值  |
| ----------------- | ---------------------- | ---------------------------------------------------------- | ------- |
| visible           | 是否显示对话框         | `boolean`                                                  | -       |
| closeOnClickModal | 点击遮罩关闭对话框     | `boolean`                                                  | `false` |
| closeOnAction     | 点击操作按钮关闭对话框 | `boolean`                                                  | `false` |
| title             | 对话框标题             | `React.ReactNode`                                          | -       |
| content           | 对话框内容             | `React.ReactNode`                                          | -       |
| actions           | 操作按钮               | `Action[]`                                                 | []      |
| onAction          | 点击操作按钮回调       | `(action: Action, index: number) => void \| Promise<void>` | -       |
| onClose           | 关闭回调               | `() => void`                                               | -       |
| afterShow         | 对话框展示后回调       | `() => void`                                               | -       |
| afterClose        | 对话框关闭后回调       | `() => void`                                               | -       |

### Action

| 属性     | 说明           | 类型                                                 | 默认值    |
| -------- | -------------- | ---------------------------------------------------- | --------- |
| key      | 唯一标记       | `string \| number`                                   | -         |
| type     | 按钮类型       | `primary \| success \| default \| warning \| danger` | `default` |
| color    | 自定义按钮颜色 | `string`                                             | -         |
| disabled | 是否禁用       | `boolean`                                            | `false`   |
| onClick  | 按钮点击       | `(action: Action) => void \| Promise<void>`          | -         |

## Modal.show

函数式调用`Modal`，不在支持传入`visible`，其他参数与组件保持一致，并返回一个`close`方法，用来手动关闭对话框

```tsx
const close = Modal.show(Modal.props);
```

## Modal.alert

| 属性        | 说明     | 类型                                        | 默认值 |
| ----------- | -------- | ------------------------------------------- | ------ |
| confirmText | 确认文案 | `string`                                    | `确认` |
| onConfirm   | 确认回调 | `(action: Action) => void \| Promise<void>` | -      |

## Modal.confirm

| 属性        | 说明     | 类型                                        | 默认值 |
| ----------- | -------- | ------------------------------------------- | ------ |
| confirmText | 确认文案 | `string`                                    | `确认` |
| cancelText  | 取消文案 | `string`                                    | `取消` |
| onConfirm   | 确认回调 | `(action: Action) => void \| Promise<void>` | -      |
| onCancel    | 取消文案 | `(action: Action) => void \| Promise<void>` | -      |

## 样式变量

| 属性               | 说明       | 类型     | 默认值 |
| ------------------ | ---------- | -------- | ------ |
| --fm-modal-width | 对话框宽度 | `string` | `75vw` |
| --fm-modal-z-index | 对话框层级 | `number` | `1000` |
