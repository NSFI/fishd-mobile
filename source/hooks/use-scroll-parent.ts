import React, { useRef } from 'react';
import { useMount } from 'ahooks';
import { canUseDom } from '../utils/can-use-dom';
import { getScrollParent } from '../utils/get-scroll-parent';

type ScrollElement = HTMLElement | Window;

const defaultRoot = canUseDom ? window : undefined;

/**
 * 获取第一个滚动父元素
 * @param el 当前元素的ref
 * @param root 顶层元素
 * @returns 滚动父元素
 */
export function useScrollParent(
  el: React.MutableRefObject<Element | undefined | null>,
  root: ScrollElement | undefined = defaultRoot,
) {
  const scrollRootRef: React.MutableRefObject<Element | Window | undefined | null> = useRef(undefined);

  useMount(() => {
    if (el.current) {
      scrollRootRef.current = getScrollParent(el.current, root);
    }
  });
  return scrollRootRef;
}
