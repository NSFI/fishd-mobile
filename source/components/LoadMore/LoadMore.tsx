import React from 'react';
import classNames from 'classnames';
import { VarProps } from '../../utils/var-props';
import { mergeProps } from '../../utils/merge-props';

export interface LoadMoreProps {
  className?: string;
  style?: React.CSSProperties & VarProps<'---fm-loadmore-color' | '--fm-loadmore-size' | '--fm-loadmore-font-size'>;
  type?: 'circular' | 'spinner';
  color?: string;
  size?: string;
  text?: string;
  vertical?: boolean;
}

const classPrefix = 'fm-loadmore';

const defaultProps = {
  prefixCls: 'fm-loadmore',
  type: 'circular',
  vertical: false,
};

function LoadMoreIcon(props: LoadMoreProps) {
  if (props.type === 'spinner') {
    const Spin: Array<React.ReactNode> = [];
    for (let i = 0; i < 12; i++) {
      Spin.push(<i key={i} />);
    }
    return Spin;
  }

  return (
    <svg className={`${classPrefix}__circular`} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );
}

const LoadMore: React.FC<LoadMoreProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className, style, type, vertical, text } = props;

  const wrapCls = classNames(classPrefix, className, {
    [`${classPrefix}__vertical`]: vertical,
    [`${classPrefix}__normal`]: !vertical,
  });

  const spinnerCls = classNames(`${classPrefix}__spinner`, `${classPrefix}__spinner--${type}`);

  const varStyle = {
    '--fm-loadmore-size': props.size,
    '--fm-loadmore-color': props.color,
  };

  return (
    <div className={wrapCls} style={{ ...style, ...varStyle }}>
      <span className={spinnerCls}>{LoadMoreIcon(props)}</span>
      {text && <span className={`${classPrefix}__text`}>{text}</span>}
    </div>
  );
};

export default LoadMore;
