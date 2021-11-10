/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, createRef } from 'react';
import classNames from 'classnames';
import { useClickAway } from 'ahooks';
import { CSSTransition } from 'react-transition-group';
import { DropdownMenuPropsType } from './PropsType';
import DropdownItem from './DropdownItem';

const DropdownMenu: React.FC<DropdownMenuPropsType> & {
  DropdownItem?: any;
} = ({ activeColor = '#1989fa', direction = 'down', children = [] }) => {
  const [dropDownMenuValue, setDropDownMenuValue] = useState('');
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const renderChildren = Array.isArray(children) ? children : [children];
  const cssTransitionNodeRefs = useRef<any[]>(renderChildren.map(() => createRef()));

  useClickAway(() => {
    setDropDownMenuValue('');
  }, dropDownMenuRef);

  useEffect(() => {
    if (dropDownMenuValue) {
      document.body.classList.add('fm-overflow-hidden');
    } else {
      document.body.classList.remove('fm-overflow-hidden');
    }
  }, [dropDownMenuValue]);

  const handleOptionClick = (e: React.MouseEvent, callback: () => void, disabled: boolean) => {
    e.stopPropagation();
    if (!disabled) {
      callback();
    }
  };

  const calcOptionStyle = (value: string | number, optionValue: string | number, disabled: boolean) => {
    const style = {};
    Object.assign(style, {
      color: value === optionValue ? activeColor : '#333',
    });
    if (disabled) {
      Object.assign(style, {
        color: '#999',
      });
    }
    return style;
  };

  const handleItemWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fm-dropdown-menu" ref={dropDownMenuRef}>
      <div className={classNames('fm-dropdown-menu_bar', { 'fm-dropdown-menu_bar--opened': !!dropDownMenuValue })}>
        {renderChildren.map((Item, index) => (
          <DropdownItem
            {...Item.props}
            key={index}
            dropDownMenuValue={dropDownMenuValue}
            setDropDownMenuValue={setDropDownMenuValue}
            activeColor={activeColor}
          />
        ))}
      </div>
      {renderChildren.map(({ props: { options, value, onChange, children: DropdownItemChildren } }, index) => (
        <CSSTransition
          in={value === dropDownMenuValue}
          timeout={0}
          classNames={direction}
          unmountOnExit
          key={index}
          nodeRef={cssTransitionNodeRefs.current[index]}
        >
          <div
            ref={cssTransitionNodeRefs.current[index]}
            className="fm-dropdown-item"
            style={
              direction === 'down'
                ? {
                    top: dropDownMenuRef.current?.getBoundingClientRect().bottom,
                    bottom: 0,
                  }
                : {
                    top: 0,
                    bottom: `calc(${window.innerHeight}px - ${dropDownMenuRef.current?.getBoundingClientRect().top}px)`,
                  }
            }
          >
            <div
              className="fm-overlay"
              onClick={() => {
                setDropDownMenuValue('');
              }}
            />
            <div
              className="fm-dropdown-item__content"
              style={direction === 'down' ? { top: 0 } : { bottom: 0 }}
              onClick={handleItemWrapperClick}
            >
              {options?.length > 0
                ? (options as { text: string | number; value: string | number; disabled: boolean }[]).map(
                    ({ text, value: optionValue, disabled }, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="fm-cell fm-dropdown-item__option"
                        onClick={e => handleOptionClick(e, () => onChange(optionValue), disabled)}
                      >
                        <div className="fm-cell__title" style={calcOptionStyle(value, optionValue, disabled)}>
                          {text}
                        </div>
                      </div>
                    ),
                  )
                : DropdownItemChildren}
            </div>
          </div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default DropdownMenu;
