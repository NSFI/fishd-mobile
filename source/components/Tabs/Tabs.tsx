import classnames from 'classnames';
import * as React from 'react';
import { Tabs as RMCTabs } from 'rmc-tabs';
import { TabsPropsType } from './PropsType';
import 'rmc-tabs/assets/index.css';

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
  };

  render() {
    const {
      prefixCls,
      tabs,
      tabDirection,
      style,
      tabBarPosition,
      // count,
      initialPage,
      children,
      animated,
      // tabsUnderlineStyle,
      // tabBarActiveTextColor,
      // tabBarInactiveTextColor,
    } = this.props;

    const wrapCls = classnames(prefixCls, {});

    return (
      <div className={wrapCls} style={style}>
        <RMCTabs
          tabs={tabs}
          // prefixCls={prefixCls}
          // tabsUnderlineStyle={tabsUnderlineStyle || {}}
          // tabBarActiveTextColor={tabBarActiveTextColor || ''}
          // tabBarInactiveTextColor={tabBarInactiveTextColor || ''}
          tabDirection={tabDirection}
          tabBarPosition={tabBarPosition}
          initialPage={initialPage}
          animated={animated}
        >
          {children}
        </RMCTabs>
      </div>
    );
  }
}

export default Tabs;
