import React, { useContext } from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';
import { RadioGroupContext } from './RadioGroupContext';

import Icon from '../Icon';
import { getNativeAttr, NativeProps } from '../../utils/native-props';

export type RadioValue = string | number;
export type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  block?: boolean;
  id?: string;
  icon?: (checked: boolean) => React.ReactNode;
  onChange?: (checked: boolean) => void;
} & NativeProps<'fm-radio-icon-size' | 'fm-radio-font-size' | 'fm-radio-gap'>;

const classPrefix = `fm-radio`;

const Radio: React.FC<RadioProps> = props => {
  let { className, style, value, disabled } = props;
  const nativeAttr = getNativeAttr(props)
  let [checked, setChecked] = useControllableValue(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultChecked',
    valuePropName: 'checked',
  });
  const groupContext = useContext(RadioGroupContext);

  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value);
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value as RadioValue);
      } else {
        groupContext.uncheck(value as RadioValue);
      }
      props.onChange?.(checked);
    };
    disabled = disabled || groupContext.disabled;
  }

  const RadioClassName = classNames(classPrefix, className, {
    [`${classPrefix}-checked`]: checked,
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-block`]: props.block,
  });

  const renderIcon = () => {
    if (props.icon) {
      return <div>{props.icon(checked)}</div>;
    }

    return <div className={`${classPrefix}__icon`}>{checked && <Icon type="check"></Icon>}</div>;
  };

  return (
    <label className={RadioClassName} style={style} {...nativeAttr}>
      <input
        type="radio"
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked);
        }}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        disabled={disabled}
        id={props.id}
      />
      {renderIcon()}
      {props.children && <div className={`${classPrefix}__content`}>{props.children}</div>}
    </label>
  );
};

export default Radio;
