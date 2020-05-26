/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import * as React from 'react';
import Animate from 'rc-animate';
import { NumberKeyboardPropsType } from './PropsType';

export interface NumberKeyboardProps extends NumberKeyboardPropsType {
  prefixCls?: string;
  className?: string;
  onBlur?: () => void;
  show: boolean;
}

class NumberKeyboard extends React.Component<NumberKeyboardProps, any> {
  static defaultProps = {
    prefixCls: 'fm-number-keyboard',
    show: false,
  };

  wrapRef: any;

  componentDidMount() {
    document.addEventListener('touchstart', this.doBlur, false);
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.doBlur, false);
  }

  doBlur = () => {
    if (this.props.show && this.props.onBlur) {
      this.props.onBlur();
    }
  };

  onAnimateAppear = () => {
    document.body.style.overflow = 'hidden';
  };

  onAnimateLeave = () => {
    document.body.style.overflow = '';
  };

  hanldeClick = (e: React.TouchEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const { className, prefixCls, show, children } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return (
      <Animate
        onAppear={this.onAnimateAppear}
        onLeave={this.onAnimateLeave}
        transitionName={`fm-slide-up`}
        transitionAppear
      >
        {show ? (
          <div className={`${wrapCls} ${prefixCls}-content`} onTouchStart={this.hanldeClick}>
            {children}
          </div>
        ) : null}
      </Animate>
    );
  }
}

export default NumberKeyboard;
