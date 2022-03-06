import React, { useState } from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';
import LoadMore from '../LoadMore';
import { getNativeAttr, NativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/merge-props';

export type ValueType = boolean | number | string;

export type SwitchProps = {
  checked?: ValueType;
  defaultChecked?: ValueType;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  checkedValue: ValueType;
  uncheckedValue: ValueType;
  checkedText?: React.ReactNode;
  uncheckedText?: React.ReactNode;
  beforeChange?: (val: ValueType) => Promise<void>;
} & NativeProps<'--fm-switch-color' | '--fm-switch-size' | '--fm-switch-width' | '--fm-switch-height'>;

const classPrefix = `fm-switch`;
const defaultProps = {
  style: {},
};

const Switch: React.FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    className,
    style,
    loading,
    disabled,
    checkedText,
    uncheckedText,
    checkedValue = true,
    uncheckedValue = false,
  } = props;
  const nativeAttr = getNativeAttr(props);
  const [changing, setChanging] = useState(false);
  const [checked, setChecked] = useControllableValue<ValueType>(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });

  const SwitchClassName = classNames(
    classPrefix,
    {
      [`${classPrefix}--checked`]: checked === checkedValue,
      [`${classPrefix}--disabled`]: disabled || loading || changing,
      [`${classPrefix}--loading`]: loading || changing,
    },
    className,
  );

  const onClick = async () => {
    if (loading || disabled || changing) {
      return;
    }

    const nextChecked = checked === checkedValue ? uncheckedValue : checkedValue;

    if (props.beforeChange) {
      try {
        setChanging(true);
        await props.beforeChange(nextChecked);
        setChecked(nextChecked);
        setChanging(false);
      } catch (error) {
        setChanging(false);
        throw error;
      }
    } else {
      setChecked(nextChecked);
    }
  };

  const textTip = checked === checkedValue ? checkedText : uncheckedText;

  const varStyle = {
    '--fm-switch-color': props.color
  }

  return (
    <div className={SwitchClassName} style={{ ...style, ...varStyle }} onClick={onClick} {...nativeAttr}>
      <div className={`${classPrefix}__checkbox`}>
        {textTip && <div className={`${classPrefix}__text`}>{textTip}</div>}
        <div className={`${classPrefix}__node`}>
          {props.loading || changing ? <LoadMore className={`${classPrefix}__loading`}></LoadMore> : null}
        </div>
      </div>
    </div>
  );
};

export default Switch;
