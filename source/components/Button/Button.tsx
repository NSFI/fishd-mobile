import React from 'react';
import classnames from 'classnames';
import TouchFeedback from 'rmc-feedback';

import Icon from '../Icon';
import { mergeProps } from '../../utils/merge-props';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  htmlType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'guide' | 'default' | 'warning' | 'danger';
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean;
  hairline?: boolean;
  color?: string;
  round?: boolean;
  square?: boolean;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  type: 'default',
  htmlType: 'button',
  size: 'normal',
  plain: false,
  hairline: false,
  round: false,
  square: false,
  disabled: false,
  block: false,
  loading: false,
  activeStyle: {},
};

const classPrefix = `fm-button`;

const Button: React.FC<ButtonProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    className,
    style,
    htmlType,
    type,
    plain,
    hairline,
    size,
    round,
    square,
    disabled,
    block,
    icon,
    loading,
    activeStyle,
    activeClassName,
    color,
    onClick,
    children,
    ...restProps
  } = props;
  const iconType = loading ? 'loading' : icon;
  const ButtonClassName = classnames(classPrefix, className, {
    [`${classPrefix}-default`]: type === 'default',
    [`${classPrefix}-primary`]: type === 'primary',
    [`${classPrefix}-guide`]: type === 'guide',
    [`${classPrefix}-warning`]: type === 'warning',
    [`${classPrefix}-danger`]: type === 'danger',
    [`${classPrefix}-plain`]: plain,
    [`${classPrefix}-hairline`]: hairline,
    [`${classPrefix}-large`]: size === 'large',
    [`${classPrefix}-normal`]: size === 'normal',
    [`${classPrefix}-small`]: size === 'small',
    [`${classPrefix}-mini`]: size === 'mini',
    [`${classPrefix}-round`]: round,
    [`${classPrefix}-square`]: square,
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-loading`]: loading,
    [`${classPrefix}-icon`]: !!iconType,
  });
  const ButtonStyle = color
    ? {
        color: plain ? color : '#fff',
        background: plain ? '#fff' : color,
        borderColor: plain ? color : '#fff',
        ...style,
      }
    : { ...style };

  let iconEl;
  if (typeof iconType === 'string') {
    if (iconType === 'loading') {
      iconEl = (
        <div className="fm-loading--circular fm-button__loading">
          <span
            className="fm-loading__spinner fm-loading__spinner--circular"
            style={{ color: 'currentcolor', width: '20px', height: '20px' }}
          >
            <svg viewBox="25 25 50 50" className="fm-loading__circular">
              <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
          </span>
        </div>
      );
    } else {
      iconEl = <Icon type={iconType} />;
    }
  }
  return (
    <TouchFeedback
      activeClassName={activeClassName || (activeStyle ? `${classPrefix}-active` : undefined)}
      disabled={disabled}
      activeStyle={activeStyle}
    >
      <button
        {...restProps}
        className={ButtonClassName}
        style={ButtonStyle}
        type={htmlType}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {iconEl}
        {children}
      </button>
    </TouchFeedback>
  );
};

export default Button;
