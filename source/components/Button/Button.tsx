import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { ButtonPropsType } from './PropsType';
import './style/index.less';

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'fm-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {},
  };

  render() {
    const {
      children,
      className,
      prefixCls,
      type,
      size,
      inline,
      disabled,
      loading,
      activeStyle,
      activeClassName,
      onClick,
      ...restProps
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    });

    return (
      <TouchFeedback
        activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <a
          role="button"
          className={wrapCls}
          {...restProps}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
        >
          {children}
        </a>
      </TouchFeedback>
    );
  }
}

export default Button;
