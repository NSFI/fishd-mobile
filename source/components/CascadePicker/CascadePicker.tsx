import React from 'react';
import classNames from 'classnames';

export interface CascadePickerProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-cascade-picker`;

const CascadePicker: React.FC<CascadePickerProps> = ({ className }) => {
  const CascadePickerClassName = classNames(classPrefix, {}, className);
  return <div className={CascadePickerClassName}></div>;
};

export default CascadePicker;
