import * as React from 'react';
import classnames from 'classnames';

export interface IconProps {
  className?: string;
  type: string;
  color?: string;
  // TODO 兼容其他组件参照antd-mobile的实现
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: string | number;
  dot?: boolean;
  badge?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    style: {},
    dot: false,
  };

  render() {
    const { type, className, color, fontSize, dot, badge, style, onClick } = this.props;
    const cls = classnames(className, 'icon', 'iconfont', 'fm-icon', `fm-icon-${type}`);
    const formatStyle = { ...style };
    if (color) {
      Object.assign(formatStyle, { color });
    }
    if (fontSize) {
      Object.assign(formatStyle, { fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize });
    }
    return (
      <i className={cls} style={formatStyle} onClick={onClick}>
        {dot && <div className="fm-icon-badge fm-icon-badge-dot" />}
        {!!badge && <div className="fm-icon-badge">{badge}</div>}
      </i>
    );
  }
}
