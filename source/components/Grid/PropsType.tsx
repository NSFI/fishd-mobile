export interface DataItem {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  [key: string]: any;
}

export interface GridPropsType {
  data?: Array<DataItem | undefined>;
  columnNum?: number;
  gutter?: number;
  border?: boolean;
  square?: boolean;
  onClick?: (dataItem: DataItem | undefined, itemIndex: number) => void;
  renderItem?: (dataItem: DataItem | undefined, itemIndex: number) => React.ReactElement<any>;
}
