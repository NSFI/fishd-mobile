import { Models } from './Models';

export interface TabsPropsType {
  tabDirection?: 'horizontal' | 'vertical';
  useOnPan?: boolean;
  swipeable?: boolean;
  animated?: boolean;
  tabsUnderlineStyle?: any;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
  tabs: Models.TabData[];
  tabBarPosition?: 'bottom' | 'top' | 'left' | 'right';
  count?: number;
  initialPage?: number | string;
}
