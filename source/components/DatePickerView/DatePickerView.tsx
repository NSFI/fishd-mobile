import React from 'react';
import classNames from 'classnames';

export interface DatePickerViewProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-date-picker-view`;

const DatePickerView: React.FC<DatePickerViewProps> = ({ className }) => {
  const DatePickerViewClassName = classNames(classPrefix, {}, className);
  return <div className={DatePickerViewClassName}></div>;
};

export default DatePickerView;
