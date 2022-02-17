import React, { useEffect, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import { useDebounceEffect } from 'ahooks';
import PickerColumn from './PickerColumn';
import { useColumns } from './use-columns';
import { mergeProps } from '../../utils/merge-props';
import { usePickerValueExtend } from './use-picker-value-extend';

export type PickerColumnValue = string | null;

export type PickerColumnItem = {
  label: React.ReactNode;
  value: string;
  loading?: boolean;
};

export type PickerViewColumn = (PickerColumnItem | string)[];

export type PickerValueExtend = {
  items: (PickerColumnItem | null)[];
};

export interface PickerViewProps {
  className?: string;
  style?: React.CSSProperties;
  columns: PickerViewColumn[] | ((value: PickerColumnValue[]) => PickerViewColumn[]);
  value?: PickerColumnValue[];
  defaultValue?: PickerColumnValue[];
  onChange?: (value: PickerColumnValue[], extend: PickerValueExtend) => void;
  onItemSelect?: (
    value: PickerColumnValue,
    extendItem: PickerColumnItem | undefined,
    columnIndex: number,
    itemIndex: number,
  ) => void;
}

export type PickerViewRef = {
  generateValueExtend: any;
};

const defaultProps = {
  columns: [],
  defaultValue: [],
};

const classPrefix = `fm-picker-view`;

const PickerView: React.ForwardRefRenderFunction<PickerViewRef, PickerViewProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const { className } = props;
  const PickerViewClassName = classNames(classPrefix, {}, className);
  const [innerValue, setInnerValue] = useState<PickerColumnValue[]>(
    props.value === undefined ? props.defaultValue : props.value,
  );

  const columns = useColumns(props.columns, innerValue);
  const generateValueExtend = usePickerValueExtend(columns);
  const handleSelect = (value: PickerColumnValue, columnIndex: number, itemIndex: number) => {
    setInnerValue(prev => {
      const next = [...prev];
      next[columnIndex] = value;
      return next;
    });

    const extendItem = columns[columnIndex].find(v => v.value === value);
    props.onItemSelect?.(value, extendItem, columnIndex, itemIndex);
  };

  useImperativeHandle(ref, () => ({
    generateValueExtend,
  }));

  /** sync props value */
  useDebounceEffect(
    () => {
      if (props.value === innerValue) return;
      props.onChange?.(innerValue, generateValueExtend(innerValue));
    },
    [innerValue],
    {
      wait: 0,
      leading: false,
      trailing: true,
    },
  );

  /** sync innerValue */
  useEffect(() => {
    if (props.value === undefined) {
      return;
    }
    if (props.value === innerValue) {
      return;
    }
    setInnerValue(props.value);
  }, [props.value]);

  return (
    <div className={PickerViewClassName}>
      {columns.map((column, index) => {
        return (
          <PickerColumn key={index} index={index} column={column} value={innerValue[index]} onSelect={handleSelect} />
        );
      })}
      <div className={`${classPrefix}__indicator`}>
        <div className={`${classPrefix}__indicator-top`}></div>
        <div className={`${classPrefix}__indicator-mid`}></div>
        <div className={`${classPrefix}__indicator-bottom`}></div>
      </div>
    </div>
  );
};

export default React.forwardRef(PickerView);
