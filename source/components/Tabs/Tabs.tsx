import classnames from 'classnames';
import * as React from 'react';
import { TabsPropsType } from './PropsType';
import TabBar from './TabBar';

export interface TabsProps extends TabsPropsType {
  prefixCls?: string;
  style?: object;
}

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

  render() {
    const {
      prefixCls,
      // tabs,
      tabDirection,
      style,
      // tabBarPosition,
      // count,
      // initialPage,
      children,
      // animated,
      // tabsUnderlineStyle,
      // tabBarActiveTextColor,
      // tabBarInactiveTextColor,
    } = this.props;

    const wrapCls = classnames(prefixCls, `${prefixCls}-${tabDirection}`, {});

    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-${tabDirection}-nav-wrap`}>
          <TabBar {...this.props} />
        </div>
        <div className={`${prefixCls}-${tabDirection}-content`}>{children}</div>
      </div>
    );
  }
}

export default Tabs;
