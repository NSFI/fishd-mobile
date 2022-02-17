import Radio from './Radio';
import RadioGroup from './RadioGroup';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './RadioGroup'

export default attachPropertiesToComponent(Radio, {
  Group: RadioGroup
});
