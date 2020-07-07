/* eslint-disable react/prop-types */
import React from 'react';
import { DropdownItemPropsType } from './PropsType';

const DropdownItem: React.FC<DropdownItemPropsType> = ({
  options,
  value,
  dropDownMenuValue,
  setDropDownMenuValue,
  activeColor,
}) => {
  const handleItemClick = e => {
    e.stopPropagation();
    setDropDownMenuValue(pre => (pre === value ? '' : value));
  };
  return (
    <div className="fm-dropdown-menu__item">
      <div
        className="fm-dropdown-menu__title"
        style={{
          color: dropDownMenuValue === value ? activeColor : '#323233',
        }}
        onClick={handleItemClick}
      >
        {options.find(option => option.value === value)?.text}
      </div>
    </div>
  );
};

export default DropdownItem;
