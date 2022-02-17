import Input from './Input';
import TextArea from './TextArea';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { InputProps, InputRef } from './Input';
export type { TextAreaProps, TextAreaRef } from './TextArea';

export default attachPropertiesToComponent(Input, {
  TextArea
});
