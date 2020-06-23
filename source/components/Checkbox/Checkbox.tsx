import classnames from 'classnames';
import FCheckbox from 'fishd-checkbox';
import * as React from 'react';

import { CheckboxPropsType } from './PropsType';

export interface CheckboxProps extends CheckboxPropsType {
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  checkedColor?: string;
  shape?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;
  static defaultProps = {
    prefixCls: 'fm-checkbox',
    wrapLabel: true,
  };

  render() {
    const { className, style, checkedColor, shape, ...restProps } = this.props;
    const { prefixCls, children } = restProps;
    const innerStyle: any = this.props.innerStyle || {};

    if(shape === 'square') {
      innerStyle.borderRadius = '3px';
    }

    const wrapCls = classnames(`${prefixCls}-wrapper`, className);
    // Todo: wait for https://github.com/developit/preact-compat/issues/422, then we can remove class below
    if ('class' in restProps) {
      /* tslint:disable:no-string-literal */
      delete (restProps as any)['class'];
    }
    const mark = (
      <label className={wrapCls} style={style}>
        <FCheckbox {...restProps} innerStyle={innerStyle} color={checkedColor}/>
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <FCheckbox {...this.props} innerStyle={innerStyle} color={checkedColor}/>;
  }
}
