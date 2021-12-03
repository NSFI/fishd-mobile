import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../List/List'
import { mergeProps } from '../../utils/merge-props'
import { CheckListContext } from './context'
import { usePropsValue } from '../../utils/use-props-value'
import Icon from '../Icon';

export type CheckListProps = {
  defaultValue?: string[]
  value?: string[]
  onChange?: (val: string[]) => void
  multiple?: boolean
  activeIcon?: ReactNode
  disabled?: boolean
  readOnly?: boolean
} & NativeProps

const defaultProps = {
  multiple: false,
  defaultValue: [],
  activeIcon: <Icon type="check"/>,
}

export const CheckList: FC<CheckListProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue(props)

  function check(val: string) {
    if (props.multiple) {
      setValue([...value, val])
    } else {
      setValue([val])
    }
  }

  function uncheck(val: string) {
    setValue(value.filter(item => item !== val))
  }

  const { activeIcon, disabled, readOnly } = props

  return (
    <CheckListContext.Provider
      value={{
        value,
        check,
        uncheck,
        activeIcon,
        disabled,
        readOnly,
      }}
    >
      {withNativeProps(props, <List>{props.children}</List>)}
    </CheckListContext.Provider>
  )
}
