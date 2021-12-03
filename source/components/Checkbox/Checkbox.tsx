import React, { useContext } from 'react';
import classnames from 'classnames';
import { useControllableValue } from 'ahooks';
import { CheckboxGroupContext } from './CheckboxGroupContext';

import Icon from '../Icon';

export type CheckboxValue = string | number;
export type CheckboxProps = {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: CheckboxValue;
  block?: boolean;
  id?: string;
  icon?: (checked: boolean) => React.ReactNode;
  onChange?: (checked: boolean) => void;
};

const classPrefix = `fm-checkbox`;

const Checkbox: React.FC<CheckboxProps> = props => {
  let { className, style, value, disabled } = props;
  let [checked, setChecked] = useControllableValue(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultChecked',
    valuePropName: 'checked',
  });
  const groupContext = useContext(CheckboxGroupContext);

  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value);
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value as CheckboxValue);
      } else {
        groupContext.uncheck(value as CheckboxValue);
      }
      props.onChange?.(checked);
    };
    disabled = disabled || groupContext.disabled;
  }

  const CheckboxClassName = classnames(classPrefix, className, {
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
    <label className={CheckboxClassName} style={style}>
      <input
        type="checkbox"
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

export default Checkbox;
