import * as React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import DatePickerLocaleZh from 'rmc-date-picker/lib/locale/zh_CN';
import DatePickerLocaleEn from 'rmc-date-picker/lib/locale/en_US';

import { DatePickerViewPropsType } from './PropsType';

export default class DatePickerView extends React.Component<DatePickerViewPropsType, any> {
  static defaultProps = {
    mode: 'datetime',
    extra: '请选择',
    prefixCls: 'fm-picker',
    pickerPrefixCls: 'fm-picker-col',
    minuteStep: 1,
    use12Hours: false,
    local: 'zh_CN',
  };

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props } = this;

    // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
    // Here Use `date` instead of `defaultDate`, make it controlled fully.
    return (
      <RCDatePicker
        {...props}
        locale={props.local === 'zh_CN' ? DatePickerLocaleZh : DatePickerLocaleEn}
        date={props.value}
        onDateChange={props.onChange}
        onValueChange={props.onValueChange}
        onScrollChange={props.onScrollChange}
      />
    );
  }
}
