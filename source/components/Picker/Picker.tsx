import React from 'react';
import RMCCascader from 'rmc-cascader/lib/Cascader';
import RMCPopupCascader from 'rmc-cascader/lib/Popup';
import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes';
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker';
import RMCPicker from 'rmc-picker/lib/Picker';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

export interface PickerData {
  value: string | number;
  label: React.ReactNode;
  children?: PickerData[];
}

export interface PickerProps extends IPopupPickerProps {
  className?: string;
  prefixCls?: string;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  data: PickerData[] | PickerData[][];
  cascade?: boolean;
  cols?: number;
  value?: any[];
  indicatorStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  onOk?: (value?: CascaderValue) => void;
  onChange?: (value?: CascaderValue) => void;
  onScrollChange?: (value?: any) => void;
  onPickerChange?: (value?: any) => void;
}

function getDefaultProps() {
  return {
    prefixCls: 'fm-picker',
    pickerPrefixCls: 'fm-picker-col',
    popupPrefixCls: 'fm-picker-popup',
    cols: 3,
    cascade: false,
    value: [],
    onChange() {},
  };
}

class Picker extends React.Component<PickerProps, any> {
  static defaultProps = getDefaultProps();

  isMultiPicker = () => {
    if (!this.props.data) {
      return false;
    }
    return Array.isArray(this.props.data[0]);
  };

  getCol = () => {
    const { data, pickerPrefixCls, indicatorStyle, itemStyle } = this.props;

    const formattedData = this.isMultiPicker() ? data : [data];

    return (formattedData as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker
          key={index}
          prefixCls={pickerPrefixCls}
          style={{ flex: 1 }}
          indicatorStyle={indicatorStyle}
          itemStyle={itemStyle}
        >
          {col.map(item => {
            return (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            );
          })}
        </RMCPicker>
      );
    });
  };

  onPickerChange = (v: any) => {
    if (this.props.onPickerChange) {
      this.props.onPickerChange(v);
    }
  };

  render() {
    const {
      children,
      value = [],
      popupPrefixCls,
      itemStyle,
      indicatorStyle,
      cascade,
      prefixCls,
      pickerPrefixCls,
      data,
      cols,
      ...restProps
    } = this.props;
    let picker;
    let popupMoreProps = {};
    if (cascade) {
      picker = (
        <RMCCascader
          prefixCls={prefixCls}
          pickerPrefixCls={pickerPrefixCls}
          data={data as PickerData[]}
          onChange={this.onPickerChange}
          cols={cols}
          indicatorStyle={indicatorStyle}
          pickerItemStyle={itemStyle}
        />
      );
    } else {
      picker = (
        <RMCMultiPicker prefixCls={prefixCls} style={{ flexDirection: 'row' }} onValueChange={this.onPickerChange}>
          {this.getCol()}
        </RMCMultiPicker>
      );
      popupMoreProps = {
        pickerValueProp: 'selectedValue',
        pickerValueChangeProp: 'onValueChange',
      };
    }
    return (
      <RMCPopupCascader
        cascader={picker}
        prefixCls={popupPrefixCls}
        value={value}
        dismissText="取消"
        okText="确定"
        transitionName="fm-slide-up"
        maskTransitionName="fm-fade"
        {...popupMoreProps}
        {...restProps}
      >
        {children || null}
      </RMCPopupCascader>
    );
  }
}

export default Picker;
