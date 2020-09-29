import classnames from 'classnames';
import FCheckbox from 'fishd-checkbox';
import * as React from 'react';
import { RadioPropsType } from './PropsType';

export interface RadioProps extends RadioPropsType {
  prefixCls?: string;
  listPrefixCls?: string;
  className?: string;
  checkedcolor?: string;
  shape?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'fm-radio',
    wrapLabel: true,
  };

  render() {
    const { className, style, checkedcolor, shape, ...restProps } = this.props;
    const { prefixCls, children } = restProps;
    const innerStyle: any = this.props.innerStyle || {};

    if(shape === 'square') {
      innerStyle.borderRadius = '3px';
    }

    const wrapCls = classnames(`${prefixCls}-wrapper`, className);
    if ('class' in restProps) {
      // Todo https://github.com/developit/preact-compat/issues/422
      /* tslint:disable:no-string-literal */
      delete (restProps as any)['class'];
    }
    const mark = (
      <label className={wrapCls} style={style}>
        <FCheckbox {...restProps} type="radio" innerStyle={innerStyle} color={checkedcolor} />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <FCheckbox {...this.props} type="radio" innerStyle={innerStyle} color={checkedcolor} />;
  }
}
