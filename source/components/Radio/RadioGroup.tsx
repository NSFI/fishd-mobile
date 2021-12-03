import React from 'react';
import { useControllableValue } from 'ahooks';
import { RadioGroupContext } from './RadioGroupContext';
import { RadioValue } from './Radio';

import { mergeProps } from '../../utils/merge-props';

export interface RadioGroupProps {
  value?: RadioValue | null;
  defaultValue?: RadioValue | null;
  disabled?: boolean;
  onChange?: (value: RadioValue) => void;
}

const defaultProps = {
  defaultValue: null,
  disabled: false,
};

const RadioGroup: React.FC<RadioGroupProps> = p => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = useControllableValue(props);
  return (
    <RadioGroupContext.Provider
      value={{
        value: value === null ? [] : [value],
        check: v => {
          setValue(v);
        },
        uncheck: () => {},
        disabled: props.disabled,
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
