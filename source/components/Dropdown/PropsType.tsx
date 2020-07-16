export interface DropdownMenuPropsType {
  children: any[];
  activeColor: string;
  direction: 'down' | 'up';
}

export interface DropdownItemPropsType {
  options?: {
    text: string;
    value: any;
    disabled?: boolean;
  }[];
  value?: any;
  dropDownMenuValue?: any;
  setDropDownMenuValue?: (e: any) => void;
  activeColor?: string;
  title?: string;
}
