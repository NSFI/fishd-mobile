import React, { useState } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import { useUnmountedRef } from 'ahooks';

import Mask from '../Mask';
import Icon from '../Icon';
import ActionButton, { Action } from './ModalAction';

import { mergeProps } from '../../utils/merge-props';
import { VarProps } from '../../utils/var-props';

export interface ModalProps {
  className?: string;
  style?: React.CSSProperties & VarProps<'--fm-modal-z-index'>;

  visible?: boolean;
  getContainer?: HTMLElement | (() => HTMLElement) | null;
  closeOnClickModal?: boolean;
  closeOnAction?: boolean;

  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: Action[];

  onAction?: (action: Action, index: number) => void | Promise<void>;
  onClose?: () => void;
  afterShow?: () => void;
  afterClose?: () => void;
}

const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnClickModal: false,
};

const classPrefix = `fm-modal`;

const Modal: React.FC<ModalProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className } = props;
  const ModalClassName = classNames(classPrefix, {}, className);
  const unmountedRef = useUnmountedRef();
  const [active, setActive] = useState(props.visible);

  const style = useSpring({
    opacity: props.visible ? 1 : 0,
    xScale: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 30,
      clamp: true,
    },
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

  return (
    <div className={ModalClassName} style={props.style}>
      <Mask
        className={`${classPrefix}-mask`}
        visible={props.visible}
        getContainer={props.getContainer}
        onMaskClick={props.closeOnClickModal ? props?.onClose : undefined}
      ></Mask>
      <div className={`${classPrefix}-wrap`} style={{ display: active ? 'unset' : 'none' }}>
        <animated.div
          className={`${classPrefix}-main`}
          style={{
            ...style,
            transform: style.xScale
              .to({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [0.4, 0.8, 1, 1.1, 1],
              })
              .to(x => `scale(${x})`),
          }}
        >
          <Icon className={`${classPrefix}-close`} type="cross" onClick={props?.onClose}></Icon>
          <div className={`${classPrefix}-header`}>{props.title}</div>
          <div className={`${classPrefix}-body`}>{props.content}</div>
          <div className={`${classPrefix}-footer`}>
            {props.actions.map((action, index) => {
              return (
                <ActionButton
                  action={action}
                  key={action.key}
                  onAction={async () => {
                    await Promise.all([action.onClick?.(), props.onAction?.(action, index)]);
                    if (props.closeOnAction) {
                      props.onClose?.();
                    }
                  }}
                ></ActionButton>
              );
            })}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Modal;
