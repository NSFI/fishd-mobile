import { PickerViewColumn } from '../PickerView/PickerView';

export const getColumns = ({ selected, depth, options, valueItemRecord, loadingNode }) => {
  const columns: PickerViewColumn[] = [];
  columns.push(
    options.map(option => ({
      label: option.label,
      value: option.value,
      loading: loadingNode ? option.value === loadingNode.value : false,
      children: option.children,
      _data: option,
    })),
  );

  for (let i = 0; i < depth - 1; i++) {
    const val = selected[i];
    const nextColumns = valueItemRecord[val];
    columns.push(nextColumns || []);
  }
  return columns;
};
