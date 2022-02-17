import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useUnmountedRef } from 'ahooks';
import { useSpring, animated } from '@react-spring/web';

import { GetContainer, renderToContainer } from '../../utils/render-to-container';
import { mergeProps } from '../../utils/merge-props';
import { useLockScroll } from '../../hooks/use-lock-scroll';
import Mask, { MaskProps } from '../Mask';

export type PopupProps = {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  mask?: boolean;
  getContainer?: GetContainer;
  bodyClassName?: string;
  bodyStyle?: React.CSSProperties;
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
  afterShow?: () => void;
  afterClose?: () => void;
} & Pick<MaskProps, 'onMaskClick'>;

const classPrefix = `fm-popup`;
const defaultProps = {
  position: 'bottom',
  visible: false,
  getContainer: () => document.body,
  mask: true,
};

const Popup: React.FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p);
  const unmountedRef = useUnmountedRef();
  const [active, setActive] = useState(props.visible);
  const ref = useRef<HTMLDivElement>(null);
  useLockScroll(ref, props.visible);

  const { rate } = useSpring({
    rate: props.visible ? 0 : 100,
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

  const PopupClassName = classNames(classPrefix, props.className);
  const PopupBodyClassName = classNames(
    `${classPrefix}-body`,
    {
      [`is-${props.position}`]: !!props.position,
    },
    props.bodyClassName,
  );

  const Node = (
    <div className={PopupClassName} style={{ display: active ? 'unset' : 'none' }}>
      {props.mask && (
        <Mask
          visible={props.visible}
          onMaskClick={props.onMaskClick}
          className={props.maskClassName}
          style={props.maskStyle}
          disableBodyScroll={false}
        ></Mask>
      )}
      <animated.div
        ref={ref}
        className={PopupBodyClassName}
        style={{
          ...props.bodyStyle,
          transform: rate.to(v => {
            if (props.position === 'bottom') {
              return `translate(0, ${v}%)`;
            }
            if (props.position === 'top') {
              return `translate(0, -${v}%)`;
            }
            if (props.position === 'left') {
              return `translate(-${v}%, 0)`;
            }
            if (props.position === 'right') {
              return `translate(${v}%, 0)`;
            }
            return 'none';
          }),
        }}
      >
        {props.children}
      </animated.div>
    </div>
  );

  return renderToContainer(props.getContainer, Node);
};

export default Popup;
