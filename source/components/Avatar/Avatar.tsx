import classNames from 'classnames';
import * as React from 'react';
import { AvatarPropsType } from './PropsType';

import Icon, { IconProps } from '../Icon';
import Badge, { BadgeProps } from '../Badge';

function getRound(shape) {
  const matchStr = /^[0-9]+(px|%|em)?$/;
  const match = (matchStr.test(shape) && matchStr.exec(shape)) || [];
  let round = match[0];
  /* eslint-disable  no-restricted-globals */
  round = round && !isNaN(Number(round)) ? `${round}px` : round;
  return round;
}
const getObjType = obj => Object.prototype.toString.call(obj);
// const badge:BadgeProps = {};
export interface AvatarProps extends AvatarPropsType {
  prefixCls?: string;
  className?: string;
  imageUrl?: string;
  style?: React.CSSProperties;
  icon?: string | IconProps | React.ReactNode;
  disabled?: boolean;
  badge?: BadgeProps;
  // shape?: string | number | undefined;
}

class Avatar extends React.Component<AvatarProps, any> {
  static defaultProps = {
    prefixCls: 'fm-avatar',
    style: {},
    size: 'md',
    shape: 'circle', // outline
    type: 'text',
    disabled: false,
    imageUrl: '', // https://unsplash.it/300/300
  };

  render() {
    const {
      // - hybird
      badge,
      // - basic
      // className,
      prefixCls,
      // - pre
      size,
    } = this.props;

    const clsSize = `${prefixCls}-${size}`;

    const wrapBradgeCls = badge && `${prefixCls}-badge-wrap`;
    const wrapCls = classNames(prefixCls, wrapBradgeCls, clsSize);

    const { className, hot, corner, ...badgeRestProps } = badge || { className: '' };
    const badgeCls = classNames(`${prefixCls}-badge`, className, {});

    return (
      <div className={`${wrapCls}`}>
        {this.renderMain()}
        {badge && (
          <Badge className={badgeCls} {...badgeRestProps}>
            &nbsp;
          </Badge>
        )}
      </div>
    );
  }

  renderMain() {
    const {
      // - basic
      className,
      prefixCls,
      style,
      disabled,
      // - pre
      shape,
      type,
      // - custom
      imageUrl,
    } = this.props;

    let styleShape;
    let clsShape;
    const round = getRound(shape);
    if (round) {
      styleShape = { borderRadius: round };
    } else if (['circle', 'square'].includes(String(shape))) {
      clsShape = `${prefixCls}-${shape}`;
    }

    // const clsShape = `${prefixCls}-${shape}`;
    const clsType = `${prefixCls}-${type}`;
    const wrapCls = classNames(`${prefixCls}-main`, className, clsShape, clsType, {});
    const contentCls = classNames(`${prefixCls}-content`, `${clsType}-content`);

    const styleImage = type === 'image' && { backgroundImage: `url(${imageUrl})` };
    const warpStyle = {
      ...style,
      ...styleImage,
      ...styleShape,
    };

    return (
      <div className={wrapCls} style={warpStyle}>
        {/* <div className={`${prefixCls}-main`}></div> */}
        <div className={contentCls}>{this.renderContent()}</div>

        {disabled && <div className={`${prefixCls}-disabled`}></div>}
      </div>
    );
  }

  renderBasic() {
    const {
      // - basic
      className,
      prefixCls,
      style,
      disabled,
      // - pre
      size,
      shape,
      type,
      // - custom
      imageUrl,
    } = this.props;

    let styleShape;
    let clsShape;
    const round = getRound(shape);
    if (round) {
      styleShape = { borderRadius: round };
    } else if (['circle', 'square'].includes(String(shape))) {
      clsShape = `${prefixCls}-${shape}`;
    }
    // debugger;
    const clsSize = `${prefixCls}-${size}`;
    // const clsShape = `${prefixCls}-${shape}`;
    const clsType = `${prefixCls}-${type}`;
    const wrapCls = classNames(prefixCls, className, clsSize, clsShape, clsType, {});
    const contentCls = classNames(`${prefixCls}-content`, `${clsType}-content`);

    const styleImage = type === 'image' && { backgroundImage: `url(${imageUrl})` };
    const warpStyle = {
      ...style,
      ...styleImage,
      ...styleShape,
    };

    return (
      <div className={wrapCls} style={warpStyle}>
        {/* <div className={`${prefixCls}-main`}></div> */}
        <div className={contentCls}>{this.renderContent()}</div>

        {disabled && <div className={`${prefixCls}-disabled`}></div>}
      </div>
    );
  }

  renderText() {
    const { children } = this.props;
    return <div className="txt">{children?.toString().substr(0, 1)}</div>;
  }

  renderImage() {
    /* const { imageUrl } = this.props;
    return <div className="image" style={{
      'backgroundImage': `url(${imageUrl})`
    }}>
    </div>; */
    return null;
  }

  renderIcon() {
    const { prefixCls, icon, size } = this.props;
    if (getObjType(icon) === '[object String]') {
      const iconType = icon as string;
      return <Icon type={iconType} className={`${prefixCls}-icon-font`} />;
    }
    if (getObjType(icon) === '[object Object]') {
      const iconNode = icon as IconProps;
      if ('props' in iconNode) {
        return <div className={`${prefixCls}-icon-custom icon-${size}`}> {icon} </div>;
      }
      const iconProps = icon as IconProps;
      return <Icon {...iconProps} className={`${prefixCls}-icon-font`} />;
    }
    return null;
  }

  renderContent() {
    const { type } = this.props;
    let content;
    switch (type) {
      case 'text':
        content = this.renderText();
        break;
      case 'image':
        content = this.renderImage();
        break;
      case 'icon':
        content = this.renderIcon();
        break;
      default:
        break;
    }

    return content;
  }
}

export default Avatar;
