import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import collect from '@/lib/collect'
import prism from 'prismjs'
import NProgress from 'nprogress'
import CodeCanvas from '@/components/CodeCanvas'
import 'prismjs/components/prism-less'

class Doc extends Component {
  componentDidMount () {
    this.renderDemoCode()
  }

  componentDidUpdate () {
    this.renderDemoCode()
  }

  renderDemoCode () {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    })
    prism.highlightAll()
    const { demos } = this.props
    demos.forEach((demo, index) => {
      const component = React.createElement(CodeCanvas, Object.assign({
        name: this.constructor.name.toLowerCase(),
        containerId: demo.id,
        index
      }, demo, this.props), '')
      const div = document.getElementById(demo.id)

      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div)
      }
    })
  }

  render () {
    const { html } = this.props
    return (
      <div className="u-doc">
        <div dangerouslySetInnerHTML={{
          __html: html
        }}/>
      </div>
    )
  }
}

export default collect(Doc)
