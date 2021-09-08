import React, { useRef } from 'react';
import { useMount } from 'ahooks';
import { inBrowser } from '../../utils/index';

type ScrollElement = HTMLElement | Window;

const defaultRoot = inBrowser ? window : undefined;
const overflowScrollReg = /scroll|auto/i;

export function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

export function getScrollParent(el: Element, root: ScrollElement | undefined = defaultRoot) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

function useScrollParent(
  el: React.MutableRefObject<Element | undefined | null>,
  root: ScrollElement | undefined = defaultRoot,
) {
  const scrollRootRef: React.MutableRefObject<Element | Window | undefined> = useRef(undefined);

  useMount(() => {
    if (el.current) {
      scrollRootRef.current = getScrollParent(el.current, root);
    }
  });
  return scrollRootRef;
}

export default useScrollParent;
