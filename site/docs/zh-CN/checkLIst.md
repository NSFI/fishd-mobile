# CheckList 可勾选列表 【交互：刘莹莹 |视觉：徐剑杰 |开发：刘涛】

CheckList 底层是基于 List 实现的，是可以进行勾选的列表。

## 何时使用

需要以列表的形式展示勾选状态，数据展示或数据采集，可以自定义选中图标以及单选多选、是否禁用。

## 基础用法

:::demo CheckList基本用法

```js
render() {
  return (
    <div>

      <div className="components-tpl-demo-basic">
        <div className="demo-title">基础用法</div>
        <div className="demo-card">
          <CheckList defaultValue={['B']} onChange={(val)=> console.log('valueChange:', val)}>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
            <CheckList.Item value='C' disabled>
              C
            </CheckList.Item>
            <CheckList.Item value='D' readOnly>
              D
            </CheckList.Item>
          </CheckList>
        </div>
      </div>

      <div className="components-tpl-demo-basic">
        <div className="demo-title">多选</div>
        <div className="demo-card">
          <CheckList multiple defaultValue={['B', 'C']} onChange={(val)=> console.log('valueChange-multiple:', val)}>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
            <CheckList.Item value='C'>C</CheckList.Item>
          </CheckList>
        </div>
      </div>

      <div className="components-tpl-demo-basic">
        <div className="demo-title">自定义选中图标</div>
        <div className="demo-card">
          <CheckList activeIcon={<Icon type="heart"></Icon>} defaultValue={['B']}>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
            <CheckList.Item value='C'>C</CheckList.Item>
          </CheckList>
        </div>
      </div>

      <div className="components-tpl-demo-basic">
        <div className="demo-title">整组只读</div>
        <div className="demo-card">
          <CheckList defaultValue={['B']} readOnly>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
          </CheckList>
        </div>
      </div>

      <div className="components-tpl-demo-basic">
        <div className="demo-title">整组禁用</div>
        <div className="demo-card">
          <CheckList disabled readOnly>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
          </CheckList>
        </div>
      </div>

    </div>
  );
}
```

```less
[class^="components-tpl-demo-"] .fm-button {
  margin-bottom: 12px;
}
```

:::

## API

### 属性

| 属性         | 说明           | 类型                        | 默认值             |
| ------------ | -------------- | --------------------------- | ------------------ |
| value        | 选中项         | `string[]`                  | `[]`               |
| defaultValue | 默认项         | `string[]`                  | `[]`               |
| onChange     | 选项改变时触发 | `(value: string[]) => void` | -                  |
| multiple     | 是否允许多选   | `boolean`                   | `false`            |
| activeIcon   | 选中图标       | `ReactNode`                 | `</>` |
| readOnly     | 是否只读       | `boolean`                   | `false`            |
| disabled     | 是否禁用       | `boolean`                   | `false`            |


### CSS 变量

同 List.Item

## CheckList.Item

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| value    | 选项值   | `string`  | -       |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

此外，还支持List.Item 的以下属性：`title` `children` `description` `prefix` `onClick`



