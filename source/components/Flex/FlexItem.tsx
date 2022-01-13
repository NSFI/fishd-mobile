import classNames from 'classnames';
import * as React from 'react';
import { FlexItemPropsType } from './PropsType';

export interface FlexItemProps extends FlexItemPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    prefixCls: 'fm-flexbox',
  };

  render() {
    const { children, className, prefixCls, style, ...restProps } = this.props;
    const wrapCls = classNames(`${prefixCls}-item`, className);
    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}
