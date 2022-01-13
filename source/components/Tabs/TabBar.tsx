import classNames from 'classnames';
import * as React from 'react';
import { TabsPropsType } from './PropsType';

export interface TabsProps extends TabsPropsType {
  prefixCls?: string;
  activeTabIndex?: number;
  changeTab?: (index: number, scroll?: boolean) => void;
  getScrollDistance?: (index: number) => number;
  rowCount?: number;
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
    activeTabIndex: 0,
  } as TabsProps;

  timer: object | null = null;

  navScroller: HTMLDivElement | null;

  componentDidMount(): void {
    this.navScroller![this.props.tabDirection === 'horizontal' ? 'scrollLeft' : 'scrollTop'] = this.getScrollDistance!(
      this.props.activeTabIndex || 0,
    );
  }

  componentDidUpdate(prevProps: Readonly<TabsProps>): void {
    if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this.handleScroll(this.props.activeTabIndex!);
    }
  }

  changeTab = (index: number) => {
    this.props.changeTab!(index, true);
  };

  // tabs-nav的移动距离
  getScrollDistance = (index: number) => {
    const { tabDirection, tabs, rowCount } = this.props;
    const activeTabDom = this.navScroller!.children[index];
    const distancePx = window.getComputedStyle(activeTabDom)[tabDirection === 'horizontal' ? 'width' : 'height'];
    const distance = +distancePx.slice(0, distancePx.length - 2) * (index - Math.floor(rowCount! / 2));
    const minDistance = 0;
    const maxDistance = (tabs.length - rowCount!) * +distancePx.slice(0, distancePx.length - 2);
    if (distance < minDistance) {
      return minDistance;
    }
    if (distance > maxDistance) {
      return maxDistance;
    }
    return distance;
  };

  // tabs-nav 移动
  handleScroll = (index: number) => {
    const scroller = this.navScroller;
    if (scroller) {
      const scrollKey = this.props.tabDirection === 'horizontal' ? 'scrollLeft' : 'scrollTop';
      const oldScrollDistance = scroller[scrollKey];
      const newScrollDistance = this.getScrollDistance(index);
      if (Math.abs(newScrollDistance - oldScrollDistance) < 1) {
        return;
      }
      if (this.timer) {
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
      activeTabIndex,
      rowCount,
    } = this.props;

    const tabPer = 100 / rowCount!;
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
    const defaultUnderLineStyle =
      tabDirection === 'horizontal'
        ? {
            left: `calc(${tabPer * (activeTabIndex! + 0.5)}% - 20px)`,
            width: '40px',
          }
        : {
            top: `calc(${tabPer * (activeTabIndex! + 0.5)}% - 10px)`,
            height: '20px',
          };

    return (
      <>
        <div
          className={`${prefixCls}-${tabDirection}-nav`}
          ref={ref => {
            this.navScroller = ref;
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={`${tab.title}-${index}`}
              className={classNames(`${prefixCls}-${tabDirection}-tab`, {
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
            className={classNames(`${prefixCls}-${tabDirection}-active-bar`, {
              [`${prefixCls}-${tabDirection}-active-bar-animated`]: animated,
            })}
            style={{ ...(tabsUnderlineStyle || {}), ...defaultUnderLineStyle }}
          />
        </div>
        <div className={`${prefixCls}-${tabDirection}-line`} />
      </>
    );
  }
}

export default TabBar;
