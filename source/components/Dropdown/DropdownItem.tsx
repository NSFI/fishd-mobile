/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
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

  const isActive = dropDownMenuValue === value;
  return (
    <div className="fm-dropdown-menu__item">
      <div
        className={classNames('fm-dropdown-menu__title', isActive ? 'fm-dropdown-menu__title--active' : '')}
        style={{
          color: isActive ? activeColor : '#222',
        }}
        onClick={handleItemClick}
      >
        {title || options?.find(option => option.value === value)?.text}
      </div>
    </div>
  );
};

export default DropdownItem;
