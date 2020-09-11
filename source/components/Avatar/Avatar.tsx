import classnames from 'classnames';
import * as React from 'react';
import { AvatarPropsType } from './PropsType';

import Icon from '../Icon';

function getRound(shape) {
  const matchStr = /^[0-9]+(px|%|em)?$/;
  const match = (matchStr.test(shape) && matchStr.exec(shape)) || [];
  let round = match[0];
  /* eslint-disable  no-restricted-globals */
  round = round && !isNaN(Number(round)) ? `${round}px` : round;
  return round;
}

export interface AvatarProps extends AvatarPropsType {
  prefixCls?: string;
  className?: string;
  imageUrl?: string;
  style?: React.CSSProperties;
  icon?: string | React.ReactNode;
  disabled?: boolean;
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
    imageUrl: 'https://unsplash.it/300/300', // 'http://placekitten.com/300/300'
  };

  render() {
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
    const wrapCls = classnames(prefixCls, className, clsSize, clsShape, clsType, {});
    const contentCls = classnames(`${prefixCls}-content`, `${clsType}-content`);

    const styleImage = type === 'image' && { backgroundImage: `url(${imageUrl})` };
    const warpStyle = {
      ...style,
      ...styleImage,
      ...styleShape,
    };

    return (
      <div className={wrapCls} style={warpStyle}>
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
    if (Object.prototype.toString.call(icon) === '[object String]') {
      return <Icon type="user" className={`${prefixCls}-icon-font`} size={size} />;
    }

    return <div className={`${prefixCls}-icon-custom icon-${size}`}> {icon} </div>;
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
