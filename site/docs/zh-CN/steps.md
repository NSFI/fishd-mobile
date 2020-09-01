# Steps 步骤条 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

组件描述

## 何时使用

场景描述

## 基础用法

:::demo

```js
state = {
  active: 0
}

hanldeClick = () => {
  this.setState((state) => {
    const newActive = state.active + 1;
    return {
      active: newActive > 3 ? 0 : newActive 
    }
  })
}

render() {
  const { active } = this.state;
  const { Step } = Steps;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">基础用法</div>
      <div className="demo-card">
        <Steps active={active}>
          <Step title="买家下单"></Step>
          <Step title="商家接单"></Step>
          <Step title="买家提货"></Step>
          <Step title="交易完成"></Step>
        </Steps>
        <Button size="small" style={{marginTop: 10, width: 100}} onClick={this.hanldeClick}>下一步</Button>
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

## 自定义颜色

:::demo

```js
state = {
  active: 0
}

hanldeClick = () => {
  this.setState((state) => {
    const newActive = state.active + 1;
    return {
      active: newActive > 3 ? 0 : newActive 
    }
  })
}

render() {
  const { active } = this.state;
  const { Step } = Steps;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">自定义颜色</div>
      <div className="demo-card">
        <Steps active={active} activeColor="blue">
          <Step title="买家下单"></Step>
          <Step title="商家接单"></Step>
          <Step title="买家提货"></Step>
          <Step title="交易完成"></Step>
        </Steps>
        <Button size="small" style={{marginTop: 10, width: 100}} onClick={this.hanldeClick}>下一步</Button>
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

## 自定义图标

:::demo

```js
state = {
  active: 0
}

hanldeClick = () => {
  this.setState((state) => {
    const newActive = state.active + 1;
    return {
      active: newActive > 3 ? 0 : newActive 
    }
  })
}

render() {
  const { active } = this.state;
  const { Step } = Steps;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">自定义图标</div>
      <div className="demo-card">
        <Steps 
          active={active}
          activeColor='blue'
          activeIcon={<Icon type="fm-start" color='blue' style={{ width: '14px', height: '14px' }}></Icon>}
          inactiveIcon={<Icon type="fm-moreinfo-copy" color='#ccc' style={{ width: '14px', height: '14px' }}></Icon>}
        >
          <Step title="买家下单"></Step>
          <Step title="商家接单"></Step>
          <Step title="买家提货"></Step>
          <Step title="交易完成"></Step>
        </Steps>
        <Button size="small" style={{marginTop: 10, width: 100}} onClick={this.hanldeClick}>下一步</Button>
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

## 竖向步骤条

:::demo

```js
state = {
  active: 0
}

hanldeClick = () => {
  this.setState((state) => {
    const newActive = state.active + 1;
    return {
      active: newActive > 3 ? 0 : newActive 
    }
  })
}

render() {
  const { active } = this.state;
  const { Step } = Steps;
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">竖向步骤条</div>
      <div className="demo-card">
        <Steps active={active} direction="vertical">
          <Step title="买家下单" description="2020-09-01 12:40"></Step>
          <Step title="商家接单" description="2020-09-01 13:40"></Step>
          <Step title="买家提货" description="2020-09-01 15:20"></Step>
          <Step title="交易完成" description="2020-09-01 16:50"></Step>
        </Steps>
        <Button size="small" style={{marginTop: 10, width: 100}} onClick={this.hanldeClick}>下一步</Button>
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

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| title | 标题 | string | - |


