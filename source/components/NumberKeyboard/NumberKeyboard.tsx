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
  extraKey: string | number;
  showDeleteKey: boolean;
  deleteButtonText: string;
  theme: 'custom' | 'default';
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
    onBlur: () => {},
  };

  wrapRef: any;

  componentDidMount() {
    if (supportTouch) {
      document.addEventListener('touchstart', this.doBlur, false);
    } else {
      document.addEventListener('mousedown', this.doBlur, false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.doBlur, false);
    document.addEventListener('mousedown', this.doBlur, false);
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
      { text: extraKey, type: 'extra' },
      { text: 0 },
      {
        text: showDeleteKey ? deleteButtonText : '',
        type: showDeleteKey ? 'delete' : '',
      },
    ];
  };

  genCustomKeys() {
    const keys = this.genBasicKeys();
    const { extraKey } = this.state;
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKey[0], type: 'extra' });
    } else if (extraKeys.length === 2) {
      keys.push({ text: extraKey[0], type: 'extra' }, { text: 0 }, { text: extraKey[1], type: 'extra' });
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
      return <NumberKey key={renderKey} type={key.type} text={key.text} onPress={this.handlePress}></NumberKey>;
    });
  };

  handlePress = (type: string, text: string | number) => {
    if (text === '') {
      if (type === 'extra') {
        this.doBlur();
      }
      return;
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
      if (this.props.onClose) {
        this.props.onClose();
      }
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
          <div
            className={`${wrapCls} ${prefixCls}__body`}
            onTouchStart={this.hanldeClick}
            onMouseDown={this.hanldeClick}
          >
            <div className={`${wrapCls}__keys`}>{this.genKeys()}</div>
          </div>
        ) : null}
      </Animate>
    );
  }
}

export default NumberKeyboard;
