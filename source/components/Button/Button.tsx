import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { ButtonPropsType } from './PropsType';
import Icon from '../Icon';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span className="fm-button-text">{child}</span>;
  }
  return child;
}

class Button extends React.Component<ButtonPropsType, any> {
  static defaultProps = {
    prefixCls: 'fm-button',
    type: 'default',
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

  render() {
    const {
      prefixCls,
      children,
      className,
      type,
      size,
      plain,
      hairline,
      color,
      round,
      square,
      disabled,
      block,
      icon,
      loading,
      activeStyle,
      activeClassName,
      onClick,
      ...restProps
    } = this.props;

    const iconType: any = loading ? 'loading' : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-default`]: type === 'default',
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-guide`]: type === 'guide',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-danger`]: type === 'danger',
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-hairline`]: hairline,
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-normal`]: size === 'normal',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-mini`]: size === 'mini',
      [`${prefixCls}-round`]: round,
      [`${prefixCls}-square`]: square,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType,
    });

    const kids = React.Children.map(children, insertSpace);

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
          style={
            color
              ? {
                  color: plain ? color : '#fff',
                  background: plain ? '#fff' : color,
                  borderColor: plain ? color : '#fff',
                }
              : {}
          }
        >
          {iconEl}
          {kids}
        </a>
      </TouchFeedback>
    );
  }
}

export default Button;
