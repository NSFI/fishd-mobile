import { CheckList } from './CheckListProvider'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { CheckListItem } from './CheckListItem'

export type { CheckListProps } from './CheckListProvider'
export type { CheckListItemProps } from './CheckListItem'

export default attachPropertiesToComponent(CheckList, {
  Item: CheckListItem,
})
