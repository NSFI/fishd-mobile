import React, { useRef, useState, useCallback, useContext } from 'react';
import classnames from 'classnames';
import { Field, FormInstance } from 'rc-field-form';
import FieldContext from 'rc-field-form/lib/FieldContext';
import { FieldProps } from 'rc-field-form/lib/Field';
import { Meta, InternalNamePath } from 'rc-field-form/lib/interface';
import { FormContext, NoStyleItemContext } from './context';
import { devWarning } from '../../utils/log';
import { toArray } from '../../utils/base';

import List from '../List';

const classPrefix = `fm-form-item`;
const NAME_SPLIT = '__SPLIT__';

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type FormItemProps = FieldProps & {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  labelWidth?: string;
  layout?: 'vertical' | 'horizontal';
  hasFeedback?: boolean;
  required?: boolean;
  disabled?: boolean;
  noStyle?: boolean;
  hidden?: boolean;
  extra?: React.ReactNode;
  children: ChildrenType;
  onClick?: (e: EventTarget) => void;
};

export type FormItemLayoutProps = Pick<
  FormItemProps,
  | 'className'
  | 'style'
  | 'layout'
  | 'required'
  | 'disabled'
  | 'label'
  | 'labelWidth'
  | 'hidden'
  | 'hasFeedback'
  | 'extra'
  | 'onClick'
> & {
  htmlFor?: string;
  errors?: string[];
};

