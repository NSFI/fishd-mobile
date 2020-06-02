import * as React from 'react';

type tabData = {
  title: React.ReactNode;
  key: string;
};

export interface TabsPropsType {
  tabDirection?: 'horizontal' | 'vertical';
  useOnPan?: boolean;
  swipeable?: boolean;
  animated?: boolean;
  tabsUnderlineStyle?: any;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
  tabs: tabData[];
  tabBarPosition?: 'bottom' | 'top' | 'left' | 'right';
  count?: number;
  initialPage?: number | string;
}
