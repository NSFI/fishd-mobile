import React, { useState } from 'react';
import classnames from 'classnames';
import { useControllableValue } from 'ahooks';
import Icon from '../Icon';

export type ValueType = boolean | number | string;

export type SwitchProps = {
  className?: string;
  style?: React.CSSProperties;
  checked?: ValueType;
  defaultChecked?: ValueType;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  checkedValue: ValueType;
  uncheckedValue: ValueType;
  checkedText?: string;
  uncheckedText?: string;
  checkedTextColor?: string;
  uncheckedTextColor?: string;
  beforeChange?: (val: ValueType) => Promise<void>;
};

const classPrefix = `fm-switch`;

const Switch: React.FC<SwitchProps> = props => {
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
  const [changing, setChanging] = useState(false);
  const [checked, setChecked] = useControllableValue<ValueType>(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });

  const SwitchClassName = classnames(
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

  const customStyle: React.CSSProperties = {};

  if (checked && props.color) {
    customStyle.backgroundColor = props.color;
  }

  const textStyle: React.CSSProperties = {};

  if (checked && props.checkedTextColor) {
    textStyle.color = props.checkedTextColor;
  }

  if (!checked && props.uncheckedTextColor) {
    textStyle.color = props.uncheckedTextColor;
  }

  return (
    <div className={SwitchClassName} style={style} onClick={onClick}>
      <div className={`${classPrefix}__checkbox`} style={customStyle}>
        {textTip && (
          <div className={`${classPrefix}__text`} style={textStyle}>
            {textTip}
          </div>
        )}
      </div>
      {props.loading || changing ? <Icon className={`${classPrefix}__loading`} type="loading" /> : null}
    </div>
  );
};

export default Switch;
