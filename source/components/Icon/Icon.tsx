import React from 'react';
import classnames from 'classnames';

export type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  type: string;
  color?: string;
  fontSize?: string | number;
  dot?: boolean;
  badge?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const classPrefix = `fm-check-list`;

const Icon: React.FC<IconProps> = props => {
  const { className, style, type, color, fontSize, dot, badge } = props;
  const IconClassName = classnames(classPrefix, 'fm-icon', 'fm-iconfont', `fm-icon-${type}`, className);

  const formatStyle = { ...style };
  if (color) {
    Object.assign(formatStyle, { color });
  }
  if (fontSize) {
    Object.assign(formatStyle, { fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize });
  }

  return (
    <span className={IconClassName} style={formatStyle} onClick={props.onClick} onMouseDown={props.onMouseDown}>
      {dot && <div className="fm-icon-badge fm-icon-badge-dot" />}
      {!!badge && <div className="fm-icon-badge">{badge}</div>}
    </span>
  );
};

export default Icon;
