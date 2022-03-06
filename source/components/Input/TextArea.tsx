import React, { useRef, useLayoutEffect, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';
import { mergeProps } from '../../utils/merge-props';

import Icon from '../Icon';

type NativeTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextAreaProps = Pick<
  NativeTextAreaProps,
  'autoComplete' | 'disabled' | 'readOnly' | 'onFocus' | 'onBlur'
> & {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clearable?: boolean;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  autoSize?:
    | boolean
    | {
        minHeight?: string;
        maxHeight?: string;
      };
  onChange?: (val: string) => void;
  onClear?: () => void;
};

export type TextAreaRef = {
  clear: () => void;
  focus: () => void;
  blur: () => void;
};

const classPrefix = `fm-textarea`;

const defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  clearable: false,
  defaultValue: '',
};

const TextArea: React.ForwardRefRenderFunction<TextAreaRef, TextAreaProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const {
    className,
    style,
    defaultValue: _defaultValue,
    value: _value,
    onChange: _onChange,
    rows,
    autoSize,
    showCount,
    clearable,
    ...textAreaProps
  } = props;
  const TextAreaClassName = classNames(
    `${classPrefix}`,
    {
      'is-disabled': props.disabled,
    },
    className,
  );
  const [value, setValue] = useControllableValue(props);
  const nativeTextAreaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => nativeTextAreaRef.current?.focus(),
    blur: () => nativeTextAreaRef.current?.blur(),
  }));

  useLayoutEffect(() => {
    if (nativeTextAreaRef.current && autoSize) {
      nativeTextAreaRef.current.style.height = '';
      nativeTextAreaRef.current.style.height = `${nativeTextAreaRef.current?.scrollHeight}px`;
    }
  });

  const clearInput = () => {
    setValue('');
    props.onClear?.();
  };

  return (
    <div className={TextAreaClassName} style={style}>
      <textarea
        ref={nativeTextAreaRef}
        {...textAreaProps}
        className={`${classPrefix}__inner`}
        rows={rows}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        onFocus={e => {
          props.onFocus?.(e);
        }}
        onBlur={e => {
          props.onBlur?.(e);
        }}
        id={props.id}
      />

      {clearable && value && value.length && !props.disabled && !props.readOnly && (
        <Icon
          className={`${classPrefix}__clear`}
          type="error-o"
          onMouseDown={e => {
            e.preventDefault();
          }}
          onClick={clearInput}
        ></Icon>
      )}
      {showCount && (
        <div className={`${classPrefix}__count`}>
          {props.maxLength ? `${value.length}/${props.maxLength}` : value.length}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef<TextAreaRef, TextAreaProps>(TextArea);
