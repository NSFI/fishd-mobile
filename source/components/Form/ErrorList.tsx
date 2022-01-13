import classNames from 'classnames';
import React from 'react';

export interface CheckListProps {
  className?: string;
  style?: React.CSSProperties;
  errors: React.ReactNode[];
}

const classPrefix = `fm-form-errors`;

const CheckList: React.FC<CheckListProps> = ({ className, style, errors = [] }) => {
  const CheckListClassName = classNames(classPrefix, {}, className);
  return errors && errors.length ? (
    <div className={CheckListClassName} style={style}>
      {errors.map((error, index) => (
        <div className={`${classPrefix}__item`} key={index}>
          {error}
        </div>
      ))}
    </div>
  ) : null;
};

export default CheckList;
