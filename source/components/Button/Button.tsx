import * as React from 'react';
import * as PropTypes from 'prop-types';

import './style/index.less'

type ButtonType = 'primary' | 'default' | 'dashed' | 'danger';
type ButtonSize = 'small' | 'large' | 'default';

export interface ButtonProps {
  type?:ButtonType,
  size?:ButtonSize,
}

class Button extends React.Component<any> {
  static defaultProps = {
    prefixCls: 'fishd-btn',
    type: 'default',
    size: 'default'
  };
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { type, size, ...otherProps} = this.props;
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }
    const classForBtn = `fishd-btn fishd-btn-${type} ${sizeCls && `fishd-btn-${sizeCls}`}`;
    return (
      <button type={type} className={classForBtn} {...otherProps}>{this.props.children}</button>
    );
  }
}

export default Button;
