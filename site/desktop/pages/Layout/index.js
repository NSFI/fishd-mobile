import React, { Component } from 'react'
import Header from './Header'

export default class Layout extends Component {
  render () {
    return (
      <div className="app">
        <Header></Header>
        <div className="main">{this.props.children}</div>
      </div>
    )
  }
}
