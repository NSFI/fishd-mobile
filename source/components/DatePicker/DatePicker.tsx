import React from 'react';
import classNames from 'classnames';

export interface DatePickerProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-date-picker`;

const DatePicker: React.FC<DatePickerProps> = ({ className }) => {
  const DatePickerClassName = classNames(classPrefix, {}, className);
  return <div className={DatePickerClassName}></div>;
};

export default DatePicker;
