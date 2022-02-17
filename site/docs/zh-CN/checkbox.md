# Checkbox 复选框 【交互：刘莹莹 | 视觉：徐剑杰 |开发：韩高钶】

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本样式

:::demo 基础样式

```jsx
const Demo = () => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <DemoBlock title="基础样式" noStyle>
        <List>
          <List.Item>
            <Checkbox defaultChecked block>
              选项一
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox block>选项二</Checkbox>
          </List.Item>
        </List>
      </DemoBlock>
      <DemoBlock title="水平排列">
        <List>
          <Checkbox style={{ marginRight: 12 }} defaultChecked>
            选项一
          </Checkbox>
          <Checkbox>选项二</Checkbox>
        </List>
      </DemoBlock>

      <DemoBlock title="禁用状态" noStyle>
        <List>
          <List.Item>
            <Checkbox defaultChecked block disabled>
              选项一
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox block disabled>
              选项二
            </Checkbox>
          </List.Item>
        </List>
      </DemoBlock>

      <DemoBlock title="多选组" noStyle>
        <Checkbox.Group value={value} onChange={setValue}>
          <List>
            <List.Item>
              <Checkbox value="a">选项一</Checkbox>
            </List.Item>
            <List.Item>
              <Checkbox value="b">选项二</Checkbox>
            </List.Item>
          </List>
        </Checkbox.Group>
      </DemoBlock>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```less
.components-checkbox-demo-basic {
  padding-bottom: 20px;
}
```

:::

## API

### Checkbox

| 属性           | 说明                                         | 类型                                | 默认值  |
| -------------- | -------------------------------------------- | ----------------------------------- | ------- |
| checked        | 是否选中                                     | boolean                             | `false` |
| defaultChecked | 是否默认选中                                 | boolean                             | `false` |
| disabled       | 是否禁用                                     | boolean                             | `false` |
| block          | 是否渲染为块级元素                           | boolean                             | `false` |
| value          | `Checkbox`绑定的值，配合`Checkbox.Group`使用 | CheckboxValue                       | -       |
| icon           | 自定义 icon 渲染                             | (checked: boolean): React.ReactNode | -       |
| onChange       | change 事件触发的回调函数                    | (checked: boolean): void            | -       |

### Checkbox.Group

| 属性         | 说明                      | 类型                         | 默认值  |
| ------------ | ------------------------- | ---------------------------- | ------- |
| value        | 选项值                    | CheckboxValue[]              | -       |
| defaultValue | 默认选项值                | CheckboxValue[]              | -       |
| disabled     | 是否禁用                  | boolean                      | `false` |
| onChange     | change 事件触发的回调函数 | (value: CheckboxValue): void | -       |

## 样式变量

| 属性                    | 说明         | 类型     | 默认值 |
| ----------------------- | ------------ | -------- | ------ |
| --fm-checkbox-icon-size | 图标大小     | `string` | `20px` |
| --fm-checkbox-font-size | 文本大小     | `string` | `14px` |
| --fm-checkbox-gap       | 图标文本间距 | `string` | `8px`  |
