import Radio from './Radio';
import RadioGroup from './RadioGroup';
export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './RadioGroup'

type CompoundedType = typeof Radio & {
  Group: typeof RadioGroup;
};

const Compounded = Radio as CompoundedType;
Compounded.Group = RadioGroup;

export default Compounded;
