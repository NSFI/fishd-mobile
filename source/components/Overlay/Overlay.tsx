/* eslint-disable class-methods-use-this */
import classnames from 'classnames';
import * as React from 'react';
import Animate from 'rc-animate';
import { OverlayPropsType } from './PropsType';

export interface OverlayProps extends OverlayPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

class Overlay extends React.Component<OverlayProps, any> {
  static defaultProps = {
    prefixCls: 'fm-overlay',
    zIndex: 1,
    show: false,
    duration: 0.3,
    lockScroll: true,
  };

  noop() {}

  preventTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();
  }

  render() {
    const { className, prefixCls, zIndex, style, show, duration, lockScroll, children, ...restProps } = this.props;

    const wrapCls = classnames(prefixCls, className, {});
    const customStyle: { [key: string]: any } = {
      ...style,
      zIndex,
      display: show ? 'block' : 'none',
    };
    if (duration) {
      customStyle.animationDuration = `${duration}s`;
    }
    return (
      <Animate
        transitionName={`fm-fade`}
        transitionAppear
        // showProp='show'
      >
        {show ? (
          <div
            {...restProps}
            style={customStyle}
            className={wrapCls}
            onTouchMove={lockScroll ? this.preventTouchMove : this.noop}
          >
            {children}
          </div>
        ) : null}
      </Animate>
    );
  }
}

export default Overlay;
