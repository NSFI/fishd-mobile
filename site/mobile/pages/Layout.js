import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div className="u-layout">
        {this.props.children}
      </div>
    )
  }
}
