# Ellipsis 文本省略 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo demo 标题

```js
const Demo = () => {
  return (
    <div>
      <DemoBlock title="尾部省略">
        <Ellipsis content="网易云商是网易智企旗下的商业增长服务平台，以智能为核心，打通企业营销全链路，帮助企业在洞察市场和用户的基础上，实现精准式营销、精细化客户管理，同时通过智能化优质服务，保障其用户体验，从而助力企业的业务增长。"></Ellipsis>
      </DemoBlock>

      <DemoBlock title="中间省略">
        <Ellipsis
          direction="middle"
          content="网易云商是网易智企旗下的商业增长服务平台，以智能为核心，打通企业营销全链路，帮助企业在洞察市场和用户的基础上，实现精准式营销、精细化客户管理，同时通过智能化优质服务，保障其用户体验，从而助力企业的业务增长。"
        ></Ellipsis>
      </DemoBlock>

      <DemoBlock title="开头省略">
        <Ellipsis
          direction="start"
          content="网易云商是网易智企旗下的商业增长服务平台，以智能为核心，打通企业营销全链路，帮助企业在洞察市场和用户的基础上，实现精准式营销、精细化客户管理，同时通过智能化优质服务，保障其用户体验，从而助力企业的业务增长。"
        ></Ellipsis>
      </DemoBlock>

      <DemoBlock title="指定行数">
        <Ellipsis
          direction="end"
          rows={2}
          content="网易云商是网易智企旗下的商业增长服务平台，以智能为核心，打通企业营销全链路，帮助企业在洞察市场和用户的基础上，实现精准式营销、精细化客户管理，同时通过智能化优质服务，保障其用户体验，从而助力企业的业务增长。"
        ></Ellipsis>
      </DemoBlock>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

```less
```

:::

## API

| 属性         | 说明         | 类型            | 默认值 |
| ------------ | ------------ | --------------- | ------ |
| content      | 文本内容     | string          | -      |
| direction    | 省略位置     | start \| middle | end    | `start` |
| rows         | 展示行数     | number          | `1`    |
| expandText   | 展开按钮文案 | string          | `展开` |
| collapseText | 收起按钮文案 | string          | `收齐` |
