/* eslint-disable no-return-assign */
import * as React from 'react';
import { InputEventHandler } from './PropsType';

export type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'onFocus' | 'onBlur'>;
export interface InputProps extends HTMLInputProps {
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
}

class InputItem extends React.Component<InputProps, any> {
  inputRef: HTMLInputElement | null;

  onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  };

  onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // here should have a value definition but none.
    const { value } = e.target as any;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  };

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  render() {
    const { onBlur, onFocus, ...restProps } = this.props;
    return (
      <input ref={el => (this.inputRef = el)} onBlur={this.onInputBlur} onFocus={this.onInputFocus} {...restProps} />
    );
  }
}

export default InputItem;
