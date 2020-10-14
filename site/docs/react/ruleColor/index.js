import React from 'react'
import copy from 'copy-to-clipboard'
import { message } from 'ppfish'
import './style.less'

export default class RuleColor extends React.Component {
  handleClick = (copyText) => {
    copy(copyText)
    const lang = window.$lang
    const tip = lang === 'zh-CN' ? '已复制' : 'copied'
    message.success(`${tip}:` + copyText)
  };

  render () {
    return (
      <div id="color">
        <h1 className="global-title md-heading">Color 色彩</h1>
        <h3 id="main-color-title" className="md-heading">主色</h3>
        <p className="desc md-paragraph">FishDesign 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
        <div className="main-color-container">
          <div className="main-color-item" onClick={() => {
            this.handleClick('#337EFF')
          }}>
            FishBlue
            <div className="value">#337EFF</div>
          </div>
        </div>
        <h3 id="aux-color-title" className="md-heading">辅助色</h3>
        <p className="desc md-paragraph">除了主色外的场景色，需要在不同的场景中使用（例如警告色表示警告的操作）。</p>
        <div className="aux-color-container">
          <div className="aux-color-item" onClick={() => {
            this.handleClick('#F24957')
          }}>
            FishRed
            <div className="value">#F24957</div>
          </div>
          <div className="aux-color-item" onClick={() => {
            this.handleClick('#26BD71')
          }}>
            FishGreen
            <div className="value">#26BD71</div>
          </div>
          <div className="aux-color-item" onClick={() => {
            this.handleClick('#F2A60F')
          }}>
            FishOrange
            <div className="value">#F2A60F</div>
          </div>
          <div className="aux-color-item" onClick={() => {
            this.handleClick('#337EFF')
          }}>
            FishBlue
            <div className="value">#337EFF</div>
          </div>
        </div>

        <h3 id="ext-color-title" className="md-heading">扩展色</h3>
        <p className="desc md-paragraph"></p>
        <div className="ext-color-container">
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#F260B6')
          }}>
            FishPink
            <div className="value">#F260B6</div>
          </div>
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#8875FF')
          }}>
            FishPurple
            <div className="value">#8875FF</div>
          </div>
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#33BBFF')
          }}>
            FishSkyBlue
            <div className="value">#33BBFF</div>
          </div>
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#3DD9AF')
          }}>
            FishBlueGreen
            <div className="value">#3DD9AF</div>
          </div>
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#AACC00')
          }}>
            FishGrassGreen
            <div className="value">#AACC00</div>
          </div>
          <div className="ext-color-item" onClick={() => {
            this.handleClick('#FFE23D')
          }}>
            FishLightYellow
            <div className="value">#FFE23D</div>
          </div>
        </div>

        <h3 id="neu-color-title" className="md-heading">中性色</h3>
        <p className="desc md-paragraph">中性色用于文本、背景和边框颜色，用来表现层次结构。</p>
        <div className="neu-color-container">
          <div className="left">
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#222222')
            }}>
              SystemGray-1
              <div className="value">#222222</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#333333')
            }}>
              SystemGray-2
              <div className="value">#333333</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#666666')
            }}>
              SystemGray-3
              <div className="value">#666666</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#999999')
            }}>
              SystemGray-4
              <div className="value">#999999</div>
            </div>
          </div>
          <div className="right">
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#CCCCCC')
            }}>
              SystemGray-5
              <div className="value">#CCCCCC</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#E1E3E6')
            }}>
              SystemGray-6
              <div className="value">#E1E3E6</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#F2F3F5')
            }}>
              SystemGray-7
              <div className="value">#F2F3F5</div>
            </div>
            <div className="neu-color-item" onClick={() => {
              this.handleClick('#F7F8FA')
            }}>
              SystemGray-8
              <div className="value">#F7F8FA</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
