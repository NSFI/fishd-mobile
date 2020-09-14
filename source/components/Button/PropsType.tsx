export interface ButtonPropsType {
  type?: 'primary' | 'guide' | 'default' | 'warning' | 'danger';
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean;
  color?: string;
  round?: boolean;
  square?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
