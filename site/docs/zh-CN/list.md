# List 列表 【交互：刘莹莹 | 视觉：徐剑杰 |开发：韩高钶】

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

## 何时使用

- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## 基础用法

:::demo 基础用法。

```jsx
const Demo = () => {
  const handleClick = () => {
    Toast.info('标题点击了');
  };

  return (
    <div className="components-noticebar-demo-basic">
      <div className="demo-title">基础用法</div>
      <List>
        <List.Item extra="这里是说明">标题</List.Item>
        <List.Item extra="这里是说明">标题</List.Item>
      </List>

      <div className="demo-title">可跳转样式</div>
      <List>
        <List.Item extra="这里是说明" arrow clickable onClick={handleClick}>
          标题
        </List.Item>
        <List.Item extra="这里是说明" arrow clickable onClick={handleClick}>
          标题
        </List.Item>
      </List>

      <div className="demo-title">带图标样式</div>
      <List>
        <List.Item prefix={<Icon type="user" fontSize={24} />} extra="这里是说明" clickable arrow onClick={handleClick}>
          我是内容
        </List.Item>
        <List.Item
          prefix={<Icon type="user" fontSize={24} />}
          description="这里是描述"
          extra="这里是说明"
          clickable
          arrow
          onClick={handleClick}
        >
          我是内容
        </List.Item>
        <List.Item
          prefix={<Icon type="user" fontSize={24} />}
          title="小标题"
          description="这里是描述"
          extra="这里是说明"
          clickable
          arrow
          onClick={handleClick}
        >
          我是内容
        </List.Item>
      </List>

      <div className="demo-title">禁用</div>
      <List>
        <List.Item extra="这里是说明" disabled>
          标题
        </List.Item>
        <List.Item extra="这里是说明" disabled>
          标题
        </List.Item>
      </List>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
.components-noticebar-demo-basic {
  padding-bottom: 20px;
}
```

:::

### List

| 属性         | 说明        | 类型     | 默认值 |
| ------------ | ----------- | -------- | ------ |
| renderHeader | list heder  | (): void | 无     |
| renderFooter | list footer | (): void | 无     |

### List.Item

| 属性  | 说明     | 类型                 | 默认值 |
| ----- | -------- | -------------------- | ------ |
| extra | 右边内容 | String/React.Element | 无     |
