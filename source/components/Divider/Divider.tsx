import classnames from 'classnames';
import * as React from 'react';
import { DividerPropsType } from './PropsType';

export interface DividerProps extends DividerPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

class Divider extends React.Component<DividerProps, any> {
  static defaultProps = {
    prefixCls: 'fm-divider',
    dashed: false,
    hairline: true,
    contentPosition: 'center',
  };

  render() {
    const { className, prefixCls, dashed, hairline, contentPosition, style, children, ...restProps } = this.props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}--dashed`]: dashed,
      [`${prefixCls}--hairline`]: hairline,
      [`${prefixCls}--content-${contentPosition}`]: children,
    });
    return (
      <div role="separator" {...restProps} style={style} className={wrapCls}>
        {children}
      </div>
    );
  }
}

export default Divider;
