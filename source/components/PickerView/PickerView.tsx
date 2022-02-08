import React from 'react';
import classNames from 'classnames';
import { useControllableValue, useDebounceFn } from 'ahooks';
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

export type PickerValueExtend = {
  items: (PickerColumnItem | null)[];
};

export type PickerViewColumn = (PickerColumnItem | string)[];

export interface PickerViewProps {
  className?: string;
  style?: React.CSSProperties;
  columns: PickerViewColumn[] | ((value: PickerColumnValue[]) => PickerViewColumn[]);
  value?: PickerColumnValue[];
  defaultValue?: PickerColumnValue[];
  onChange?: (value: PickerColumnValue[], extend: PickerValueExtend) => void;
  onSelect?: (item?: PickerColumnItem) => void;
}

const defaultProps = {
  columns: [],
  defaultValue: [],
};

const classPrefix = `fm-picker-view`;

const PickerView: React.FC<PickerViewProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className } = props;
  const PickerViewClassName = classNames(classPrefix, {}, className);
  const { run } = useDebounceFn(
    value => {
      props.onChange?.([...value], generateValueExtend(value));
    },
    {
      wait: 0,
      leading: false,
      trailing: true,
    },
  );

  const [state, setState] = useControllableValue<PickerColumnValue[]>(
    { ...props, onChange: run },
    {
      defaultValue: props.defaultValue,
    },
  );

  const columns = useColumns(props.columns, state);
  const generateValueExtend = usePickerValueExtend(columns);
  const handleSelect = (value: PickerColumnValue, index: number) => {
    /** TODO: 待优化，由于事件队列的原因，handleSelect多次触发，但是state无法获取最新值
     * 例如：两列情况下无初始选择值时，会依次触发
     * [x]
     * [undefined, y]
     * [x, y]
     */
    state[index] = value;
    setState(state)
    const selectItem = columns[index].find(v => v.value === value);
    props.onSelect?.(selectItem);
  };

  return (
    <div className={PickerViewClassName}>
      {columns.map((column, index) => {
        return <PickerColumn key={index} index={index} column={column} value={state[index]} onSelect={handleSelect} />;
      })}
      <div className={`${classPrefix}__indicator`}>
        <div className={`${classPrefix}__indicator-top`}></div>
        <div className={`${classPrefix}__indicator-mid`}></div>
        <div className={`${classPrefix}__indicator-bottom`}></div>
      </div>
    </div>
  );
};

export default PickerView;
