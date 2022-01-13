import React, { useEffect, useRef, ReactNode, useMemo } from 'react';
import { useReactive } from 'ahooks';
import { useTouch } from '../../hooks/use-touch';
import { useScrollParent } from '../../hooks/use-scroll-parent';

import { getScrollTop, preventDefault } from '../../utils/dom';

export type PullRefreshProps = {
  /** 是否加载中 */
  loading: boolean;
  /** 下拉文案 */
  pullingText?: string;
  /** 释放文案 */
  loosingText?: string;
  /** 加载文案 */
  loadingText?: string;
  /** 加载成功文案 */
  successText?: string;
  /** 加载成功文案持续时间 */
  successDuration?: number;
  /** 动画时长 */
  animationDuration?: number;
  /** 头部高度 */
  headHeight?: number;
  /** 触发下拉刷新的距离 */
  pullDistance?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义下拉节点 */
  customPulling?: ReactNode;
  /** 自定义释放节点 */
  customLoosing?: ReactNode;
  /** 自定义加载节点 */
  customLoading?: ReactNode;
  /** 内容元素 */
  children?: ReactNode;
  /** 刷新事件 */
  onRefresh?: () => void;
};

type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'success';

const PullRefresh: React.FC<PullRefreshProps> = ({
  loading = false,
  headHeight = 50,
  customPulling,
  customLoading,
  customLoosing,
  loadingText = '加载中...',
  loosingText = '释放即可刷新...',
  pullingText = '下拉即可刷新...',
  successText,
  successDuration = 500,
  pullDistance,
  animationDuration = 300,
  disabled = false,
  children,
  onRefresh,
}) => {
  const prefixCls = 'fm-pull-refresh';
  const rootRef = useRef<HTMLDivElement>(null);
  const reachTopRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollParent = useScrollParent(rootRef);
  const state = useReactive({
    status: 'normal' as PullRefreshStatus,
    distance: 0,
    duration: 0,
  });

  const touch = useTouch();

  const isTouchable = () => state.status !== 'loading' && state.status !== 'success' && !disabled;

  const headStyle = useMemo(
    () => ({
      height: `${headHeight}px`,
    }),
    [headHeight],
  );

  const getStatusText = () => {
    const { status } = state;
    if (status === 'normal') {
      return '';
    }
    return {
      loadingText,
      loosingText,
      pullingText,
      successText,
    }[`${status}Text`];
  };

  const renderStatus = () => {
    const { status, distance } = state;

    const slots = {
      pulling: customPulling,
      loosing: customLoosing,
      loading: customLoading,
    };

    if (slots[status]) {
      return slots[status]!({ distance });
    }

    if (['pulling', 'loosing', 'success', 'loading'].includes(status)) {
      return <div>{getStatusText()}</div>;
    }

    return null;
  };

  const checkPosition = (event: TouchEvent) => {
    reachTopRef.current = getScrollTop(scrollParent.current!) === 0;

    if (reachTopRef.current) {
      state.duration = 0;
      touch.start(event);
    }
  };

  const setStatus = (distance: number, isLoading?: boolean) => {
    const pullDistanceNumber = +(pullDistance || headHeight);
    state.distance = distance;

    if (isLoading) {
      state.status = 'loading';
    } else if (distance === 0) {
      state.status = 'normal';
    } else if (distance < pullDistanceNumber) {
      state.status = 'pulling';
    } else {
      state.status = 'loosing';
    }
  };

  const ease = (distance: number) => {
    const pullDistanceNumber = +(pullDistance || headHeight);

    if (distance > pullDistanceNumber) {
      if (distance < pullDistanceNumber * 2) {
        distance = pullDistanceNumber + (distance - pullDistanceNumber) / 2;
      } else {
        distance = pullDistanceNumber * 1.5 + (distance - pullDistanceNumber * 2) / 4;
      }
    }

    return Math.round(distance);
  };

  const onTouchStart = (event: TouchEvent) => {
    if (isTouchable()) {
      checkPosition(event);
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (isTouchable()) {
      if (!reachTopRef.current) {
        checkPosition(event);
      }

      const { deltaY } = touch;
      touch.move(event);

      if (reachTopRef.current && deltaY.current >= 0 && touch.isVertical()) {
        preventDefault(event);
        setStatus(ease(deltaY.current));
      }
    }
  };

  const onTouchEnd = () => {
    if (reachTopRef.current && touch.deltaY.current && isTouchable()) {
      state.duration = +animationDuration;

      if (state.status === 'loosing') {
        setStatus(+headHeight, true);

        if (onRefresh) {
          onRefresh();
        }
      } else {
        setStatus(0);
      }
    }
  };

  useEffect(() => {
    state.duration = +animationDuration;
    if (loading) {
      setStatus(+headHeight, true);
    } else if (successText) {
      state.status = 'success';
      setTimeout(() => {
        setStatus(0, false);
      }, successDuration);
    } else {
      setStatus(0, false);
    }
  }, [loading]);

  useEffect(() => {
    const hanldeTouchStart = event => {
      onTouchStart(event);
    };
    const hanldeTouchMove = event => {
      onTouchMove(event);
    };
    const hanldeTouchEnd = () => {
      onTouchEnd();
    };
    containerRef.current?.addEventListener('touchstart', hanldeTouchStart as EventListener);
    containerRef.current?.addEventListener('touchmove', hanldeTouchMove as EventListener);
    containerRef.current?.addEventListener('touchend', hanldeTouchEnd as EventListener);
    return () => {
      containerRef.current?.removeEventListener('touchstart', hanldeTouchStart as EventListener);
      containerRef.current?.removeEventListener('touchmove', hanldeTouchMove as EventListener);
      containerRef.current?.removeEventListener('touchend', hanldeTouchEnd as EventListener);
    };
  }, []);

  const trackStyle = {
    transitionDuration: `${state.duration}ms`,
    transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : '',
  };

  return (
    <div ref={rootRef} className={prefixCls}>
      <div className={`${prefixCls}__track`} style={trackStyle} ref={containerRef}>
        <div className={`${prefixCls}__head`} style={headStyle}>
          {renderStatus()}
        </div>
        {children}
      </div>
    </div>
  );
};

export default PullRefresh;
