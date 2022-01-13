# Toast 轻提示

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 一般用法

:::demo 一般用法。

```js
const ToastDemo = () => {
  const showToast = () => {
    Toast.show('提示内容');
  };

  const showLongToast = () => {
    Toast.info('提示内容比较长，超过限定字数会自动换行');
  };

  const showToastLoading = () => {
    Toast.loading('加载中3s后关闭...');
    setTimeout(() => {
      Toast.clear();
    }, 3000);
  };

  const showToastSuccess = () => {
    Toast.success('成功文案');
  };

  const showToastError = () => {
    Toast.error('失败文案');
  };

  const showToastWithoutMask = () => {
    Toast.show({
      mask: false,
      content: '背景可点击',
    });
  };

  const showToastWithMask = () => {
    Toast.show({
      mask: true,
      content: '背景不可点击',
    });
  };

  const showToastCustom = () => {
    Toast.show({
      icon: <Icon type="voice" fontSize={30} />,
      content: '自定义图标',
    });
  };
  return (
    <div className="components-toast-demo">
      <div className="demo-title">文字提示</div>
      <div className="demo-wrap">
        <Button onClick={showToast}>文本提示</Button>
        <Button onClick={showLongToast}>长文本提示</Button>
      </div>

      <div className="demo-title">加载提示</div>
      <div className="demo-wrap">
        <Button onClick={showToastLoading}>加载提示</Button>
      </div>

      <div className="demo-title">成功/失败提示</div>
      <div className="demo-wrap">
        <Button type="success" onClick={showToastSuccess}>
          成功提示
        </Button>
        <Button type="danger" onClick={showToastError}>
          失败提示
        </Button>
      </div>

      <div className="demo-title">成功/失败提示</div>
      <div className="demo-wrap">
        <Button onClick={showToastWithoutMask}>背景可点击</Button>
        <Button onClick={showToastWithMask}>背景不可点击</Button>
      </div>

      <div className="demo-title">自定义图标</div>
      <div className="demo-wrap">
        <Button onClick={showToastCustom}>自定义图标</Button>
      </div>
    </div>
  );
};

ReactDOM.render(<ToastDemo />, mountNode);
```

```less
.components-toast-demo {
  margin-top: 10px;
  width: 100%;
  .demo-wrap {
    padding: 0 16px;
  }
  .fm-button {
    margin-right: 10px;
  }
}
```

:::

## Toast.show

| 属性     | 说明                           | 类型                                            | 默认值  |
| -------- | ------------------------------ | ----------------------------------------------- | ------- |
| icon     | 图标                           | `success \| fail \| loading \| React.ReactNode` | -       |
| content  | 提示内容                       | `React.ReactNode`                               | -       |
| duration | 自动关闭的延时，单位/秒        | `number`                                        | `3`     |
| mask     | 是否显示透明蒙层，防止触摸穿透 | `boolean`                                       | `false` |
| onClose  | 关闭后回调                     | `() => void`                                    | -       |

## Toast.clear

关闭所有显示中的 Toast。
