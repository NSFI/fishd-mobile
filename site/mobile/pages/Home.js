import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { config } from '../config';
import './Home.less';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.messages = window.$messages;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, window.st || 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const st = document.documentElement.scrollTop || document.body.scrollTop;
    window.st = st;
  };

  handleClick = (key) => {
    const lang = window.$lang;
    hashHistory.push(`/${lang}/${key}`);
  };

  render() {
    const lang = window.$lang;
    const nameKey = lang === 'zh-CN' ? 'name' : 'nameEn';
    const { nav } = config;
    const menuList = nav.map((menu) => {
      const subMenuList = menu.children.filter((item) => item.published).map((subMenu) => {
        return (
          <div className='u-home__demo' key={subMenu[nameKey]} onClick={this.handleClick.bind(this, subMenu.key)}>
            <span>{subMenu[nameKey]}</span>
            <span className='iconfont iconarrowright' />
          </div>
        );
      });
      return (
        <div key={menu[nameKey]}>
          <h2 className='u-home__title'>{menu[nameKey]}</h2>
          {subMenuList}
        </div>
      );
    });
    return (
      <div className='u-home'>
        <div className='u-logo'>
          <img src='https://hgkcdn.oss-cn-shanghai.aliyuncs.com/test/unanqvsjrxhnpwqrulcuumqxicpwsojh.png' />
        </div>
        <p className='u-desc'>{this.messages.introduce}</p>
        {menuList}
      </div>
    );
  }
}
