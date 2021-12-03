import React from 'react';
import classnames from 'classnames';
import RcForm, { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import { FormContext, FormContextType } from './context';

import List from '../List';

export type FormProps = RcFormProps &
  Partial<FormContextType> & {
    className?: string;
    style?: React.CSSProperties;
    labelWidth?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
  };

const classPrefix = `fm-form`;

const Form: React.ForwardRefRenderFunction<FormInstance, FormProps> = (props, ref) => {
  const {
    className,
    style,
    layout = 'vertical',
    hasFeedback = true,
    labelWidth = '6em',
    children,
    header,
    footer,
    ...formProps
  } = props;
  const FormClassName = classnames(
    classPrefix,
    {
      [`${classPrefix}--vertical`]: layout === 'vertical',
      [`${classPrefix}--horizontal`]: layout === 'horizontal',
    },
    className,
  );

  return (
    <RcForm ref={ref} className={FormClassName} style={style} {...formProps}>
      {header && <div className={`${classPrefix}__header`}>{header}</div>}
      <List>
        <FormContext.Provider
          value={{
            labelWidth,
            hasFeedback,
            layout,
          }}
        >
          {children}
        </FormContext.Provider>
      </List>
      {footer && <div className={`${classPrefix}__footer`}>{footer}</div>}
    </RcForm>
  );
};

export default React.forwardRef<FormInstance, FormProps>(Form);
