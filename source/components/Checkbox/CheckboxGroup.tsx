import React from 'react';
import { useControllableValue } from 'ahooks';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import { CheckboxValue } from './Checkbox';

import { mergeProps } from '../../utils/merge-props';

export interface CheckboxGroupProps {
  value?: CheckboxValue | null;
  defaultValue?: CheckboxValue | null;
  disabled?: boolean;
  onChange?: (value: CheckboxValue) => void;
}

const defaultProps = {
  defaultValue: [],
  disabled: false,
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = p => {
  const props = mergeProps(defaultProps, p);
  let [value, setValue] = useControllableValue(props);

  value = value || [];
  return (
    <CheckboxGroupContext.Provider
      value={{
        value,
        check: v => {
          setValue([...value, v]);
        },
        uncheck: v => {
          setValue(value.filter(item => item !== v));
        },
        disabled: props.disabled,
      }}
    >
      {props.children}
    </CheckboxGroupContext.Provider>
  );
};

export default CheckboxGroup;
