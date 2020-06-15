# Carousel 走马灯 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

走马灯，轮播图

## 何时使用

展示活动广告图、配合Tabs进行滑动切换等场景

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
        <div className='sub-title'>带间距</div>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.6}
          autoplay
          // infinite
          // beforeChange={(from, to) => this.setState({ slideIndex: to })}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <div
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                // top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                transform: `scale(${this.state.slideIndex === index ? 1.2 : 1})`,
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
[class^="components-carousel-demo-"] .fm-button {
  margin-right: 8px;
  margin-bottom: 12px;
}
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
| size | 设置按钮大小 | Enum {'small', 'large', 'default'}              | 'default' |
