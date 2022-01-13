/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import * as React from 'react';
import CollapseIcon from './CollapseIcon';
import DeleteIcon from './DeleteIcon';

export interface NumberKeyProps {
  prefixCls?: string;
  className?: string;
  type?: string;
  text: number | string;
  color?: string;
  wider?: boolean;
  large?: boolean;
  loading?: boolean;
  onPress?: (type: string, text: number | string) => void;
}

class NumberKey extends React.Component<NumberKeyProps, any> {
  static defaultProps = {
    prefixCls: 'fm-number-key',
    text: '',
  };

  hanldeClick = (event: any) => {
    if (this.props.onPress) {
      event.preventDefault();
      this.props.onPress(this.props.type || '', this.props.text);
    }
  };

  genContent = () => {
    const isExtra = this.props.type === 'extra';
    const isDelete = this.props.type === 'delete';
    const { text } = this.props;

    if (isDelete) {
      return text || <DeleteIcon></DeleteIcon>;
    }

    if (isExtra) {
      return text || <CollapseIcon></CollapseIcon>;
    }

    return text;
  };

  render() {
    const { className, prefixCls, large, wider, color } = this.props;

    const wrapCls = classNames(`${prefixCls}__wrapper`, className, wider ? `${prefixCls}__wider` : '');
    const keyCls = classNames(
      `${prefixCls}__key`,
      large ? `${prefixCls}__large` : '',
      color ? `${prefixCls}__${color}` : '',
    );
    return (
      <div className={wrapCls}>
        <div role="button" className={keyCls} onClick={this.hanldeClick}>
          {this.genContent()}
        </div>
      </div>
    );
  }
}

export default NumberKey;
