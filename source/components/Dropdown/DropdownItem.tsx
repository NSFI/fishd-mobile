/* eslint-disable react/prop-types */
import React from 'react';
import { DropdownItemPropsType } from './PropsType';

const DropdownItem: React.FC<DropdownItemPropsType> = ({
  options,
  value,
  dropDownMenuValue,
  setDropDownMenuValue,
  activeColor,
  title = '',
}) => {
  const handleItemClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropDownMenuValue?.((pre: any) => (pre === value ? '' : value));
  };
  return (
    <div className="fm-dropdown-menu__item">
      <div
        className="fm-dropdown-menu__title"
        style={{
          color: dropDownMenuValue === value ? activeColor : '#222',
        }}
        onClick={handleItemClick}
      >
        {title || options?.find(option => option.value === value)?.text}
      </div>
    </div>
  );
};

export default DropdownItem;
