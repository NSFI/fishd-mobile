import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/comment/comment'

export default class Editor extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
  };

  constructor (props) {
    super(props)
    this.init = true
  }

  componentDidMount () {
    const { onChange, value } = this.props

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'react',
      keyMap: 'sublime',
      viewportMargin: Infinity,
      lineNumbers: false,
      dragDrop: false
      // readOnly: 'nocursor'
    })

    setTimeout(() => {
      this.cm.setValue(value)
    }, 0)

    this.cm.on('changes', cm => {
      if (onChange) {
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
          if (this.init) {
            this.init = false
          } else {
            onChange(cm.getValue())
          }
        }, 300)
      }
    })
  }

  render () {
    return <div className="editor" ref={ref => (this.editor = ref)}/>
  }
}
