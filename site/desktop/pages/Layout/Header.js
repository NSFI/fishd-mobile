import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { Row, Col, Affix, Icon } from 'ppfish';
import gitIcon from '../../assets/img/github.png';
import packageJson from '../../../../package.json';
import { algolia } from '../../../config';
export default class Header extends Component {
  static loadSDK(callback) {
    // algolia：https://community.algolia.com/docsearch/documentation/docsearch-FAQ/customize-configuration-file/
    // algolia doc search配置文件：https://github.com/algolia/docsearch-configs/blob/master/configs/ppfish.json
    const e = document.createElement('script');
    e.type = 'text/javascript';
    e.async = false;
    e.src = '//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js';
    e.onload = callback;
    document.head.appendChild(e);
  }

  constructor(props) {
    super(props);
    this.i18n = window.$messages || {};
  }

  componentDidMount() {
    this.setMenuHighlight();
    this.initSearchBox();
    window.addEventListener('hashchange', this.setMenuHighlight, false);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.setMenuHighlight, false);
  }

  setMenuHighlight = () => {
    const current = location.hash;
    const HIGHLIGHT_CLS = 'active';
    const menuItems = document.querySelectorAll('.nav-item a');

    function setHighlight(menuItems, cls) {
      Array.from(menuItems).forEach(menuItem => {
        const key = menuItem.getAttribute('href') || '';
        const isComponentPage = key.indexOf('/components') > 1 && current.indexOf('/components') > -1;
        if ((key && current.indexOf(key) > -1) || isComponentPage) {
          menuItem.classList.add(cls);
        } else {
          menuItem.classList.remove(cls);
        }
      });
    }

    setHighlight(menuItems, HIGHLIGHT_CLS);
  };

  switchLang = () => {
    const currentLang = window.$lang;
    const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
    const urlArr = location.hash.split('/').slice(1);
    urlArr[0] = newLang;
    hashHistory.push(urlArr.join('/'));
    location.reload();
  };

  // 初始化algolia框
  initSearchBox = () => {
    Header.loadSDK(() => {
      window.docsearch(algolia);
    });
  };

  render() {
    const lang = window.$lang;

    const CommonHeader = (
      <header className="fish-header">
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4} className="header-title">
            <Link to={`${lang}/home`} rel="noopener noreferrer">
              <img src={'//ysf.nosdn.127.net/unanqvsjrxhnpwqrulcuumqxicpwsojh'} alt="fish-design" />
            </Link>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20} className="header-navbar">
            <div id="search-box" className="search-box">
              <Icon type="search-line" style={{ color: '#337EFF', fontSize: 16, marginRight: 8 }} />
              <input type="text" placeholder={this.i18n.search} className="fishd-input" />
            </div>
            <ul className="nav">
              <li className="nav-item">
                <Link to={`${lang}/home`} rel="noopener noreferrer">
                  {this.i18n.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`${lang}/components/quickStart`}>{this.i18n.mobile}</Link>
              </li>
              <li className="nav-item">
                <a href="//nsfi.github.io/ppfish-components/#/home" target="_blank">
                  {this.i18n.web}
                </a>
              </li>
              <div style={{ display: 'none' }}>
                {lang === 'zh-CN' ? <a href="#/en-US/"></a> : <a href="#/zh-CN/"></a> }
              </div>
              <a className="nav-version">{packageJson.version}</a>
              <a className="u-github" href="//github.com/NSFI/fishd-mobile" target="_blank">
                <img style={{ width: 25, height: 25 }} src={gitIcon} alt="" />
              </a>
            </ul>
          </Col>
        </Row>
      </header>
    );

    return <Affix className="fixed-header-layout">{CommonHeader}</Affix>;
  }
}
