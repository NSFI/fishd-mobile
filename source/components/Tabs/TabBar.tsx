import classnames from 'classnames';
import * as React from 'react';
import { TabsPropsType } from './PropsType';
import { Models } from './Models';

export interface TabsProps extends TabsPropsType {
  prefixCls?: string;
}

class TabBar extends React.Component<TabsProps, any> {
  static defaultProps = {
    prefixCls: 'fm-tabs',
    tabDirection: 'horizontal',
    tabs: [],
    useOnPan: false,
    swipeable: true,
    animated: true,
    tabBarPosition: 'top',
    tabsUnderlineStyle: {},
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
  } as TabsProps;

  timer: object | null = null;

  constructor(props: TabsProps) {
    super(props);
    const getIndex = () => {
      if (props.initialPage) {
        if (typeof props.initialPage === 'number' && props.initialPage < props.tabs.length) {
          return props.initialPage;
        }
        if (typeof props.initialPage === 'string') {
          const activeTabIndex = props.tabs.findIndex((tab: Models.TabData) => tab.key === props.initialPage);
          return activeTabIndex || 0;
        }
      }
      return 0;
    };
    const getCount = () => {
      if (props.count && props.count < props.tabs.length) {
        return props.count;
      }
      if (props.tabs.length > 3) {
        return 3;
      }
      return props.tabs.length;
    };
    this.state = {
      activeTabIndex: getIndex(),
      count: getCount(),
    };
  }

  componentDidMount(): void {
    document.getElementById('tabs-nav')![
      this.props.tabDirection === 'horizontal' ? 'scrollLeft' : 'scrollTop'
    ] = this.getScrollDistance(this.state.activeTabIndex);
  }

  changeTab = (index: number) => {
    this.setState({
      activeTabIndex: index,
    });
    if (this.props.useOnPan) {
      // 跟手滚动
      this.handleScroll(index);
    }
  };

  getScrollDistance = (index: number) => {
    const { prefixCls, tabDirection, tabs } = this.props;
    const { count } = this.state;
    const activeTabDom = document.getElementsByClassName(`${prefixCls}-${tabDirection}-tab`)[index];
    const distancePx = window.getComputedStyle(activeTabDom)[tabDirection === 'horizontal' ? 'width' : 'height'];
    const distance = +distancePx.slice(0, distancePx.length - 2) * (index - Math.floor(count / 2));
    const minDistance = 0;
    const maxDistance = (tabs.length - count) * +distancePx.slice(0, distancePx.length - 2);
    if (distance < minDistance) {
      return minDistance;
    }
    if (distance > maxDistance) {
      return maxDistance;
    }
    return distance;
  };

  handleScroll = (index: number) => {
    const scroller = document.getElementById('tabs-nav');
    if (scroller) {
      const scrollKey = this.props.tabDirection === 'horizontal' ? 'scrollLeft' : 'scrollTop';
      const oldScrollDistance = scroller[scrollKey];
      const newScrollDistance = this.getScrollDistance(index);
      if (Math.abs(newScrollDistance - oldScrollDistance) < 1) {
        return;
      }
      let count = 16; // 移动16下
      const step = (newScrollDistance - oldScrollDistance) / count;
      const timeStep = 200 / count;
      const animate = () => {
        scroller[scrollKey] += step;
        count -= 1;
        if (count > 0) {
          this.timer = setTimeout(animate, timeStep);
        } else {
          scroller[scrollKey] = newScrollDistance;
          this.timer = null;
        }
      };
      animate();
    }
  };

  render() {
    const {
      prefixCls,
      tabs,
      tabDirection,
      animated,
      tabsUnderlineStyle,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
    } = this.props;
    const { activeTabIndex, count } = this.state;

    const tabPer = 100 / count;
    const getTextColor = (index: number) => {
      if (index === activeTabIndex) {
        if (tabBarActiveTextColor) {
          return tabBarActiveTextColor;
        }
        return undefined;
      }
      if (tabBarInactiveTextColor) {
        return tabBarInactiveTextColor;
      }
      return undefined;
    };
    const defaultUnderLineStyle = {
      [tabDirection === 'horizontal' ? 'left' : 'top']: `${tabPer * activeTabIndex}%`,
      [tabDirection === 'horizontal' ? 'width' : 'height']: `${tabPer}%`,
    };

    return (
      <div className={`${prefixCls}-${tabDirection}-nav`} id={'tabs-nav'}>
        {tabs.map((tab, index) => (
          <div
            key={`${tab.title}-${index}`}
            className={classnames(`${prefixCls}-${tabDirection}-tab`, {
              [`${prefixCls}-${tabDirection}-tab-active`]: index === activeTabIndex,
            })}
            onClick={() => {
              this.changeTab(index);
            }}
            style={{ [tabDirection === 'horizontal' ? 'width' : 'height']: `${tabPer}%`, color: getTextColor(index) }}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={classnames(`${prefixCls}-${tabDirection}-active-bar`, {
            [`${prefixCls}-${tabDirection}-active-bar-animated`]: animated,
          })}
          style={{ ...(tabsUnderlineStyle || {}), ...defaultUnderLineStyle }}
        />
      </div>
    );
  }
}

export default TabBar;
