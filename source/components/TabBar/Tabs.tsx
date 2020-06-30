import * as React from 'react';
import {
  DefaultTabBar as RMCDefaultTabBar,
  TabBarPropsType,
  Tabs as RMCTabs,
  Models,
  PropsType
} from 'rmc-tabs';

export interface TabsProps extends PropsType {
  /** render for replace the tab of tabbar. */
  renderTab?: (tab: Models.TabData) => React.ReactNode;
}

export class DefaultTabBar extends RMCDefaultTabBar {
  static defaultProps = {
    ...(RMCDefaultTabBar as any).defaultProps,
    prefixCls: 'fm-tab-bar-tabs-default-bar',
  };
}

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'fm-tab-bar-tabs',
  };

  renderTabBar = (props: TabBarPropsType) => {
    const { renderTab } = this.props;
    return <DefaultTabBar {...props} renderTab={renderTab} />;
  }

  render() {
    return <RMCTabs renderTabBar={this.renderTabBar} {...this.props} />;
  }
}
