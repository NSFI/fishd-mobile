import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Affix, Dropdown, Menu } from 'ppfish'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.i18n = window.$messages
  }

  componentDidMount () {
    this.setMenuHighlight()
    window.addEventListener('hashchange', this.setMenuHighlight, false)
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.setMenuHighlight, false)
  }

  setMenuHighlight = () => {
    const current = location.hash
    const HIGHLIGHT_CLS = 'active'
    const menuItems = document.querySelectorAll('.nav-item a')

    function setHighlight (menuItems, cls) {
      Array.from(menuItems).forEach(menuItem => {
        const key = menuItem.getAttribute('href')
        if (key && current.indexOf(key) > -1) {
          menuItem.classList.add(cls)
        } else {
          menuItem.classList.remove(cls)
        }
      })
    }

    setHighlight(menuItems, HIGHLIGHT_CLS)
  };

  switchLang = () => {
    const currentLang = window.$lang
    const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN'
    const urlArr = location.hash.split('/')
    urlArr[1] = newLang
    location.replace('/' + urlArr.join('/'))
    location.reload()
  }

  render () {
    // TODO:
    const lang = window.$lang

    const CommonHeader = (
      <header className="fish-header">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            xl={5}
            xxl={4}
            className="header-title"
          >
            <Link to={`${lang}/home`} rel="noopener noreferrer">
              <img
                src={'//ysf.nosdn.127.net/unanqvsjrxhnpwqrulcuumqxicpwsojh'}
                alt="fish-design"
              />
            </Link>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={18}
            xl={19}
            xxl={20}
            className="header-navbar"
          >
            <div id="search-box" className="search-box">
              <input
                type="text"
                placeholder={this.i18n.search}
                className="fishd-input"
              />
            </div>
            <ul className="nav">
              <li className="nav-item">
                <Link to={`${lang}/home`} rel="noopener noreferrer">
                  {this.i18n.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`${lang}/components`}>
                  {this.i18n.component}
                </Link>
              </li>
              <li className="nav-item">
                <a href="//nsfi.github.io/ppfish-demo" target="_blank">
                  {this.i18n.demo}
                </a>
              </li>
              <div className="nav-item" style={{ color: '#000' }}>
                <div className="fishd-dropdown-link" onClick={this.switchLang}>
                  { lang === 'zh-CN' ? 'En' : '中文'}
                </div>
              </div>
              <span className="nav-version">1.0.0</span>
            </ul>
          </Col>
        </Row>
      </header>
    )

    return <Affix className="fixed-header-layout">{CommonHeader}</Affix>
  }
}
