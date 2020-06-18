/* eslint-disable no-return-assign */
/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
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

  textareaRef: any;

  private debounceTimeout: any;

  constructor(props: TextareaItemProps) {
    super(props);

    this.state = {
      focus: false,
      value: props.value || props.defaultValue || '',
    };
  }

  focus = () => {
    this.textareaRef.focus();
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps: TextareaItemProps) {
    if ('value' in nextProps) {
      this.setState({
        value: fixControlledValue(nextProps.value),
      });
    }
  }

  componentDidMount() {
    if (this.props.autoHeight) {
      this.reAlignHeight();
    }
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

    if ('value' in this.props) {
      this.setState({ value: this.props.value });
    } else {
      this.setState({ value });
    }

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
    this.setState({
      value: '',
    });

    if (this.props.onChange) {
      this.props.onChange('');
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
              value={value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              readOnly={!editable}
              style={style}
            />
            {clear && editable && !disabled && value && `${value}`.length > 0 ? (
              <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
                <div className={`${prefixCls}-clear`} onClick={this.clearInput} />
              </TouchFeedback>
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
