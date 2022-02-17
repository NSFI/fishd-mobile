import React, { useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickAway, useUnmountedRef } from 'ahooks';
import { animated, useSpring } from '@react-spring/web';
import NumberKey from './NumberKey';
import { mergeProps } from '../../utils/merge-props';
import { GetContainer, renderToContainer } from '../../utils/render-to-container';

export type KeyPropsType = {
  text: string | number;
  type?: string;
  wider?: boolean;
}

export type NumberKeyboardProps = {
  className?: string;
  style?: React.CSSProperties;
  theme: 'custom' | 'default'; // 键盘类型
  value: string;
  visible: boolean; // 是否显示
  title: React.ReactNode; // 标题
  extraKey: string | number | Array<string | number>; // 额外键盘按钮
  showClose: boolean; // 是否显示删除按钮
  confirmText: string;
  closeText: string;
  closeOnClickOutside: boolean; // 点击外部是否关闭键盘
  closeOnConfirm: boolean; // 点击确认是否关闭键盘
  getContainer?: GetContainer;
  onInput?: (text: string | number) => void;
  onDelete?: () => void;
  onChange?: (value: string) => void;
  onClose?: () => void;
  onConfirm?: () => void;
  afterShow?: () => void;
  afterClose?: () => void;
}

const defaultProps = {
  value: '',
  visible: false,
  theme: 'default',
  showClose: true,
  closeOnClickOutside: true,
  closeOnConfirm: true,
  confirmText: '完成',
  closeText: '关闭',
  getContainer: () => document.body,
};
const classPrefix = 'fm-number-keyboard';

const NumberKeyboard: React.FC<NumberKeyboardProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    className,
    visible,
    value,
    extraKey,
    showClose,
    theme,
    closeText,
    closeOnClickOutside,
    confirmText,
    closeOnConfirm,
    title,
  } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  const unmountedRef = useUnmountedRef();
  const [active, setActive] = useState(false);

  const handleClose = () => {
    props.onClose?.();
  };

  const handlePress = (type: string, text: string | number) => {
    if (!text && text !== 0) {
      if (type === 'extra') {
        handleClose();
        return;
      }
    }

    if (type === 'confirm') {
      props.onConfirm?.();
      if (closeOnConfirm) {
        handleClose();
      }
    } else if (type === 'delete') {
      const newValue: string = value.slice(0, value.length - 1);
      props.onDelete?.();
      props.onChange?.(newValue);
    } else if (type === 'close') {
      handleClose();
    } else {
      props.onInput?.(text);
      props.onChange?.(value + text);
    }
  };

  const visibleTime = useMemo(() => {
    return performance.now();
  }, [visible]);

  useClickAway(e => {
    /** 保证外部点击事件在当前组件展示之后才生效 */
    if (e.timeStamp > visibleTime && visible && closeOnClickOutside) {
      handleClose();
    }
  }, wrapRef);

  const style = useSpring({
    y: visible ? 0 : 100,
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      if (unmountedRef.current) return;
      setActive(props.visible);
      if (props.visible) {
        props.afterShow?.();
      } else {
        props.afterClose?.();
      }
    },
  });

  /** 生成基础1-9数字键 */
  const genBasicKeys = () => {
    const keys: Array<KeyPropsType> = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }
    return keys;
  };

  /** 生成默认键盘 */
  const genDefaultKey = () => {
    const firstExtra = Array.isArray(extraKey) ? extraKey[0] : extraKey;
    return [
      ...genBasicKeys(),
      { text: firstExtra, type: firstExtra ? 'extra' : 'close' },
      { text: 0 },
      {
        text: '',
        type: 'delete',
      },
    ];
  };

  /** 生成自定义键盘 */
  const genCustomKeys = () => {
    const keys = genBasicKeys();
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' });
    } else if (extraKeys.length === 2) {
      keys.push({ text: extraKeys[0], type: 'extra' }, { text: 0 }, { text: extraKeys[1], type: 'extra' });
    }

    return keys;
  };

  /** 生成键盘 */
  const genKeys = () => {
    let keys: Array<KeyPropsType> = [];
    if (theme === 'custom') {
      keys = genCustomKeys();
    } else {
      keys = genDefaultKey();
    }
    return keys.map(key => {
      const renderKey = key.text + (key.type || '');
      return (
        <NumberKey wider={key.wider} key={renderKey} type={key.type} text={key.text} onPress={handlePress}></NumberKey>
      );
    });
  };

  const genSidebar = () => {
    if (theme === 'custom') {
      return (
        <div className={`${classPrefix}__sidebar`}>
          <NumberKey large text="" type="delete" onPress={handlePress}></NumberKey>
          <NumberKey large text={confirmText} type="confirm" color="blue" onPress={handlePress} />
        </div>
      );
    }
    return null;
  };

  const genTitle = () => {
    const showTitle = title || showClose;
    if (!showTitle) {
      return null;
    }
    return (
      <div className={`${classPrefix}__header`}>
        {title && <h2 className={`${classPrefix}__title`}>{title}</h2>}
        {showClose && (
          <button type="button" className={`${classPrefix}__close`} onClick={handleClose}>
            {closeText}
          </button>
        )}
      </div>
    );
  };

  const NumberKeyboardClass = classNames(classPrefix, className, {});

  const Node = (
    <animated.div
      ref={wrapRef}
      className={NumberKeyboardClass}
      style={{
        transform: style.y.to(y => `translate3d(0, ${y}%, 0)`),
        display: active ? 'unset' : 'none',
      }}
    >
      {genTitle()}
      <div className={`${classPrefix}__body`}>
        <div className={`${NumberKeyboardClass}__keys`}>{genKeys()}</div>
        {genSidebar()}
      </div>
    </animated.div>
  );
  return renderToContainer(props.getContainer, Node);
};

export default NumberKeyboard;
