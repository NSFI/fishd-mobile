import { useForm } from 'rc-field-form';
import Form from './Form';
import FormItem from './FormItem';
import FormList from './FormList';
import ErrorList from './ErrorList';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { FormInstance } from 'rc-field-form';
export type { FormProps } from './form';
export type FormLayout = 'vertical' | 'horizontal';

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  List: FormList,
  ErrorList,
  useForm,
});
