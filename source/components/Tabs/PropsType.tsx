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
  count?: number;
  initialPage?: number | string;
  onChange?: (index: number, key: string | undefined) => void;
}
