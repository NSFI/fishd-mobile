import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';
export type { CheckboxProps } from './Checkbox';
export type { CheckboxGroupProps } from './CheckboxGroup'

export default attachPropertiesToComponent(Checkbox, {
  Group: CheckboxGroup
});
