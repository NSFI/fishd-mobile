import React, { useRef, useState, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { useControllableValue } from 'ahooks';

import Icon from '../Icon';
import { mergeProps } from '../../utils/merge-props';
import { fixControlledValue } from '../../utils/fix-controlled-value'

type NativeInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type EnterKeyHintProps = NativeInputProps extends { enterKeyHint?: unknown }
  ? {
      enterKeyHint?: NativeInputProps['enterKeyHint'];
    }
  : {};

export type InputProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'max'
  | 'min'
  | 'autoComplete'
  | 'pattern'
  | 'type'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyDown'
  | 'onKeyUp'
> &
  EnterKeyHintProps & {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    onChange?: (val: string) => void;
    onClear?: () => void;
    onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  };

export type InputRef = {
  clear: () => void;
  focus: () => void;
  blur: () => void;
};

const classPrefix = `fm-input`;

const defaultProps = {
  defaultValue: '',
  autoComplete: 'off',
};

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const { className, style, clearable } = props;
  const InputClassName = classnames(`${classPrefix}__wrapper`, {}, className);
  const [value, setValue] = useControllableValue(props);
  const [focus, setFocus] = useState(false);
  const nativeInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => nativeInputRef.current?.focus(),
    blur: () => nativeInputRef.current?.blur(),
  }));

  const clearInput = () => {
    setValue('');
    props.onClear?.();
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e);
    }
    props.onKeyDown?.(e);
  };
  return (
    <div className={InputClassName}>
      {props.prefix && <span className={`${classPrefix}__prefix`}>{props.prefix}</span>}
      <input
        ref={nativeInputRef}
        id={props.id}
        className={classPrefix}
        style={style}
        value={fixControlledValue(value)}
        onChange={e => {
          setValue(e.target.value);
        }}
        onFocus={e => {
          setFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={e => {
          setFocus(false);
          props.onBlur?.(e);
        }}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        maxLength={props.maxLength}
        minLength={props.minLength}
        max={props.max}
        min={props.min}
        autoComplete={props.autoComplete}
        enterKeyHint={props.enterKeyHint}
        pattern={props.pattern}
        type={props.type}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={handleKeydown}
        onKeyUp={props.onKeyUp}
      />
      {clearable && focus && value && !props.disabled && !props.readOnly && (
        <Icon
          className={`${classPrefix}__clear`}
          type="error-o"
          onMouseDown={e => {
            e.preventDefault();
          }}
          onClick={clearInput}
        ></Icon>
      )}
      {props.suffix && <span className={`${classPrefix}__suffix`}>{props.suffix}</span>}
    </div>
  );
};

export default React.forwardRef<InputRef, InputProps>(Input);
