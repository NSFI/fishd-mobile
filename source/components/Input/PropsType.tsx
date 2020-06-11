export type InputEventHandler = (value?: string) => void;
export interface InputPropsType {
  type?: 'text' | 'bankCard' | 'phone' | 'password' | 'number' | 'digit';
  editable?: boolean; // 是否可编辑
  disabled?: boolean; // 是否禁用
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  maxLength?: number;
  center?: boolean;
  errorMessage?: string;
  extra?: React.ReactNode;
  error?: boolean;
  labelWidth?: number | string; // 标签的宽度
  labelPosition?: 'left' | 'top';
  textAlign?: 'left' | 'center';
  updatePlaceholder?: boolean; // 当清除内容时，是否将清除前的内容替换到 placeholder 中
  onChange?: (value: string) => void;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
}
