export interface ButtonPropsType {
  prefixCls?: string;
  type?: 'primary' | 'guide' | 'default' | 'warning' | 'danger';
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean;
  hairline?: boolean;
  color?: string;
  round?: boolean;
  square?: boolean;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
