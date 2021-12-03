import classnames from 'classnames';
import React from 'react';

export interface CheckListProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-check-list`;

const CheckList: React.FC<CheckListProps> = ({ className }) => {
  const CheckListClassName = classnames(classPrefix, {}, className);
  return <div className={CheckListClassName}></div>;
};

export default CheckList;