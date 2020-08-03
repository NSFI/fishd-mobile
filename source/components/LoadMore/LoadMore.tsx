import classnames from 'classnames';
import * as React from 'react';
import { LoadMorePropsType } from './PropsType';

export interface LoadMoreProps extends LoadMorePropsType {
  prefixCls?: string;
  className?: string;
  type?: 'circular' | 'spinner';
  color?: string;
  size?: string | number;
  textSize: string | number;
  vertical?: boolean;
  text?: string;
}

function LoadMoreIcon(props: LoadMoreProps) {
  if (props.type === 'spinner') {
    const Spin: Array<React.ReactNode> = [];
    for (let i = 0; i < 12; i++) {
      Spin.push(<i key={i} />);
    }
    return Spin;
  }

  return (
    <svg className={`${props.prefixCls}__circular`} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );
}

class LoadMore extends React.Component<LoadMoreProps, any> {
  static defaultProps = {
    prefixCls: 'fm-loadmore',
    type: 'circular',
    color: '#C8C9CC',
    size: '30px',
    textSize: '14px',
    vertical: false,
  };

  render() {
    const { className, prefixCls, type, color, size, textSize, vertical, text } = this.props;

    const wrapCls = classnames(prefixCls, className, vertical ? `${prefixCls}__vertical` : `${prefixCls}__normal`);
    const spinnerCls = `${prefixCls}__spinner`;

    const style = { color, width: size, height: size };
    const textStyle = { fontSize: textSize };

    return (
      <div className={wrapCls}>
        <span className={`${spinnerCls} ${spinnerCls}--${type}`} style={style}>
          {LoadMoreIcon(this.props)}
        </span>
        {text && (
          <span className={`${prefixCls}__text`} style={textStyle}>
            {text}
          </span>
        )}
      </div>
    );
  }
}

export default LoadMore;
