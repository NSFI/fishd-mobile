import React from 'react';
import classNames from 'classnames';

import TouchFeedback from 'rmc-feedback';
import LoadMore from '../LoadMore';

import { mergeProps } from '../../utils/merge-props';
import { NativeProps, getNativeAttr } from '../../utils/native-props';

export type ButtonProps = {
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  htmlType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'success' | 'default' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'large' | 'normal' | 'small' | 'mini';
  shape?: 'square' | 'round';
  color?: string;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & NativeProps;

const defaultProps = {
  type: 'default',
  htmlType: 'button',
  size: 'normal',
  fill: 'solid',
  block: false,
  disabled: false,
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
    size,
    shape,
    disabled,
    block,
    loading,
    loadingText,
    color,
    children,
    onClick,
  } = props;
  const nativeAttr = getNativeAttr(props);

  const ButtonClassName = classNames(classPrefix, className, [`${classPrefix}-${type}`, `${classPrefix}-${size}`], {
    [`${classPrefix}-${shape}`]: !!shape,
    [`${classPrefix}-fill-${fill}`]: !!fill,
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
        {...nativeAttr}
      >
        {props.loading ? <LoadMore text={loadingText} /> : children}
      </button>
    </TouchFeedback>
  );
};

export default Button;
