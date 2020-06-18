# NoticeBar 通告栏 【交互：刘莹莹 | 视觉：徐剑杰 |开发：于雯】

Component to display a system message, event notice and etc. Which is under the navigation bar.

## 何时使用
- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## 基础用法

:::demo
```js

render() {
  return (
    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
  );
}
```

:::

## API

|Properties | Descrition | Type | Default|
|-----------|------------|------|--------|
| mode    | Type of NoticeBar, options: `closable` `link`   | String |  ''  |
| icon    | Set the icon at the start position  |  ReactNode | `<Icon type={require('./trips.svg')} size="xxs" />`|
| onClick | A callback function, can be executed when you close the notice or click on the operating area   | (): void |   |
| marqueeProps | marquee params | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| action | text which is used to replace icon | ReactElement | |