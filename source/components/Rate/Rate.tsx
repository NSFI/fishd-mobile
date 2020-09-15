// import classnames from 'classnames';
import * as React from 'react';
import RcRate from 'rc-rate';
import 'rc-rate/assets/index.css';
import Icon from '../Icon';
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
    character: () => <Icon type="fm-star-outline" />,
  };

  render() {
    const { prefixCls, style, ...rest } = this.props;
    const sizeCls = { lg: `${prefixCls}-lg`, md: `${prefixCls}-md`, sm: `${prefixCls}-sm` }[
      this.props.size as SizeType
    ];

    return (
      <div className={`${sizeCls} ${this.props.disabled ? `${prefixCls}-disable` : `${prefixCls}-readonly`}`}>
        {
          {
            normal: <RcRate prefixCls={prefixCls} {...rest} disabled={this.props.readonly || this.props.disabled} />,
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
                        item === 'up' ? <Icon type="fm-dianzan-up" /> : <Icon type="fm-dianzan-down" />
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
