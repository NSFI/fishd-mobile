import React, { Component } from 'react'
import { config } from '../config'
import './Home.less'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.messages = window.$messages
  }

  handleClick = (key) => {
    const lang = window.$lang
    location.assign(`/#/${lang}/${key}`)
  }

  render () {
    // TODO:
    const lang = window.$lang
    const nameKey = lang === 'zh-CN' ? 'name' : 'nameEn'
    const { nav } = config
    const menuList = nav.map(menu => {
      const subMenuList = menu.children.map(subMenu => {
        return (
          <div className="u-demo" key={subMenu[nameKey]} onClick={this.handleClick.bind(this, subMenu.key)}>{subMenu[nameKey]}</div>
        )
      })
      return (
        <div key={menu[nameKey]}>
          <h2 className="u-title">{menu[nameKey]}</h2>
          {subMenuList}
        </div>
      )
    })
    return (
      <div className="u-home">
        <div className="u-logo">
          <img src="//ysf.nosdn.127.net/unanqvsjrxhnpwqrulcuumqxicpwsojh"></img>
        </div>
        <p className="u-desc">{this.messages.introduce}</p>
        {menuList}
      </div>
    )
  }
}
