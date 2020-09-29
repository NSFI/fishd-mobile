/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import * as React from 'react';
import Animate from 'rc-animate';
import { NumberKeyboardPropsType, KeyPropsType } from './PropsType';

import NumberKey from './NumberKey';

const supportTouch = 'ontouchstart' in window;

export interface NumberKeyboardProps extends NumberKeyboardPropsType {
  prefixCls?: string;
  className?: string;
  value: string;
  show: boolean;
  title: string | React.ReactNode; // 标题
  titleLeft: string | React.ReactNode; // 标题左侧
  extraKey: string | number | Array<string | number>; // 额外键盘按钮
  showDeleteKey: boolean; // 是否显示删除按钮
  deleteButtonText: string; // 删除文案
  theme: 'custom' | 'default'; // 键盘类型
  hideOnClickOutside: boolean; // 点击外部是否隐藏键盘
  closeButtonText: string;
  closeButtonLoading: boolean;
  onBlur?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  onDelete?: () => void;
  onInput?: (text: string | number) => void;
  onChange?: (value: string) => void;
  onClose?: () => void;
}

class NumberKeyboard extends React.Component<NumberKeyboardProps, any> {
  static defaultProps = {
    prefixCls: 'fm-number-keyboard',
    value: '',
    show: false,
    theme: 'default',
    showDeleteKey: true,
    hideOnClickOutside: true,
    onBlur: () => {},
  };

  wrapRef: any;

  componentDidMount() {
    if (this.props.hideOnClickOutside) {
      if (supportTouch) {
        // touchstart 事件发生顺序有点问题
        document.addEventListener('mousedown', this.doBlur, false);
      } else {
        document.addEventListener('mousedown', this.doBlur, false);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.doBlur, false);
  }

  genBasicKeys = () => {
    const keys: Array<KeyPropsType> = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }
    return keys;
  };

  genDefaultKey = () => {
    const { extraKey, showDeleteKey, deleteButtonText } = this.props;
    return [
      ...this.genBasicKeys(),
      { text: Array.isArray(extraKey) ? extraKey[0] : extraKey, type: 'extra' },
      { text: 0 },
      {
        text: showDeleteKey ? deleteButtonText : '',
        type: showDeleteKey ? 'delete' : '',
      },
    ];
  };

  genCustomKeys() {
    const keys = this.genBasicKeys();
    const { extraKey } = this.props;
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' });
    } else if (extraKeys.length === 2) {
      keys.push({ text: extraKeys[0], type: 'extra' }, { text: 0 }, { text: extraKeys[1], type: 'extra' });
    }

    return keys;
  }

  genKeys = () => {
    let keys: Array<KeyPropsType> = [];
    if (this.props.theme === 'custom') {
      keys = this.genCustomKeys();
    } else {
      keys = this.genDefaultKey();
    }
    return keys.map(key => {
      const renderKey = key.text + (key.type || '');
      return (
        <NumberKey
          wider={key.wider}
          key={renderKey}
          type={key.type}
          text={key.text}
          onPress={this.handlePress}
        ></NumberKey>
      );
    });
  };

  genSidebar = () => {
    const { prefixCls, theme, showDeleteKey, deleteButtonText, closeButtonText, closeButtonLoading } = this.props;
    if (theme === 'custom') {
      return (
        <div className={`${prefixCls}__sidebar`}>
          {showDeleteKey && (
            <NumberKey large text={deleteButtonText} type="delete" onPress={this.handlePress}></NumberKey>
          )}
          <NumberKey
            large
            text={closeButtonText}
            type="close"
            color="blue"
            loading={closeButtonLoading}
            onPress={this.handlePress}
          />
        </div>
      );
    }
    return null;
  };

  genTitle() {
    const { title, theme, closeButtonText, titleLeft, prefixCls } = this.props;
    const showClose = closeButtonText && theme === 'default';
    const showTitle = title || showClose || titleLeft;

    if (!showTitle) {
      return null;
    }

    return (
      <div className={`${prefixCls}__header`}>
        {titleLeft && <span className={`${prefixCls}__header-left`}>{titleLeft}</span>}
        {title && <h2 className={`${prefixCls}__header-title`}>{title}</h2>}
        {showClose && (
          <button type="button" className={`${prefixCls}__header-right`} onClick={this.doClose}>
            {closeButtonText}
          </button>
        )}
      </div>
    );
  }

  doClose = () => {
    this.doBlur();
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handlePress = (type: string, text: string | number) => {
    if (text === '') {
      if (type === 'extra') {
        this.doBlur();
        return;
      }
    }

    // eslint-disable-next-line no-console
    const { value } = this.props;

    if (type === 'delete') {
      const newValue: string = value.slice(0, value.length - 1);
      if (this.props.onDelete) {
        this.props.onDelete();
      }
      if (this.props.onChange) {
        this.props.onChange(newValue);
      }
    } else if (type === 'close') {
      this.doClose();
    } else {
      if (this.props.onInput) {
        this.props.onInput(text);
      }
      if (this.props.onChange) {
        this.props.onChange(value + text);
      }
    }
  };

  doBlur = () => {
    if (this.props.show && this.props.onBlur) {
      this.props.onBlur();
    }
  };

  onAnimateAppear = () => {
    document.body.style.overflow = 'hidden';
    if (this.props.onShow) {
      this.props.onShow();
    }
  };

  onAnimateLeave = () => {
    document.body.style.overflow = '';
    if (this.props.onHide) {
      this.props.onHide();
    }
  };

  hanldeClick = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
  };

  render() {
    const { className, prefixCls, show } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return (
      <Animate
        onAppear={this.onAnimateAppear}
        onLeave={this.onAnimateLeave}
        transitionName={`fm-slide-up`}
        transitionAppear
      >
        {show ? (
          <div className={wrapCls} onMouseDown={this.hanldeClick}>
            {this.genTitle()}
            <div className={`${prefixCls}__body`}>
              <div className={`${wrapCls}__keys`}>{this.genKeys()}</div>
              {this.genSidebar()}
            </div>
          </div>
        ) : null}
      </Animate>
    );
  }
}

export default NumberKeyboard;
