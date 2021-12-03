import Input from './Input';
import TextArea from './TextArea';

type CompoundedType = typeof Input & {
  TextArea: typeof TextArea;
};

const Compounded = Input as CompoundedType;
Compounded.TextArea = TextArea;

export type { InputProps, InputRef } from './Input';
export type { TextAreaProps, TextAreaRef } from './TextArea';

export default Compounded;
