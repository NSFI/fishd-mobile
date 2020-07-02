import classnames from 'classnames';
import * as React from 'react';
import { TabsPropsType } from './PropsType';
import TabBar from './TabBar';
import { Models } from './Models';

export interface TabsProps extends TabsPropsType {
  prefixCls?: string;
  style?: object;
}

// 动画
const transform = (scroller: HTMLDivElement, translate: number, tabDirection?: string) => {
  scroller.style.transform =
    tabDirection === 'vertical' ? `translate3d(0, ${translate}px, 0)` : `translate3d(${translate}px, 0, 0)`;
};

class Tabs extends React.Component<TabsProps, any> {
  static defaultProps = {
    prefixCls: 'fm-tabs',
    tabDirection: 'horizontal',
    useOnPan: false,
    swipeable: true,
    animated: true,
    tabBarPosition: 'top',
    tabsUnderlineStyle: {},
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    count: 4,
  };

  contentScroller: HTMLDivElement;

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
    const { tabs, tabDirection } = this.props;
    const { activeTabIndex } = this.state;
    const scroller = this.contentScroller;
    const tabDom = this.contentScroller.children[0];
    if (tabDom && scroller) {
      if (tabDirection === 'horizontal') {
        // 页面宽度
        const pageWidth = window.getComputedStyle(tabDom).width;
        const pageWidthNumber = +pageWidth.slice(0, pageWidth.length - 2);
        // 根据activeTab translate 到相应位置
        transform(scroller, -activeTabIndex * pageWidthNumber, tabDirection);
        // 页面滑到最后一页的位置
        const maxWidth = -pageWidthNumber * (tabs.length - 1);
        let startX = 0;
        let startY = 0;
        let initialPos = 0; // 手指按下的屏幕位置
        let moveLength = 0; // 手指滑动的距离
        let direction = 'left'; // 滑动方向
        let isMove = false; // 是否发生左右滑动
        let startT = 0; // 记录手指按下的时间
        let isTouchEnd = true; // 标记当前滑动是否结束（手指已离开屏幕）
        scroller.addEventListener('touchstart', e => {
          e.preventDefault();
          if (e && e.touches) {
            // 单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
            if (e.touches.length === 1 || isTouchEnd) {
              const touch = e.touches[0];
              startX = touch.pageX;
              startY = touch.pageY;
              initialPos = -this.state.activeTabIndex * pageWidthNumber; // 本次滑动前的初始位置
              scroller.style.webkitTransition = ''; // 取消动画效果
              startT = +new Date(); // 记录手指按下的开始时间
              isMove = false; // 是否产生滑动
              isTouchEnd = false; // 当前滑动开始
            }
          }
        });
        scroller.addEventListener('touchmove', e => {
          e.preventDefault();
          // 如果当前滑动已结束，不管其他手指在屏幕上都应禁止该事件
          if (isTouchEnd) return;
          if (e.touches) {
            const touch = e.touches[0];
            let deltaX = touch.pageX - startX;
            const deltaY = touch.pageY - startY;
            if (Math.abs(deltaY) > Math.abs(deltaX)) {
              // y方向上滑动距离大于x方向时，不认为是左右滑动
              moveLength = 0;
              return;
            }

            let translate = initialPos + deltaX; // 当前需要移动到的位置
            // 如果translate>0 或 < maxWidth,则表示页面超出边界
            if (translate > 0) {
              translate = 0;
            }
            if (translate < maxWidth) {
              translate = maxWidth;
            }
            deltaX = translate - initialPos;
            transform(scroller, translate, 'horizontal');
            isMove = true;
            moveLength = deltaX;
            direction = deltaX > 0 ? 'right' : 'left'; // 判断手指滑动的方向
          }
        });
        scroller.addEventListener('touchend', e => {
          e.preventDefault();
          let translate = 0;
          const currentPosition = -this.state.activeTabIndex * pageWidthNumber; // 当前页码所在的位置
          // 计算手指在屏幕上停留的时间
          const deltaT = +new Date() - startT;
          // 发生了滑动，并且当前滑动事件未结束
          if (isMove && !isTouchEnd) {
            isTouchEnd = true; // 标记当前完整的滑动事件已结束
            // 使用动画过渡让页面滑动到最终的位置
            scroller.style.webkitTransition = '0.3s ease transform';
            if (deltaT < 300) {
              // 停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页
              if (currentPosition === 0 && moveLength === 0) {
                // 当滑动到最左侧再滑时，moveLength是0，此时还是应该位于最左侧
                translate = 0;
              } else {
                translate =
                  direction === 'left' ? currentPosition - pageWidthNumber : currentPosition + pageWidthNumber;
              }
              // 如果最终位置超过边界位置，则停留在边界位置
              // 左边界
              translate = translate > 0 ? 0 : translate;
              // 右边界
              translate = translate < maxWidth ? maxWidth : translate;
            } else if (Math.abs(moveLength) / pageWidthNumber < 0.5) {
              translate = currentPosition;
            } else {
              // 如果滑动距离大于屏幕的50%，则滑动到下一页
              translate = direction === 'left' ? currentPosition - pageWidthNumber : currentPosition + pageWidthNumber;
              translate = translate > 0 ? 0 : translate;
              translate = translate < maxWidth ? maxWidth : translate;
            }
            transform(scroller, translate, 'horizontal');
            // 计算当前页码
            this.handleTabChange(Math.round(Math.abs(translate) / pageWidthNumber));
          }
        });
      } else {
        // 页面高度
        const pageHeight = window.getComputedStyle(tabDom).height;
        const pageHeightNumber = +pageHeight.slice(0, pageHeight.length - 2);
        // 根据activeTab translate 到相应位置
        transform(scroller, -activeTabIndex * pageHeightNumber, tabDirection);
      }
    }
  }

  handleTabChange = (index: number, scroll?: boolean) => {
    const { animated, tabDirection, tabs } = this.props;
    this.setState(
      {
        activeTabIndex: index,
      },
      () => {
        if (scroll) {
          const scroller = this.contentScroller;
          const tabDom = this.contentScroller.children[0];
          const pageDis = window.getComputedStyle(tabDom)[tabDirection === 'horizontal' ? 'width' : 'height'];
          const pageDisNumber = +pageDis.slice(0, pageDis.length - 2);
          if (animated && tabDirection === 'horizontal') {
            // 使用动画
            scroller.style.webkitTransition = '0.5s ease transform';
          }
          // tabs content滚动
          if (scroller && tabDom) {
            transform(scroller, -pageDisNumber * index, tabDirection);
          }
        }
        // 执行自定义事件
        if (this.props.onChange) {
          this.props.onChange(index, tabs[index] ? tabs[index].key : undefined);
        }
      },
    );
  };

  render() {
    const { prefixCls, tabDirection, style, children } = this.props;

    const { activeTabIndex, count } = this.state;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${tabDirection}`, {});

    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-${tabDirection}-nav-wrap`}>
          <TabBar {...this.props} rowCount={count} activeTabIndex={activeTabIndex} changeTab={this.handleTabChange} />
        </div>
        <div className={`${prefixCls}-${tabDirection}-content-wrap`}>
          {Array.isArray(children) && children.length > 0 ? (
            <div
              className={classnames(`${prefixCls}-${tabDirection}-content`)}
              ref={(div: HTMLDivElement) => {
                this.contentScroller = div;
              }}
              style={{ height: tabDirection === 'vertical' ? `${100 * (children.length || 1)}%` : '100%' }}
            >
              {children.map((child: any) => {
                return (
                  <div
                    className={`${prefixCls}-${tabDirection}-content-tab`}
                    style={{ height: tabDirection === 'vertical' ? `${100 / children.length}%` : '100%' }}
                    key={child.key}
                  >
                    {child}
                  </div>
                );
              })}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
