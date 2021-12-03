import React from 'react';
import { List as RcFieldList } from 'rc-field-form';
import { ValidatorRule, StoreValue } from 'rc-field-form/lib/interface';

export interface FormListFieldData {
  name: number;
  key: number;
  fieldKey: number;
}

export interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
}

export type ListProps = {
  prefixCls?: string;
  name: string | number | (string | number)[];
  rules?: ValidatorRule[];
  initialValue?: any[];
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: { errors: React.ReactNode[]; warnings: React.ReactNode[] },
  ) => React.ReactNode;
}

const List: React.FC<ListProps> = props => {
  const { children, ...restProps } = props;
  return (
    <RcFieldList {...restProps}>
      {(fields, operation, meta) => {
        return children(
          fields.map(field => ({ ...field, fieldKey: field.key })),
          operation,
          {
            errors: meta.errors,
            warnings: meta.warnings,
          },
        );
      }}
    </RcFieldList>
  );
};

export default List;
