import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';
import Popup, { PopupProps } from '../Popup';
import PickerView, { PickerColumnValue, PickerValueExtend, PickerViewProps, PickerViewRef } from '../PickerView';
import { mergeProps } from '../../utils/merge-props';

export type PickerProps = {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  visible?: boolean;
  value?: PickerColumnValue[];
  defaultValue?: PickerColumnValue[];
  confirmText?: string;
  cancelText?: string;
  onSelect?: (value: PickerColumnValue[], extendValue: PickerValueExtend) => void;
  onConfirm?: (value: PickerColumnValue[], extendValue: PickerValueExtend) => void;
  onCancel?: () => void;
  onClose?: () => void;
} & Pick<PopupProps, 'afterShow' | 'afterClose' | 'getContainer' | 'mask'> &
  Pick<PickerViewProps, 'columns'>;

const classPrefix = `fm-picker`;
const defaultProps = {
  visible: false,
  confirmText: '确定',
  cancelText: '取消',
};

const Picker: React.FC<PickerProps> = p => {
  const props = mergeProps(defaultProps, p);
  const PickerClassName = classNames(classPrefix, {}, props.className);
  const pickerViewRef = useRef<PickerViewRef>(null);
  const [value, setValue] = useControllableValue({
    ...props,
    onChange: value => {
      props.onConfirm?.(value, pickerViewRef?.current?.generateValueExtend?.(value));
    },
  });
  const [innerValue, setInnerValue] = useState(value);

  /** sync innerValue */
  useEffect(() => {
    if (value === innerValue) return;
    setInnerValue(value);
  }, [value]);

  const handleCancel = () => {
    props.onCancel?.();
    props.onClose?.();
  };

  const handleConfirm = () => {
    setValue(innerValue);
    props.onClose?.();
  };

  const handleValueChange = (value: PickerColumnValue[], extendValue: PickerValueExtend) => {
    setInnerValue(value);
    props.onSelect?.(value, extendValue);
  };

  return (
    <Popup visible={props.visible} onMaskClick={handleCancel}>
      <div className={PickerClassName}>
        <div className={`${classPrefix}__header`}>
          <a className={`${classPrefix}__cancel`} onClick={handleCancel}>
            {props.cancelText}
          </a>
          <div className={`${classPrefix}__title`}>{props.title}</div>
          <a className={`${classPrefix}__confirm`} onClick={handleConfirm}>
            {props.confirmText}
          </a>
        </div>
        <div className={`${classPrefix}__body`}>
          <PickerView
            ref={pickerViewRef}
            value={innerValue}
            columns={props.columns}
            onChange={handleValueChange}
          ></PickerView>
        </div>
      </div>
    </Popup>
  );
};

export default Picker;