interface MemoInputProps {
  value: any;
  update: number;
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const MemoInput = React.memo(
  ({ children }: MemoInputProps) => children as JSX.Element,
  (prev, next) => prev.value === next.value && prev.update === next.update,
);

const FormItemLayout: React.FC<FormItemLayoutProps> = props => {
  const { className, style, label, labelWidth, extra, htmlFor, required, errors, children } = props;
  const context = useContext(FormContext);
  const hasFeedback = props.hasFeedback || context.hasFeedback;
  const layout = props.layout || context.layout;
  const errorMessage = errors && errors.length > 0 ? errors[0] : null;

  const labelStyle: React.CSSProperties = {};
  if (layout === 'horizontal') {
    labelStyle.width = labelWidth || context.labelWidth;
  } else {
    labelStyle.width = 'auto';
  }
  const labelElement = label ? (
    <label className={`${classPrefix}__label`} htmlFor={htmlFor} style={labelStyle}>
      {label}
      {required && <span className={`${classPrefix}__required`}>*</span>}
    </label>
  ) : null;

  const FormItemClassName = classnames(classPrefix, {}, className);
  return (
    <List.Item
      className={FormItemClassName}
      style={style}
      title={layout === 'vertical' ? labelElement : undefined}
      prefix={layout === 'vertical' ? undefined : labelElement}
      extra={extra}
      description={errorMessage && hasFeedback ? <div className={`${classPrefix}__error`}>{errorMessage}</div> : null}
    >
      {children}
    </List.Item>
  );
};

const FormItem: React.FC<FormItemProps> = props => {
  const {
    /** Layout props */
    className,
    style,
    label,
    layout,
    hasFeedback,
    noStyle,
    hidden,
    disabled,
    required,
    extra,

    /** Field props */
    name,
    shouldUpdate,
    dependencies,
    rules,
    trigger = 'onChange',
    validateTrigger,
    children,
    onClick,
    ...fieldProps
  } = props;

  const { validateTrigger: contextValidateTrigger } = React.useContext(FieldContext);
  const mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;

  const updateRef = useRef(0);
  updateRef.current += 1;

  const [subMetas, setSubMetas] = useState<Record<string, Meta>>({});

  /** 无样式 FormItem Meta 委托至上级 */
  const notifyParentMetaChange = useContext(NoStyleItemContext);
  const onMetaChange = (meta: Meta & { destroy?: boolean }) => {
    if (noStyle && notifyParentMetaChange) {
      const namePath = meta.name;
      notifyParentMetaChange(meta, namePath);
    }
  };

  /** 监听内层无样式 FormItem 上抛Meta信息 */
  const onSubMetaChange = useCallback(
    (subMeta: Meta & { destroy?: boolean }, namePath: InternalNamePath) => {
      setSubMetas(prevSubMetas => {
        const nextSubMetas = { ...prevSubMetas };
        const nameKey = namePath.join(NAME_SPLIT);
        if (subMeta.destroy) {
          delete nextSubMetas[nameKey];
        } else {
          nextSubMetas[nameKey] = subMeta;
        }
        return nextSubMetas;
      });
    },
    [setSubMetas],
  );

  const renderLayout = (baseChildren: React.ReactNode, fieldId?: string, meta?: Meta, isRequired?: boolean) => {
    if (noStyle && !hidden) {
      return baseChildren;
    }

    /** 当前Field Error */
    const curErrors = meta?.errors ?? [];

    /** 合并Error */
    const errors = Object.keys(subMetas).reduce((subErrors: string[], key: string) => {
      const curSubErrors = subMetas[key]?.errors ?? [];
      if (curSubErrors.length) {
        subErrors = [...subErrors, ...curSubErrors];
      }
      return subErrors;
    }, curErrors);

    return (
      <FormItemLayout
        className={className}
        style={style}
        label={label}
        extra={extra}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        errors={errors}
        onClick={onClick}
        hidden={hidden}
        layout={layout}
      >
        <NoStyleItemContext.Provider value={onSubMetaChange}>{baseChildren}</NoStyleItemContext.Provider>
      </FormItemLayout>
    );
  };

  const isRenderProps = typeof children === 'function';
  return (
    <Field
      {...fieldProps}
      name={name}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
      onMetaChange={onMetaChange}
    >
      {(control, meta, context) => {
        let childNode: React.ReactNode = null;
        const isRequired =
          required !== undefined
            ? required
            : !!(
                rules &&
                rules.some(rule => {
                  if (rule && typeof rule === 'object' && rule.required) {
                    return true;
                  }
                  return false;
                })
              );
        const fieldId = (toArray(name).length && meta ? meta.name : []).join('_');
        if (shouldUpdate && dependencies) {
          devWarning('Form.Item', "`shouldUpdate` and `dependencies` shouldn't be used together.");
        }
        if (isRenderProps) {
          /** 是渲染函数 */
          if ((shouldUpdate || dependencies) && !name) {
            childNode = (children as RenderChildren)(context);
          } else {
            if (!(shouldUpdate || dependencies)) {
              devWarning('Form.Item', '`children` of render props only work with `shouldUpdate` or `dependencies`.');
            }
            if (name) {
              devWarning('Form.Item', "Do not use `name` with `children` of render props since it's not a field.");
            }
          }
        } else if (dependencies && !name) {
          devWarning('Form.Item', 'Must set `name` or use render props when `dependencies` is set.');
        } else if (React.isValidElement(children)) {
          if (children.props.defaultValue) {
            devWarning(
              'Form.Item',
              '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.',
            );
          }

          const childProps = { ...children.props, ...control };
          if (!childProps.id) {
            childProps.id = fieldId;
          }
          // We should keep user origin event handler
          const triggers = new Set<string>([...toArray<string>(trigger), ...toArray<string>(mergedValidateTrigger)]);

          triggers.forEach(eventName => {
            childProps[eventName] = (...args: any[]) => {
              control[eventName]?.(...args);
              children.props[eventName]?.(...args);
            };
          });

          childNode = (
            <MemoInput value={control[props.valuePropName || 'value']} update={updateRef.current}>
              {React.cloneElement(children, childProps)}
            </MemoInput>
          );
        } else {
          if (name) {
            devWarning(
              'Form.Item',
              '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.',
            );
          }
          childNode = children;
        }

        return renderLayout(childNode, fieldId, meta, isRequired);
      }}
    </Field>
  );
};

export default FormItem;
