# Carousel 走马灯 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

## 何时使用
在有限空间内，循环播放同一类型的图片内容

## 基本用法
:::demo

```js
state = {
  data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  imgHeight: 176,
  slideIndex: 0,
}

render(){
  const { keyboard } = this.state
 return(
  <div className="components-carousel-demo-basic">
    <div className='sub-title'>基础用法</div>
    <Carousel
      autoplay={false}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {this.state.data.map(val => (
        <div
          key={val}
          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </div>
      ))}
    </Carousel>
  </div>
  )
}
```

```less
[class^="components-carousel-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
```

:::

## 异形样式

:::demo

```js
state = {
  data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  imgHeight: 176,
  slideIndex: 0,
}

render(){
  const { keyboard } = this.state
 return(
    <div className="components-carousel-demo-basic">
      <div className='sub-title'>异形走马灯</div>
      <Carousel className="space-carousel"
        frameOverflow="visible"
        slideWidth={0.8}
        autoplay
        infinite
        afterChange={index => this.setState({ slideIndex: index })}
      >
        {this.state.data.map((val, index) => (
          <div
            key={val}
            style={{
              display: 'block',
              position: 'relative',
              height: this.state.imgHeight,
              transition: 'all 0.3s ease',
              transform: `scale(${this.state.slideIndex === index ? 1 : 0.85})`,
              zIndex: `${this.state.slideIndex === index ? 100 : 1}`
            }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
```

```less
[class^="components-carousel-demo-"] .sub-title {
  padding: 20px 0 10px 0;
  color: #ccc;
  font-size: 12px;
}
```

:::

## API

| 属性 | 说明         | 类型                                            | 默认值    |
| ---- | ------------ | ----------------------------------------------- | --------- |
| selectedIndex | 手动设置当前显示的索引 | number | `0` |
| dots | 是否显示面板指示点 | boolean | `true` |
| vertical | 垂直显示 | boolean | `false` |
| autoplay | 是否自动切换 | boolean | `false` |
| autoplayInterval | 自动切换的时间间隔 | number | `3000` |
| infinite | 是否循环播放 | boolean | `false` |
| dotStyle | 指示点样式 | object | - |
| dotActiveStyle | 当前激活的指示点样式 | object | - |
| frameOverflow | 设置 slider frame 的 overflow 样式 | string | `hidden` |
| cellSpacing | 项目之间的间距，以px为单位 | number | - |
| slideWidth | 手动设置项目宽度. 可以是slideWidth="20px"，也可以是相对容器的百分比slideWidth={0.8} | string \| number | - |
| easing | 缓动函数，你可以使用这里提供的其他函数 | Function | `easeOutCirc` |
| swipeSpeed | 滑动灵敏度 | number | `12` |

## Event
| 事件名 | 说明         | 回调参数                                            |
| ---- | ------------ | ----------------------------------------------- |
| afterChange | 切换面板后的回调函数 | current: number |
| beforeChange | 切换面板前的回调函数 | from: number, to: number |

