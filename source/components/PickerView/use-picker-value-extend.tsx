import { useMemo } from 'react'
import memoize from 'lodash/memoize'
import type { PickerColumnValue, PickerValueExtend, PickerColumnItem } from './PickerView'

export function usePickerValueExtend(columns: PickerColumnItem[][]) {
  const generateItems = useMemo(() => {
    return memoize(
      (val: PickerColumnValue[]) => {
        return val.map((v, index) => {
          const column = columns[index]
          if (!column) return null
          return column.find(item => item.value === v) ?? null
        })
      },
      val => JSON.stringify(val)
    )
  }, [columns])

  function generateValueExtend(val: PickerColumnValue[]): PickerValueExtend {
    return {
      get items() {
        return generateItems(val)
      },
    }
  }

  return generateValueExtend
}
