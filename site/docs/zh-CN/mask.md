# Mask 遮罩 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 基础用法

:::demo

```js
const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [visible5, setVisible5] = React.useState(false);
  return (
    <div className="components-tpl-demo-basic">
      <DemoBlock title="基础用法">
        <Button onClick={() => setVisible(true)}>显示遮罩</Button>
        <Mask visible={visible} onMaskClick={() => setVisible(false)} data-ysf="ceshi" />
      </DemoBlock>

      <DemoBlock title="渲染到body">
        <Button onClick={() => setVisible2(true)}>显示遮罩</Button>
        <Mask visible={visible2} getContainer={() => document.body} onMaskClick={() => setVisible2(false)} />
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Button onClick={() => setVisible3(true)}>显示遮罩</Button>
        <Mask visible={visible3} onMaskClick={() => setVisible3(false)} destroyOnClose={true}>
          <div className="demo-content">
            <h3>静夜思</h3>
            <p>床前明月光</p>
            <p>疑是地上霜</p>
            <p>举头望明月</p>
            <p>低头思故乡</p>
          </div>
        </Mask>
      </DemoBlock>

      <DemoBlock title="白色主题">
        <Button onClick={() => setVisible4(true)}>显示遮罩</Button>
        <Mask
          theme="light"
          visible={visible4}
          getContainer={() => document.body}
          onMaskClick={() => setVisible4(false)}
        />
      </DemoBlock>

      <DemoBlock title="局部渲染">
        <Button onClick={() => setVisible5(true)}>显示遮罩</Button>
        <div style={{ transform: 'translateY(0)', width: '100%', height: 200 }}>
          <Mask visible={visible5} disableBodyScroll={false} onMaskClick={() => setVisible5(false)} />
        </div>
      </DemoBlock>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
.demo-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100px;
  padding: 12px;
  overflow-y: auto;
  color: #333;
  border-radius: 4px;
  background: #fff;
  h3 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 8px;
  }
}
```

:::

## API

| 属性              | 说明                     | 类型                                                            | 默认值  |
| ----------------- | ------------------------ | --------------------------------------------------------------- | ------- |
| visible           | 是否展示                 | `boolean`                                                       | `true`  |
| destroyOnClose    | 关闭时是否销毁自定义内容 | `boolean`                                                       | `false` |
| forceRender       | 是否强制渲染自定义内容   | `boolean`                                                       | `false` |
| opacity           | 透明度                   | `number`                                                        | `0.6`   |
| disableBodyScroll | 是否禁用 body 滚动       | `boolean`                                                       | `true`  |
| getContainer      | 自定义渲染容器           | `HTMLElement \| (() => HTMLElement) \| null`                    | `null`  |
| theme             | 主题                     | `dark \| light`                                                 | `dark`  |
| afterShow         | 显示动画完成回调         | `() => void`                                                    | -       |
| afterClose        | 关闭动画完成回调         | `() => void`                                                    | -       |
| onMaskClick       | 遮罩点击事件回调         | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |

## 样式变量

| 属性              | 说明     | 类型     | 默认值 |
| ----------------- | -------- | -------- | ------ |
| --fm-mask-z-index | 遮罩层级 | `number` | `1000` |
