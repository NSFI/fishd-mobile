import React, { useState, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { useUnmountedRef } from 'ahooks';
import { useSpring, animated } from '@react-spring/web';

import { useLockScroll } from '../../hooks/use-lock-scroll';
import { mergeProps } from '../../utils/merge-props';
import { VarProps } from '../../utils/var-props';
import { renderToContainer } from '../../utils/render-to-container';

export interface MaskProps {
  className?: string;
  style?: React.CSSProperties & VarProps<'--fm-mask-z-index'>;
  visible?: boolean;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  getContainer?: HTMLElement | (() => HTMLElement) | null;
  disableBodyScroll?: boolean;
  opacity?: number;
  theme?: 'dark' | 'light';

  afterShow?: () => void;
  afterClose?: () => void;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  opacity: 0.6,
  disableBodyScroll: true,
  getContainer: null,
  theme: 'dark',
};

const classPrefix = `fm-mask`;

const Mask: React.FC<MaskProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className, style } = props;
  const MaskClassName = classNames(classPrefix, {}, className);
  const unmountedRef = useUnmountedRef();
  const [active, setActive] = useState(props.visible);
  const ref = useRef<HTMLDivElement>(null);

  const loadedRef = useRef(active);
  if (active) {
    loadedRef.current = true;
  }

  useLockScroll(ref, props.disableBodyScroll && props.visible);

  const { opacity } = useSpring({
    opacity: props.visible ? 1 : 0,
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

  const background = useMemo(() => {
    const opacity = props.opacity;
    const rgb = props.theme === 'light' ? '255, 255, 255' : '0, 0, 0';
    return `rgba(${rgb}, ${opacity})`;
  }, [props.theme, props.opacity]);

  const shouldRenderContent = useMemo(() => {
    if (props.forceRender || active) {
      return true;
    }
    if (props.destroyOnClose && !active) {
      return false;
    }
    if (!props.destroyOnClose && !active) {
      return loadedRef.current;
    }
  }, [active, props.destroyOnClose, props.forceRender]);

  const Node = (
    <animated.div
      ref={ref}
      className={MaskClassName}
      style={{
        ...style,
        background,
        opacity,
        display: active ? 'unset' : 'none',
      }}
    >
      {props.onMaskClick && <div className={`${classPrefix}__bg`} role="button" onClick={props.onMaskClick}></div>}
      <div className={`${classPrefix}__content`}>{shouldRenderContent ? props.children : null}</div>
    </animated.div>
  );

  return renderToContainer(props.getContainer, Node);
};

export default Mask;
