import React from 'react';
import classNames from 'classnames';
export interface ListProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-list`;

const List: React.FC<ListProps> = props => {
  const { className, style, children } = props;
  const ListClassName = classNames(`${classPrefix}`, {}, className);
  return <div className={ListClassName} style={style}>{children}</div>;
};

export default List;
