import React, { useState } from 'react';
import classNames from 'classnames';
import { useCascadeOptions } from './use-cascade-options';
import PickerView, { PickerViewProps } from '../PickerView';
import { mergeProps } from '../../utils/merge-props';
import { getColumns } from './get-columns';
import { extendOptions } from './extend-options';

export type CascadePickerOption = {
  label: string;
  value: string;
  leaf?: boolean;
  children?: CascadePickerOption[];
};

export type CascadePickerViewProps = {
  className?: string;
  style?: React.CSSProperties;
  options: CascadePickerOption[];
  lazy?: boolean;
  lazyLoad?: (CascadePickerOption) => Promise<CascadePickerOption[]>;
  onOptionsUpdate?: (CascadePickerOption) => void;
} & Omit<PickerViewProps, 'columns'>;

const classPrefix = `fm-cascade-picker-view`;
const defaultProps = {
  lazy: false,
};

const CascadePickerView: React.FC<CascadePickerViewProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className, options, lazy, lazyLoad, ...pickerViewProps } = props;
  const CascadePickerViewClassName = classNames(classPrefix, {}, className);
  const { valueItemRecord, depth } = useCascadeOptions(props.options);
  const [loadingNode, setLoadingNode] = useState<CascadePickerOption | null>(null);

  const handleSelect = async pickerItem => {
    try {
      if (!pickerItem || pickerItem.leaf || (pickerItem && pickerItem.children && pickerItem.children.length)) {
        return;
      }
      if (lazy && lazyLoad) {
        setLoadingNode(pickerItem);
        const nodes = await lazyLoad(pickerItem);
        // TODO: 特殊情况下，跨层级情况下存在value相同的项，需支持
        const newOptions = extendOptions({
          options,
          pickerItem,
          nodes,
        });
        props.onOptionsUpdate?.(newOptions);
        setLoadingNode(null);
      }
    } catch (error) {
      setLoadingNode(null);
    }
  };
  return (
    <PickerView
      className={CascadePickerViewClassName}
      {...pickerViewProps}
      columns={selected => getColumns({ selected, depth, options: props.options, valueItemRecord, loadingNode })}
      onSelect={handleSelect}
    ></PickerView>
  );
};

export default CascadePickerView;
