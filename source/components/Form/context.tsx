import React from 'react';
import { Meta, InternalNamePath } from 'rc-field-form/lib/interface';

export type FormContextType = {
  hasFeedback: boolean;
  layout: 'vertical' | 'horizontal';
  labelWidth: string;
};

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  hasFeedback: true,
  layout: 'vertical',
  labelWidth: '6em',
};

export const FormContext = React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT);

export type OnSubMetaChange = (meta: Meta & { destroy?: boolean }, namePath: InternalNamePath) => void;
export const NoStyleItemContext = React.createContext<OnSubMetaChange | null>(null);
