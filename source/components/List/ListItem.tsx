import React from 'react';
import classnames from 'classnames';
import TouchFeedback from 'rmc-feedback';

import Icon from '../Icon'

export interface ListItemProps {
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  prefix?: React.ReactNode;
  extra?: React.ReactNode;
  clickable?: React.ReactNode;
  arrow?: boolean | React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const classPrefix = `fm-list-item`;

const ListItem: React.FC<ListItemProps> = props => {
  const { className, clickable, prefix, title, children, description, extra, arrow, disabled } = props;
  const ListItemClassName = classnames(
    classPrefix,
    {
      [`${classPrefix}--disabled`]: disabled,
    },
    className,
  );

  return (
    <TouchFeedback activeClassName={clickable ? `${classPrefix}--active` : ''} disabled={disabled}>
      <div className={ListItemClassName} onClick={disabled ? undefined : props.onClick }>
        <div className={`${classPrefix}__content`}>
          {/* 前缀 */}
          {prefix && <div className={`${classPrefix}__prefix`}>{prefix}</div>}
          {/* 中间内容 */}
          <div className={`${classPrefix}__main`}>
            {/* 标题 */}
            {title && <div className={`${classPrefix}__title`}>{title}</div>}
            {/* 主体内容 */}
            {children}
            {/* 描述 */}
            {description && <div className={`${classPrefix}__description`}>{description}</div>}
          </div>
          {/* 后缀内容 */}
          {extra && <div className={`${classPrefix}__extra`}>{extra}</div>}
          {/* 箭头 */}
          {arrow === true ? <Icon className={`${classPrefix}__arrow`} type="allow-right"></Icon> : arrow}
        </div>
      </div>
    </TouchFeedback>
  );
};

export default ListItem;
