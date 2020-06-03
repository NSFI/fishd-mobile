import classnames from 'classnames';
import * as React from 'react';
import { InputPropsType } from './PropsType';

export interface InputProps extends InputPropsType {
  prefixCls?: string;
  className?: string;
}

class Input extends React.Component<InputProps, any> {
  static defaultProps = {
    prefixCls: '',
  };

  render() {
    const { className, prefixCls } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return <div className={wrapCls}>Input组件</div>;
  }
}

export default Input;
