import List from './List';
import ListItem from './ListItem';
export type { ListProps } from './List';
export type { ListItemProps } from './ListItem';

type CompoundedType = typeof List & {
  Item: typeof ListItem;
};

const Compounded = List as CompoundedType;
Compounded.Item = ListItem;

export default Compounded;
