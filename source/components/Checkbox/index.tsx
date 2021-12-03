import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
export type { CheckboxProps } from './Checkbox';
export type { CheckboxGroupProps } from './CheckboxGroup'

type CompoundedType = typeof Checkbox & {
  Group: typeof CheckboxGroup;
};

const Compounded = Checkbox as CompoundedType;
Compounded.Group = CheckboxGroup;

export default Compounded;
