# Color 色彩 【交互：刘莹莹 |视觉：徐剑杰 |开发：韩高钶】

:::demo

```js
render() {
  const { Row, Col } = Layout
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">主色 Main Color</div>
      <div className="demo-card">
        <Row>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#337EFF'}}></div>
              <p className="color__name">FishBlue</p>
              <div className="color__value">#337EFF</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
```

```less
.components-tpl-demo-basic {
  margin-bottom: 12px;
  .color {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__preview {
      width: 60px;
      height: 60px;
      border-radius: 16px;
    }
    &__name {
      margin-top: 8px;
      font-size: 12px;
      color: #333;
    }
    &__value {
      margin-top: 2px;
      font-size: 10px;
      color: #666;
    }
  }
}
```
:::


:::demo

```js
render() {
  const { Row, Col } = Layout
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">辅助色 Auxiliary Color</div>
      <div className="demo-card">
        <Row>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#F24957'}}></div>
              <p className="color__name">FishRed</p>
              <div className="color__value">#F24957</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#26BD71'}}></div>
              <p className="color__name">FishGreen</p>
              <div className="color__value">#26BD71</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: ' #F2A60F'}}></div>
              <p className="color__name">FishOrange</p>
              <div className="color__value"> #F2A60F</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
```

```less
.components-tpl-demo-basic {
  margin-bottom: 12px;
  .color {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__preview {
      width: 60px;
      height: 60px;
      border-radius: 16px;
    }
    &__name {
      margin-top: 8px;
      font-size: 12px;
      color: #333;
    }
    &__value {
      margin-top: 2px;
      font-size: 10px;
      color: #666;
    }
  }
}
```
:::

:::demo

```js
render() {
  const { Row, Col } = Layout
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">拓展色 Extended Color</div>
      <div className="demo-card">
        <Row style={{ marginBottom: '16px' }}>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#F260B6'}}></div>
              <p className="color__name">FishPink</p>
              <div className="color__value">#F260B6</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#8875FF'}}></div>
              <p className="color__name">FishPurple</p>
              <div className="color__value">#8875FF</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: ' #33BBFF'}}></div>
              <p className="color__name">FishSkyBlue</p>
              <div className="color__value"> #33BBFF</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#3DD9AF'}}></div>
              <p className="color__name">FishBlueGreen</p>
              <div className="color__value">#3DD9AF</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#AACC00'}}></div>
              <p className="color__name">FishGrassGreen</p>
              <div className="color__value">#AACC00</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: ' #FFE23D'}}></div>
              <p className="color__name">FishLightYellow</p>
              <div className="color__value"> #FFE23D</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
```

```less
.components-tpl-demo-basic {
  margin-bottom: 12px;
  .color {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__preview {
      width: 60px;
      height: 60px;
      border-radius: 16px;
    }
    &__name {
      margin-top: 8px;
      font-size: 12px;
      color: #333;
    }
    &__value {
      margin-top: 2px;
      font-size: 10px;
      color: #666;
    }
  }
}
```
:::

:::demo

```js
render() {
  const { Row, Col } = Layout
  return (
    <div className="components-tpl-demo-basic">
      <div className="demo-title">中性色 Neutral Color</div>
      <div className="demo-card">
        <Row style={{ marginBottom: '16px' }}>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#222222'}}></div>
              <p className="color__name">SystemGray-1</p>
              <div className="color__value">#222222</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#333333'}}></div>
              <p className="color__name">SystemGray-2</p>
              <div className="color__value">#333333</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: ' #666666'}}></div>
              <p className="color__name">SystemGray-3</p>
              <div className="color__value"> #666666</div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '16px' }}>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#999999'}}></div>
              <p className="color__name">SystemGray-4</p>
              <div className="color__value">#999999</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#F7F8FA'}}></div>
              <p className="color__name">SystemGray-5</p>
              <div className="color__value">#CCCCCC</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: ' #E1E3E6'}}></div>
              <p className="color__name">SystemGray-6</p>
              <div className="color__value"> #E1E3E6</div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '16px' }}>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#F2F3F5'}}></div>
              <p className="color__name">SystemGray-7</p>
              <div className="color__value">#F2F3F5</div>
            </div>
          </Col>
          <Col span="8">
            <div className="color">
              <div className="color__preview" style={{background: '#F7F8FA'}}></div>
              <p className="color__name">SystemGray-8</p>
              <div className="color__value">#F7F8FA</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
```

```less
.components-tpl-demo-basic {
  margin-bottom: 12px;
  .color {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__preview {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      border: 1px solid #E1E3E6;
    }
    &__name {
      margin-top: 8px;
      font-size: 12px;
      color: #333;
    }
    &__value {
      margin-top: 2px;
      font-size: 10px;
      color: #666;
    }
  }
}
```
:::