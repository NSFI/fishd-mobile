import React from 'react'
import PropTypes from 'prop-types'
import Editor from '@/components/Editor'
import prism from 'prismjs'
import 'prismjs/components/prism-less'

// 代码展示容器
export default class CodeCanvas extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    name: PropTypes.string,
    containerId: PropTypes.string,
    index: PropTypes.number
  };

  static defaultProps = {
    locale: {
      hide: '隐藏代码',
      show: '显示代码'
    }
  };

  constructor (props) {
    super(props)

    this.state = {
      showBlock: true
    }
  }

  blockControl () {
    this.setState({
      showBlock: !this.state.showBlock
    }, () => {
      if (this.state.showBlock && (this.lessCodeSource || this.cssCodeSource)) {
        prism.highlightAllUnder(document.getElementById(`${this.props.containerId}`))
      }
    })
  }

  renderSource (code) {
    window.reloadDemo && window.reloadDemo({
      index: this.props.index,
      code: code,
      hash: location.hash
    })
  }

  render () {
    const { name, description, jsCode, cssCodeSource, cssCode, lessCodeSource, lessCode } = this.props
    return (
      <div className={`demo-block demo-box demo-${name}`}>
        {
          <div className="meta">
            {
              description && (
                <div
                  ref="description"
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )
            }
            { this.state.showBlock && <div>
              <Editor
                value={jsCode}
                onChange={code => this.renderSource(code)}
              />
              {lessCodeSource && (
                <div className="style-block" dangerouslySetInnerHTML={{ __html: lessCodeSource }}/>)}
              {cssCodeSource && (
                <div className="style-block" dangerouslySetInnerHTML={{ __html: cssCodeSource }}/>)}</div> }
          </div>

        }
        <div className="demo-block-control" onClick={this.blockControl.bind(this)}>
          {
            this.state.showBlock ? (
              <span>{this.props.locale.hide}</span>
            ) : (
              <span>{this.props.locale.show}</span>
            )
          }
        </div>
        {lessCode && (<style>{lessCode}</style>)}
        {cssCode && (<style>{cssCode}</style>)}
      </div>
    )
  }
}
