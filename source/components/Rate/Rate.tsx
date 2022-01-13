// import classNames from 'classnames';
import * as React from 'react';
import RcRate from 'rc-rate';
import 'rc-rate/assets/index.css';
import Icon, { IconProps } from '../Icon';
import { RatePropsType, ThumbType, ModeType, SizeType } from './PropsType';

export interface RateProps extends Partial<RatePropsType> {
  prefixCls?: string;
  className?: string;
  style?: any;
}

class Rate extends React.Component<RateProps, any> {
  static defaultProps = {
    prefixCls: 'fm-rate',
    count: 5,
    value: 0,
    size: 'lg',
    mode: 'normal',
    defaultValue: 0,
    allowHalf: false,
    allowClear: true,
    readOnly: false,
    disabled: false,
    onThumbChange: (val: ThumbType) => val,
    character: <Icon type="star" fontSize={30} />,
  };

  render() {
    const fontSize = { lg: 30, md: 22, sm: 15 }[this.props.size as SizeType];
    const { prefixCls, style, ...rest } = this.props;
    let characterProps: IconProps = { type: 'star' };
    if (this.props.character && typeof this.props.character === 'function') {
      characterProps = (this.props.character as Function)().props;
    } else {
      characterProps = (this.props.character as any).props;
    }

    return (
      <div className={`${this.props.disabled ? `${prefixCls}-disable` : `${prefixCls}-readonly`}`}>
        {
          {
            normal: (
              <RcRate
                prefixCls={prefixCls}
                {...rest}
                character={() => <Icon type={characterProps.type} fontSize={fontSize} />}
                disabled={this.props.readonly || this.props.disabled}
              />
            ),
            thumb: (
              <div className={this.props.className}>
                {(['up', 'down'] as ThumbType[]).map((item: ThumbType) => (
                  <span
                    key={item}
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      let thumb: ThumbType = '';
                      if (!this.props.onThumbChange) return;

                      if (this.props.thumb === item) {
                        thumb = `${item}cancel` as ThumbType;
                      } else {
                        thumb = item;
                      }
                      this.props.onThumbChange(thumb);
                    }}
                  >
                    <RcRate
                      count={1}
                      allowClear
                      allowHalf={false}
                      prefixCls={prefixCls}
                      character={() =>
                        item === 'up' ? (
                          <Icon type="like" fontSize={fontSize} />
                        ) : (
                          <Icon type="dislike" fontSize={fontSize} />
                        )
                      }
                      style={this.props.style}
                      disabled={this.props.readonly || this.props.disabled}
                      value={this.props.thumb === item ? 1 : 0}
                    />
                  </span>
                ))}
              </div>
            ),
          }[this.props.mode as ModeType]
        }
      </div>
    );
  }
}

export default Rate;
