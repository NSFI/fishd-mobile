import List from './List';
import ListItem from './ListItem';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { ListProps } from './List';
export type { ListItemProps } from './ListItem';


export default attachPropertiesToComponent(List, {
  Item: ListItem
});
