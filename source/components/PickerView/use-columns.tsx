import { useMemo } from 'react';
import { PickerViewColumn, PickerColumnValue } from './PickerView';

export function useColumns(
  rawColumns: PickerViewColumn[] | ((value: PickerColumnValue[]) => PickerViewColumn[]),
  value: PickerColumnValue[],
) {
  return useMemo(() => {
    const columns = typeof rawColumns === 'function' ? rawColumns(value) : rawColumns;
    return columns.map(column =>
      column.map(item =>
        typeof item === 'string'
          ? {
              label: item,
              value: item,
            }
          : item,
      ),
    );
  }, [rawColumns, value]);
}
