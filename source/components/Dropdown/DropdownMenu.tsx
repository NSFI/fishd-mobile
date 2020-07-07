/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { DropdownMenuPropsType } from './PropsType';
import DropdownItem from './DropdownItem';

const DropdownMenu: React.FC<DropdownMenuPropsType> & {
  DropdownItem?: any;
} = ({ activeColor = '#1989fa', direction = 'down', children }) => {
  const [dropDownMenuValue, setDropDownMenuValue] = useState('');
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setDropDownMenuValue('');
    window.addEventListener('click', fn, false);
    return () => {
      window.removeEventListener('click', fn);
    };
  }, []);

  useEffect(() => {
    if (dropDownMenuValue) {
      document.body.classList.add('fm-overflow-hidden');
    } else {
      document.body.classList.remove('fm-overflow-hidden');
    }
  }, [dropDownMenuValue]);

  return (
    <div className="fm-dropdown-menu" ref={dropDownMenuRef}>
      <div className={classNames('fm-dropdown-menu_bar', { 'fm-dropdown-menu_bar--opened': !!dropDownMenuValue })}>
        {children.map((Item, index) => (
          <DropdownItem
            {...Item.props}
            key={index}
            dropDownMenuValue={dropDownMenuValue}
            setDropDownMenuValue={setDropDownMenuValue}
            activeColor={activeColor}
          />
        ))}
      </div>
      {children.map(({ props: { options, value, onChange } }, index) => (
        <div
          key={index}
          className={classNames('fm-dropdown-item', {
            selected: value === dropDownMenuValue,
          })}
          style={
            direction === 'down'
              ? {
                  top: dropDownMenuRef.current?.getBoundingClientRect().bottom,
                  bottom: 0,
                }
              : {
                  top: 0,
                  bottom: `calc(100vh - ${dropDownMenuRef.current?.getBoundingClientRect().top}px)`,
                }
          }
        >
          <div className="fm-overlay" />
          <div className="fm-dropdown-item__content" style={direction === 'down' ? { top: 0 } : { bottom: 0 }}>
            {options.map(({ text, value: optionValue }, optionIndex) => (
              <div key={optionIndex} className="fm-cell fm-dropdown-item__option" onClick={() => onChange(optionValue)}>
                <div
                  className="fm-cell__title"
                  style={{
                    color: value === optionValue ? activeColor : '#323233',
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
