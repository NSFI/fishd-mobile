import React, { FC, useContext } from 'react'
import { ListItemProps } from '../list'
import ListItem from '../List/ListItem'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { CheckListContext } from './CheckListContext'
import classNames from 'classnames'

const classPrefix = `fm-check-list-item`

export type CheckListItemProps = Pick<
  ListItemProps,
  | 'title'
  | 'children'
  | 'description'
  | 'prefix'
  | 'disabled'
  | 'onClick'
  | 'style'
> & {
  value: string
  readOnly?: boolean
} & NativeProps

export const CheckListItem: FC<CheckListItemProps> = props => {
  const context = useContext(CheckListContext)
  if (context === null) {
    return null
  }
  const active = context.value.includes(props.value)
  const readOnly = props.readOnly || context.readOnly

  const extra = (
    <div className={`${classPrefix}-extra`}>
      {active ? context.activeIcon : null}
    </div>
  )

  return withNativeProps(
    props,
    <ListItem
      title={props.title}
      className={classNames({
        [`${classPrefix}-readonly`]: readOnly,
      })}
      description={props.description}
      prefix={props.prefix}
      onClick={e => {
        if (readOnly) return
        if (active) {
          context.uncheck(props.value)
        } else {
          context.check(props.value)
        }
        props.onClick?.(e)
      }}
      arrow={false}
      clickable={!readOnly}
      extra={extra}
      disabled={props.disabled || context.disabled}
    >
      {props.children}
    </ListItem>
  )
}
