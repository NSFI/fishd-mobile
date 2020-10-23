import React, { Component } from 'react';
import {Link} from 'react-router';
import lottie from 'lottie-web';
import { Button, Popover } from 'ppfish';
import { hashHistory } from 'react-router';
import './index.less';
import conciseData from '../../assets/lottie/concise.json';
import immediateData from '../../assets/lottie/immediate.json';
import elegentData from '../../assets/lottie/elegent.json';
import adaptabilityData from '../../assets/lottie/adaptability.json';

const locales = {
  misc: {
    'guide': '指南',
    'component': '组件',
    'patterns': '规范',
    'home': '首页',
    'spec': '设计语言',
    'development': '开发指南',
    'components': '组件',
    'general': '通用组件',
    'business': '业务组件',
    'feedback': '反馈建议',
    'demo': '演示环境',
    'version': 'v0.0.1'
  }
}

export default class Home extends Component {
  goStart = () => {
    const currentLang = window.$lang;
    hashHistory.push(`/${currentLang}/components/quickStart`);
  };

  getLocale = (key) => {
    const map = locales || {};
    return key.split('.').reduce((a, b) => {
      const parent = map[a];
      if (b) {
        return (parent || {})[b];
      }
      return parent;
    });
  };

  componentDidMount() {
    let lottieItems = [{
      id: 'lottie_concise',
      data: conciseData
    }, {
      id: 'lottie_immediate',
      data: immediateData
    }, {
      id: 'lottie_elegent',
      data: elegentData
    }, {
      id: 'lottie_adaptability',
      data: adaptabilityData
    }];

    lottieItems.forEach((item) => {
      let el = document.getElementById(item.id);
      const container = el.parentNode;
      if (!el) return;

      let animation = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: item.data
      });

      container.addEventListener('mouseenter', function() {
        animation.setDirection(1);
        animation.play();
      });

      container.addEventListener('mouseleave', function() {
        animation.setDirection(-1);
        animation.play();
      });
    });
  }

  render() {
    return (
      <div className="u-home">
        <div className="center-bg"></div>
        <div className="left-bg"></div>
        <div className="right-bg"></div>
        <div className="content-wrapper">
          <div className="banner">
            <img className="logo" src={require('../../assets/img/home/logo-color.png').default} alt=""/>
            <div className="right-desc">
              <div className="title">Fish Design </div>
              <div className="desc">企业级高质量 UI 组件库，帮助设计者与开发者快速构建系统。</div>
              <div className="button-group">
                <a href="https://nsfi.github.io/ppfish-components/#/home" target="_blank" className="button">
                Web 组件 | <img src={require('../../assets/img/home/github.svg').default}></img>
                </a>
                <Link to={`/zh-CN/components/quickStart`} className="button mobile">
                  Mobile 组件 |
                  <Popover  placement="bottom" content={
                    <img className="u-qrcode" src="https://nos.netease.com/ysf/9651582ccaba7d6296eed99eb4504c7e.png" />
                  }>
                    <img src={require('../../assets/img/home/qrcode.svg').default}></img>
                  </Popover>
                </Link>
              </div>
            </div>

          </div>
          <div className="design">
            <h2 className="title">设计原则</h2>
            <div className="design-list">
              <div className="principle">
                <div id="lottie_concise" className="lottie-item" />
                <h3>简洁｜Concise</h3>
                <i className="split-icon"/>
                <p>如无必要 勿增实体：慎重筛选客户当前需要信息内容</p>
              </div>
              <div className="principle">
                <div id="lottie_immediate" className="lottie-item" />
                <h3>直接｜Immediate</h3>
                <i className="split-icon"/>
                <p>提供用户操作后的直接反馈，保证用户的操作结果符合预期</p>
              </div>
              <div className="principle">
                <div id="lottie_elegent" className="lottie-item" />
                <h3>优雅｜Elegent</h3>
                <i className="split-icon"/>
                <p>设计方案追求优雅，給使用者有质感的操作感受</p>
              </div>
              <div className="principle">
                <div id="lottie_adaptability" className="lottie-item" />
                <h3>适应性｜Adaptability</h3>
                <i className="split-icon"/>
                <p>设计方案提供可扩展能力及适应性，适应不同模式的企业使用</p>
              </div>
            </div>
          </div>
          <div className="resource">
            <h2 className="title">资源中心</h2>
            <div className="resource-list">
              <div className="resource-item">
                <Link to="/components/contributing/">
                  <img src={'//ysf.nosdn.127.net/xjupeqkvqvzvofkzalfzyfhpqmjvofrw'} alt="贡献指南"/>
                  贡献指南
                </Link>
              </div>
              <div className="resource-item">
                <Link to="/zh-CN/components/update">
                  <img src={'//ysf.nosdn.127.net/zespbluoxdooiuwbodfuzzniuikphxzu'} alt="更新日志"/>
                  更新日志
                </Link>
              </div>
              <div className="resource-item">
                <Link to="/zh-CN/components/quickStart">
                  <img src={'//ysf.nosdn.127.net/cwknzqyaxbjnbwsldapbridnbtwqzcho'} alt="组件库"/>
                  组件库
                </Link>
              </div>
              <div className="resource-item">
                <a href="//axure.yixin.im/view?id=11388&pid=4&mid=434#fishdesign___" target="_blank">
                  <img src={'//ysf.nosdn.127.net/pdkitmnnpikavbkzscsxsgoilftykxza'} alt="资源下载"/>
                  资源下载
                </a>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="logo">
              <img src={'//ysf.nosdn.127.net/cipiqsfpsbyreuwspfkybadithmnnlmc'} alt="logo"/>
              <h3>Fish Design</h3>
              <p className="version">- {this.getLocale('misc.version')} -</p>
            </div>
            <div className="link-list">
              <Link to="/home" className="link-item">首页</Link>
              <a href="//nsfi.github.io/ppfish-components/#/components" className="link-item">Web 组件</a>
              <Link to="/zh-CN/components/quickStart" className="link-item">Mobile 组件</Link>
              <a href="//nsfi.github.io/ppfish-demo" target="_blank" className="link-item">{this.getLocale('misc.demo')}</a>
              <a href="//github.com/NSFI/fishd-mobile/issues" target="_blank" className="link-item">问题反馈</a>
            </div>
            <div className="github">
              <a href="//github.com/NSFI/fishd-mobile" target="_blank">
                <img src={require('../../assets/img/home/logo.svg').default} alt="github"/>
                <span>GitHub</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
