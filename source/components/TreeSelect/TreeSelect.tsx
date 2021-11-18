import classnames from 'classnames';
import React from 'react';

export interface TreeSelectProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-tree-select`;

const TreeSelect: React.FC<TreeSelectProps> = ({ className }) => {
  const TreeSelectClassName = classnames(classPrefix, {}, className);
  return <div className={TreeSelectClassName}></div>;
};

export default TreeSelect;
