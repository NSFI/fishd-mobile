import classnames from 'classnames';
import * as React from 'react';
import { IconPropsType } from './PropsType';
import './iconfont.js';

export type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, 'size' | 'type'>;
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
  };

  render() {
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(className, 'fm-icon', `fm-icon-${type}`, `fm-icon-${size}`);
    return (
      <svg className={cls} {...(restProps as any)}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
