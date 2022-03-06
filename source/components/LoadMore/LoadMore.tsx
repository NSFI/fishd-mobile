import React from 'react';
import classNames from 'classnames';
import { mergeProps } from '../../utils/merge-props';
import { NativeProps, getNativeAttr } from '../../utils/native-props';

export type LoadMoreProps = {
  type?: 'circular' | 'spinner';
  color?: string;
  size?: string;
  text?: string;
  vertical?: boolean;
} & NativeProps<'--fm-loadmore-color' | '--fm-loadmore-size' | '--fm-loadmore-font-size'>;

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
  const nativeAttr = getNativeAttr(props);
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
    <div className={wrapCls} style={{ ...style, ...varStyle }} {...nativeAttr}>
      <span className={spinnerCls}>{LoadMoreIcon(props)}</span>
      {text && <span className={`${classPrefix}__text`}>{text}</span>}
    </div>
  );
};

export default LoadMore;
