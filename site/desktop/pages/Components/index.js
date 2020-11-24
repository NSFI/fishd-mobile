import React from 'react'
import PropTypes from 'prop-types'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import copy from 'copy-to-clipboard'
import { Divider, BackTop, Icon, Row, Col, Menu, Drawer, Affix, message } from 'ppfish'
import { components, plainComponents, config } from '../../config'
import './index.less'

const isShowAllComponents = false

export default class Components extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    params: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.plainComponentList = plainComponents.filter(component => isShowAllComponents || component.published)
    let isMobile = false
    enquireScreen((b) => {
      isMobile = b
    }, 'only screen and (max-width: 992px)')

    this.state = {
      page: '',
      isMobile: isMobile,
      demoUrl: config.genDemoUrl(window.$lang, props.params.demo || '')
    }
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.setActiveKey, false)
    this.setActiveKey()
    this.screentRegister = this.enquireScreenRegister()
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.setActiveKey, false)
    this.unenquireScreenRegister()
  }

  // 监听屏幕宽度
  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 992px)'
    return enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile
      })
    }, mediaCondition)
  };

  // 取消监听
  unenquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 992px)'
    unenquireScreen(this.screentRegister, mediaCondition)
  };

  getActiveKeyFromParams = () => {
    return this.props.params.demo || this.plainComponentList[0].key
  };

  setActiveKey = () => {
    this.setState({ page: this.getActiveKeyFromParams() })
  };

  handleCopyUrl = (url) => {
    copy(url)
    const lang = window.$lang
    const tip = lang === 'zh-CN' ? '已复制' : 'copied'
    message.success(`${tip}:` + url)
  }

  handleBack = () => {
    window.history.back()
  }

  handleNext = () => {
    window.history.forward()
  }

  render () {
    const lang = window.$lang
    const nameKey = window.$lang === 'zh-CN' ? 'name' : 'nameEn'
    const SubMenu = Menu.SubMenu
    const componentIndex = this.plainComponentList.findIndex((menuItem) => menuItem.key === this.state.page)
    const prevLink = this.plainComponentList[componentIndex - 1]
    const nextLink = this.plainComponentList[componentIndex + 1]
    const { isMobile, demoUrl } = this.state
    // TODO: 如果动态改变iframe url会导致影响父页面的浏览器历史栈，导致前进后退异常
    const demoName = this.props.params.demo || ''
    const demoLink = config.genDemoUrl(window.$lang, demoName)
    // const demoUrl = config.genDemoUrl(lang, demoName)
    const menuChild = (
      <nav className="side-nav">
        <Menu
          selectedKeys={[this.state.page]}
          defaultOpenKeys={components.map(item => item.key)}
          mode="inline"
        >
          {
            components.map(item => {
              const typeList = item.children
              if (typeList && typeList.every(componentsList => componentsList.children)) {
                // 二级菜单 + 内嵌菜单
                const menuList = typeList.map(typeListItem => {
                  return {
                    title: typeListItem[nameKey],
                    children: typeListItem.children
                      .filter(components => isShowAllComponents || components.published)
                      .map(component => ({
                        key: component.key,
                        href: `#/${lang}/components/${component.key}`,
                        title: component[nameKey]
                      }))
                  }
                })
                return (
                  menuList.length &&
                  <SubMenu key={item.key}
                    title={<span className="misc-type">{item[nameKey]}</span>}>
                    {
                      menuList.map(subMenu => (
                        <Menu.ItemGroup key={subMenu.title} title={subMenu.title} disabled={false}>
                          {
                            subMenu.children.map(component => {
                              return (
                                <Menu.Item key={component.key}>
                                  <a href={component.href}>{component.title}</a>
                                </Menu.Item>
                              )
                            })
                          }
                        </Menu.ItemGroup>
                      ))
                    }
                  </SubMenu>
                )
              } else {
                // 二级菜单
                const menuList = typeList
                  .filter(components => isShowAllComponents || components.published)
                  .map(component => ({
                    key: component.key,
                    href: `#/${lang}/components/${component.key}`,
                    title: component[nameKey]
                  }))
                return (
                  menuList.length &&
                  <SubMenu key={item.key} title={<span className="misc-type">{item[nameKey]}</span>}>
                    {
                      menuList.map(component => {
                        return (
                          <Menu.Item key={component.key}>
                            <a href={component.href}>{component.title}</a>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              }
            })
          }
        </Menu>
      </nav>
    )
    return (
      <div className="doc">
        <Row className="component-container">
          {isMobile
            ? <Drawer
              key="Mobile-menu"
              wrapperClassName="m-mobile-menu"
              placement="left"
            >
              {menuChild}
            </Drawer>
            : <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4} className="component-list">
              <Affix className="affix-menu-left">{menuChild}</Affix>
            </Col>
          }
          <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20} className="component-content">
            <div className="content">
              <article className="markdown">
                <div className="u-fished">
                  <div className='u-fished__doc'>
                    {this.props.children}
                    <Divider/>
                    <Row className="u-navigation-btm">
                      <Col span={12} className="prev-page">
                        {
                          prevLink &&
                          <a href={`#/${lang}/components/${prevLink.key}`}>
                            <Icon type="left" className="prev-page-icon"/>{prevLink[nameKey]}
                          </a>
                        }
                      </Col>
                      <Col span={12} className="next-page">
                        {
                          nextLink &&
                          <a href={`#/${lang}/components/${nextLink.key}`}>
                            {nextLink[nameKey]}<Icon type="right" className="next-page-icon"/>
                          </a>
                        }
                      </Col>
                    </Row>
                  </div>
                  <div className="u-fished__simulator">
                    <div className="u-address" onClick={this.handleCopyUrl.bind(this, demoLink)}></div>
                    <div className="u-back" onClick={this.handleBack}></div>
                    <div className="u-next" onClick={this.handleNext}></div>
                    <iframe
                      className="u-iframe"
                      sandbox="allow-scripts allow-top-navigation allow-same-origin allow-forms"
                      frameBorder="0"
                      src={demoUrl}></iframe>
                  </div>
                </div>
              </article>
              <BackTop/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
