import classnames from 'classnames';
import * as React from 'react';
import { LabelPropsType } from './PropsType';
import { Icon } from '..';

export interface LabelProps extends LabelPropsType {
  prefixCls?: string;
  className?: string;
  color?: string;
  closeable?: boolean; // 标签是否可以关闭
  onClose?: () => void; // 关闭时的回调
  afterClose?: () => void;
  style?: React.CSSProperties;
}

class Label extends React.Component<LabelProps, any> {
  static defaultProps = {
    prefixCls: 'fm-label',
    color: '#337EFF',
    size: 'md',
    type: 'normal',
    closeable: false,
    disabled: false,
  };

  state = {
    closed: false,
  };

  handleClose = e => {
    e.stopPropagation();
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState(
      {
        closed: true,
      },
      () => {
        if (this.props.afterClose) {
          this.props.afterClose();
        }
      },
    );
  };

  render() {
    const { className, prefixCls, children, closeable, size, style, type, color } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}`]: type === 'normal',
      [`${prefixCls}-plain`]: type === 'plain',
      [`${prefixCls}-round`]: type === 'round',
      [`${prefixCls}-mark`]: type === 'mark',
      [`${prefixCls}-shallow`]: type === 'shallow',
      [`${prefixCls}-sm`]: size === 'sm',
      [`${prefixCls}-lg`]: size === 'lg',
    });

    const key = type === 'plain' || type === 'shallow' ? 'color' : 'backgroundColor';
    let iconSize;
    if (size === 'sm') {
      iconSize = 'xxs';
    } else if (size === 'md') {
      iconSize = 'xs';
    } else {
      iconSize = 'md';
    }

    const labelStyle = {
      [key]: color,
      ...style,
    };

    const CloseIcon = closeable && (
      <Icon className={`${prefixCls}-closeable`} type="fm-close" size={iconSize} onClick={this.handleClose} />
    );

    return !this.state.closed ? (
      <div className={wrapCls} style={labelStyle}>
        {children}
        {CloseIcon}
      </div>
    ) : null;
  }
}

export default Label;
