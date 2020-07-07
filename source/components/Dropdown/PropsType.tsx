export interface DropdownMenuPropsType {
  children: any[];
  activeColor: string;
  direction: 'down' | 'up';
}

export interface DropdownItemPropsType {
  options: {
    text: string;
    value: any;
  }[];
  value: any;
  dropDownMenuValue: any;
  setDropDownMenuValue: (e) => {};
  activeColor: string;
}
