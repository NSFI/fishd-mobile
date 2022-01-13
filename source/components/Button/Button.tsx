import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';

import { mergeProps } from '../../utils/merge-props';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  htmlType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'success' | 'default' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'large' | 'normal' | 'small' | 'mini';
  hairline?: boolean;
  color?: string;
  round?: boolean;
  square?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  type: 'default',
  htmlType: 'button',
  size: 'normal',
  fill: 'solid',
  hairline: false,
  round: false,
  square: false,
  disabled: false,
  block: false,
  loading: false,
};

const classPrefix = `fm-button`;

const Button: React.FC<ButtonProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    className,
    style,
    activeStyle,
    activeClassName,
    htmlType,
    type,
    fill,
    hairline,
    size,
    round,
    square,
    disabled,
    block,
    loading,
    loadingText,
    color,
    onClick,
    children,
    ...restProps
  } = props;

  const ButtonClassName = classNames(classPrefix, className, {
    [`${classPrefix}-default`]: type === 'default',
    [`${classPrefix}-primary`]: type === 'primary',
    [`${classPrefix}-success`]: type === 'success',
    [`${classPrefix}-warning`]: type === 'warning',
    [`${classPrefix}-danger`]: type === 'danger',
    [`${classPrefix}-fill-${fill}`]: !!fill,
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
  });

  const ButtonStyle: React.CSSProperties = {};
  if (fill === 'solid' && color) {
    ButtonStyle.background = color;
    ButtonStyle.borderColor = color;
    ButtonStyle.color = '#fff';
  }
  if (fill === 'outline' && color) {
    ButtonStyle.borderColor = color;
    ButtonStyle.color = color;
  }
  if (fill === 'none' && color) {
    ButtonStyle.color = color;
  }

  return (
    <TouchFeedback
      disabled={disabled}
      activeClassName={activeClassName ? activeClassName : `${classPrefix}-active`}
      activeStyle={activeStyle}
    >
      <button
        className={ButtonClassName}
        style={{ ...ButtonStyle, ...style }}
        type={htmlType}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        {...restProps}
      >
        {props.loading ? (
          <div className="fm-button__loading">
            <span className="fm-loading__spinner" style={{ color: 'currentcolor', width: '20px', height: '20px' }}>
              <svg viewBox="25 25 50 50" className="fm-loading__circular">
                <circle cx="50" cy="50" r="20" fill="none"></circle>
              </svg>
            </span>
            {loadingText && <span className="fm-loading__text">{loadingText}</span>}
          </div>
        ) : (
          children
        )}
      </button>
    </TouchFeedback>
  );
};

export default Button;
