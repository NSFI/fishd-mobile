/* eslint-disable prefer-template */
import React from 'react';
import classnames from 'classnames';
import { isDef } from '../../utils/index';

export interface ProgressProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  percentage?: string | number;
  strokeWidth?: string | number;
  color?: string;
  trackColor?: string;
  pivotText?: string;
  pivotColor?: string;
  textColor?: string;
  inactive?: boolean;
  showPivot?: boolean;
}

class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'fm-progress',
    percentage: 0,
    strokeWidth: '4px',
    color: '#1989fa',
    trackColor: '#e5e5e5',
    textColor: '#fff',
    inactive: false,
    showPivot: true,
  };

  state = {
    wrapWidth: 0,
    progressWidth: 0,
    pivotWidth: 0,
  };

  progressRef: HTMLDivElement | null;

  pivotRef: HTMLSpanElement | null;

  componentDidMount() {
    this.setState({
      progressWidth: this.progressRef?.offsetWidth || 0,
      pivotWidth: this.pivotRef?.offsetWidth || 0,
    });
  }

  render() {
    const {
      className,
      prefixCls,
      style,
      showPivot,
      percentage,
      color,
      trackColor,
      pivotColor,
      strokeWidth,
      inactive,
      pivotText,
      textColor,
    } = this.props;

    const { progressWidth, pivotWidth } = this.state;

    const background = inactive ? '#cacaca' : color;

    const wrapCls = classnames(prefixCls, className, {});

    const text = isDef(pivotText) ? pivotText : `${percentage}%`;

    const pivotStyle = {
      color: textColor,
      left: `${((progressWidth - pivotWidth) * Number(percentage)) / 100}px`,
      background: pivotColor || background,
    };

    const portionStyle = {
      background,
      width: (progressWidth * Number(percentage)) / 100 + 'px',
    };

    const wrapperStyle = {
      background: trackColor,
      height: strokeWidth,
      ...style,
    };

    return (
      <div
        ref={ref => {
          this.progressRef = ref;
        }}
        className={wrapCls}
        style={wrapperStyle}
      >
        <span className={`${prefixCls}__portion`} style={portionStyle}>
          {showPivot && (
            <span
              ref={ref => {
                this.pivotRef = ref;
              }}
              style={pivotStyle}
              className={`${prefixCls}__pivot`}
            >
              {text}
            </span>
          )}
        </span>
      </div>
    );
  }
}

export default Progress;
