/* eslint-disable no-return-assign */
/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import { TextAreaItemPropsType } from './PropsType';

export type HTMLTextAreaProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'onChange' | 'onFocus' | 'onBlur' | 'value' | 'defaultValue' | 'type' | 'title'
>;
export interface TextareaItemProps extends TextAreaItemPropsType, HTMLTextAreaProps {
  prefixCls?: string;
  prefixListCls?: string;
}

function noop() {}

function fixControlledValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;

function countSymbols(text = '') {
  return text.replace(regexAstralSymbols, '_').length;
}

export interface TextareaItemState {
  focus?: boolean;
  value?: string;
}

export default class TextareaItem extends React.Component<TextareaItemProps, TextareaItemState> {
  static defaultProps = {
    prefixCls: 'fm-textarea',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    labelWidth: 90,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    error: false,
    errorMessage: '',
    labelNumber: 5,
  };

  isOnComposition: boolean;

  textareaRef: any;

  private debounceTimeout: any;

  constructor(props: TextareaItemProps) {
    super(props);

    this.state = {
      focus: false,
      value: props.value || props.defaultValue || '',
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps: TextareaItemProps) {
    if ('value' in nextProps) {
      this.setState({
        value: fixControlledValue(nextProps.value),
      });
      this.setInputValue(fixControlledValue(nextProps.value));
    }
  }

  componentDidMount() {
    if (this.props.autoHeight) {
      this.reAlignHeight();
    }
    this.setInputValue(fixControlledValue(this.state.value));
  }

  componentDidUpdate() {
    if (this.props.autoHeight) {
      this.reAlignHeight();
    }
  }

  reAlignHeight = () => {
    const textareaDom = this.textareaRef;
    textareaDom.style.height = ''; // 字数减少时能自动减小高度
    textareaDom.style.height = `${textareaDom.scrollHeight}px`;
  };

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    // fix: input 拼音输入导致计数问题
    if (this.isOnComposition) {
      return;
    }

    let newValue = value;
    if ('value' in this.props) {
      newValue = fixControlledValue(this.props.value);
    }

    this.setState({ value: newValue });
    this.setInputValue(newValue);

    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
    this.componentDidUpdate();
  };

  onBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    this.debounceTimeout = setTimeout(() => {
      if (document.activeElement !== this.textareaRef) {
        this.setState({
          focus: false,
        });
      }
    }, 100);
    const { value } = e.currentTarget;
    if (this.props.onBlur) {
      // fix autoFocus item blur with flash
      setTimeout(() => {
        // fix ios12 wechat browser click failure after input
        if (document.body) {
          // eslint-disable-next-line no-self-assign
          document.body.scrollTop = document.body.scrollTop;
        }
      }, 100);
      this.props.onBlur(value);
    }
  };

  onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    const { value } = e.currentTarget;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  };

  clearInput = () => {
    this.setState({ value: '' });
    this.setInputValue('');

    if (this.props.onChange) {
      this.props.onChange('');
    }

    this.focus();
  };

  setInputValue = (value: string) => {
    if (this.textareaRef) {
      this.textareaRef.value = value || '';
    }
  };

  focus = () => {
    if (this.textareaRef) {
      this.textareaRef.focus();
    }
  };

  handleComposition = (e: any) => {
    // eslint-disable-next-line no-console
    if (e.type === 'compositionend') {
      this.isOnComposition = false;
      this.onChange(e);
    } else {
      this.isOnComposition = true;
    }
  };

  render() {
    const {
      prefixCls,
      editable,
      style,
      clear,
      children,
      error,
      errorMessage,
      labelWidth,
      className,
      count,
      labelNumber,
      title,
      autoHeight,
      defaultValue,
      value: propsValue,
      ...otherProps
    } = this.props;
    const { disabled } = otherProps;
    const { value, focus } = this.state;
    const hasCount = count! > 0 && this.props.rows! > 1;

    const wrapCls = classnames(className, `${prefixCls}-item`, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-item-single-line`]: this.props.rows === 1 && !autoHeight,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [`${prefixCls}-has-count`]: hasCount,
    });

    const labelCls = classnames(`${prefixCls}-label`);
    const characterLength = countSymbols(value);
    const lengthCtrlProps: any = {};
    if (count! > 0) {
      lengthCtrlProps.maxLength = count! - characterLength + (value ? value.length : 0);
    }
    return (
      <div className={wrapCls}>
        {children ? (
          <div className={labelCls} style={{ width: labelWidth }}>
            {children}
          </div>
        ) : null}
        <div className={`${prefixCls}-control`}>
          <div className={`${prefixCls}-body`}>
            <textarea
              ref={el => (this.textareaRef = el)}
              {...lengthCtrlProps}
              {...otherProps}
              // value={value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              readOnly={!editable}
              style={style}
              onCompositionStart={this.handleComposition}
              onCompositionUpdate={this.handleComposition}
              onCompositionEnd={this.handleComposition}
            />
            {clear && editable && !disabled && value && `${value}`.length > 0 ? (
              <div className={`${prefixCls}-clear`} onClick={this.clearInput}></div>
            ) : null}
          </div>
          {error && errorMessage && <div className={`${prefixCls}-errorMessage`}>{errorMessage}</div>}
        </div>
        {hasCount && (
          <span className={`${prefixCls}-count`}>
            <span>{value ? characterLength : 0}</span>/{count}
          </span>
        )}
      </div>
    );
  }
}
