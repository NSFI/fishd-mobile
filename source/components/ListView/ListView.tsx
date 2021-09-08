import React, { ReactElement, useRef, useEffect, ReactNode } from 'react';
import { useMount, usePersistFn } from 'ahooks';
import { getElementRect } from '../../utils/dom';
import useScrollParent from '../../hooks/useScrollParent';

export type ListViewPropsType = {
  /** 禁止响应，通常多列tab时可能需要用到 */
  disabled: boolean;
  /** 是否加载中 */
  loading: boolean;
  /** 是否加载结束 */
  finished: boolean;
  /** 加载异常 */
  error: boolean;
  /** 加载文案 */
  loadingText?: string;
  /** 加载结束文案 */
  finishedText?: string;
  /** 加载异常文案 */
  errorText?: string;
  /** 是否初始化检查加载 */
  immediateCheck?: boolean;
  /** 滚动条与底部距离小于 offset 时触发onLoad事件 */
  offset?: number | string;
  children?: ReactNode;
  /** 自定义loading */
  customLoading?: ReactNode;
  /** 自定义finished */
  customFinished?: ReactNode;
  /** 自定义error */
  customError?: ReactNode;
  /** 滚动条与底部距离小于 offset 时触发 */
  onLoad?: () => void;
  onScroll?: (e: Event) => void;
};

export default function ListView({
  disabled = false,
  loading = false,
  finished = false,
  error = false,
  loadingText = '加载中...',
  finishedText = '没有更多了',
  errorText = '加载异常',
  immediateCheck = true,
  offset = 50,
  children,
  customLoading,
  customFinished,
  customError,
  onLoad,
  onScroll,
}: ListViewPropsType): ReactElement {
  const prefixCls = 'fm-listview';
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const scrollParent = useScrollParent(rootRef);

  const check = usePersistFn(() => {
    if (finished || loading || error || disabled) {
      return;
    }
    const scrollParentRect = getElementRect(scrollParent.current);
    const placeholderRect = getElementRect(placeholderRef.current);

    const diff = placeholderRect.bottom - scrollParentRect.bottom;
    if (diff < offset) {
      if (onLoad) {
        onLoad();
      }
    }
  });

  useMount(() => {
    if (immediateCheck) {
      setTimeout(() => {
        check();
      });
    }
  });

  useEffect(() => {
    setTimeout(() => {
      check();
    });
  }, [loading, finished, error]);

  useEffect(() => {
    if (!scrollParent.current) {
      return () => {};
    }
    function handleScroll(event: Event) {
      if (disabled) return;

      setTimeout(() => {
        check();
      });
      if (onScroll) {
        onScroll(event);
      }
    }
    scrollParent.current.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollParent.current) {
        scrollParent.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const renderLoading = customLoading || <div className={`${prefixCls}-loading`}>{loadingText}</div>;
  const renderFinish = customFinished || <div className={`${prefixCls}-finished`}>{finishedText}</div>;
  const renderError = customError || <div className={`${prefixCls}-error`}>{errorText}</div>;
  const placeholder = <div className={`${prefixCls}-placeholder`} ref={placeholderRef}></div>;
  return (
    <div className={prefixCls} ref={rootRef}>
      {children}
      {loading && renderLoading}
      {finished && renderFinish}
      {error && renderError}
      {placeholder}
    </div>
  );
}
