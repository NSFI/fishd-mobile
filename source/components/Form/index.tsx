import { useForm } from 'rc-field-form';
import Form from './Form';
import FormItem from './FormItem';
import FormList from './FormList';
import ErrorList from './ErrorList'

export { FormProps } from './form';
export { FormInstance } from 'rc-field-form';
export type FormLayout = 'vertical' | 'horizontal';

type CompoundedType = typeof Form & {
  Item: typeof FormItem;
  List: typeof FormList;
  ErrorList: typeof ErrorList;
  useForm: typeof useForm;
};

const Compounded = Form as CompoundedType;
Compounded.Item = FormItem;
Compounded.List = FormList;
Compounded.ErrorList = ErrorList;
Compounded.useForm = useForm;

export default Form;
