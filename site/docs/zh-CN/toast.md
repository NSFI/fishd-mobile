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
    <div>
      <DemoBlock title="文字提示">
        <Button onClick={showToast}>文本提示</Button>
        <Button onClick={showLongToast}>长文本提示</Button>
      </DemoBlock>

      <DemoBlock title="加载提示">
        <Button onClick={showToastLoading}>加载提示</Button>
      </DemoBlock>

      <DemoBlock title="成功/失败提示">
        <Button type="success" onClick={showToastSuccess}>
          成功提示
        </Button>
        <Button type="danger" onClick={showToastError}>
          失败提示
        </Button>
      </DemoBlock>

      <DemoBlock title="背景锁定">
        <Button onClick={showToastWithMask}>锁定</Button>
        <Button onClick={showToastWithoutMask}>不锁定</Button>
      </DemoBlock>

      <DemoBlock title="自定义图标">
        <Button onClick={showToastCustom}>自定义图标</Button>
      </DemoBlock>
    </div>
  );
};

ReactDOM.render(<ToastDemo />, mountNode);
```

```less
.fm-button {
  margin-right: 12px;
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
