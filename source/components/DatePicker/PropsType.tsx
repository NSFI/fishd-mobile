import * as React from 'react';

export interface DatePickerPropsType {
  value?: Date;
  mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
  minDate?: Date;
  maxDate?: Date;
  onChange?: (value: Date) => void;
  onValueChange?: (vals: any, index: number) => void;
  visible?: boolean;
  onDismiss?: () => void;
  minuteStep?: number;
  disabled?: boolean;
  format?: string | ((value: Date) => string);
  extra?: string;
  dismissText?: React.ReactNode;
  okText?: React.ReactNode;
  title?: React.ReactNode;
  local?: string;
}
