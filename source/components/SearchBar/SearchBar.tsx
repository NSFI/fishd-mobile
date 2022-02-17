import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';

import Input, { InputProps, InputRef } from '../Input';
import Icon from '../Icon';

import { mergeProps } from '../../utils/merge-props';

export type SearchBarProps = Pick<InputProps, 'onFocus' | 'onBlur'> & {
  className?: string;
  style?: React.CSSProperties;
  /** 输入值 */
  value?: string;
  /** 提示文本 */
  placeholder?: string;
  /** 是否允许清除内容 */
  clearable?: boolean;
  /** 是否展示取消按钮 */
  showCancelButton?: boolean;
  /** 取消按钮文案 */
  cancelText?: string;
  /** 点击取消按钮后是否清空输入框 */
  clearOnCancel?: boolean;
  /** 输入框回车时触发 */
  onSearch?: (val: string) => void;
  /** 输入框内容变化时触发 */
  onChange?: (val: string) => void;
  /** 点击清除按钮后触发 */
  onClear?: () => void;
  /** 点击取消按钮时触发 */
  onCancel?: () => void;
};

export type SearchRef = InputRef;

const classPrefix = `fm-searchbar`;
const defaultProps = {
  placeholder: '请输入搜索关键词',
  cancelText: '取消',
  clearOnCancel: true,
};

const SearchBar = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const { className, style, placeholder, showCancelButton, cancelText, clearOnCancel, clearable } = props;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useControllableValue<string>(props);
  const inputRef = useRef<InputRef>(null);
  const SearchBarClassName = classNames(classPrefix, {}, className);

  useImperativeHandle(ref, () => ({
    clear: () => inputRef.current?.clear(),
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
  }));

  return (
    <div className={SearchBarClassName} style={style}>
      <div className={`${classPrefix}__content`}>
        <div className={`${classPrefix}__icon`}>
          <Icon type="search" fontSize={14} color="#333" />
        </div>
        <div className={`${classPrefix}__body`}>
          <Input
            ref={inputRef as any}
            placeholder={placeholder}
            value={value}
            clearable={clearable}
            onFocus={e => {
              setFocus(true);
              props.onFocus?.(e);
            }}
            onBlur={e => {
              setFocus(false);
              props.onBlur?.(e);
            }}
            onClear={() => {
              props.onClear?.();
            }}
            onChange={text => {
              setValue(text);
            }}
          />
        </div>
      </div>
      {focus && showCancelButton && (
        <a
          className={`${classPrefix}__cancel`}
          onMouseDown={e => {
            e.preventDefault();
          }}
          onClick={() => {
            if (clearOnCancel) {
              inputRef.current?.clear();
              props.onClear?.();
            }
            inputRef.current?.blur();
          }}
        >
          {cancelText}
        </a>
      )}
    </div>
  );
};

export default forwardRef<SearchRef, SearchBarProps>(SearchBar);
