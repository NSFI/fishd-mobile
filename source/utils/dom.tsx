export type ScrollElement = Element | Window;

/** 是否是window对象 */
function isWindow(val: unknown): val is Window {
  return val === window;
}

/**
 * 转换盒模型
 * @param width 宽度
 * @param height 高度
 * @returns 盒模型
 */
function makeDOMRect(width: number, height: number) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height,
  } as DOMRect;
}

/**
 * 获取元素盒模型
 * @param element 元素
 * @returns 盒模型
 */
export const getElementRect = (element: Element | Window | undefined | null) => {
  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return makeDOMRect(width, height);
  }

  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }

  return makeDOMRect(0, 0);
};

/**
 * 获取元素滚动高度
 * @param el 滚动元素
 * @returns 滚动高度
 */
export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

/**
 * 阻止事件冒泡
 * @param event 事件
 */
export function stopPropagation(event: Event) {
  event.stopPropagation();
}

/**
 * 阻止默认事件
 * @param event 事件
 * @param isStopPropagation 是否阻止冒泡
 */
export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/**
 * 获取指定选择器的最近祖先元素
 * @param el 当前元素
 * @param selector 选择器
 * @returns 元素
 */
export function closest(el: Element, selector: string) {
  const matchesSelector =
    el.matches || el.webkitMatchesSelector || (el as any).mozMatchesSelector || (el as any).msMatchesSelector;
  let p: Element | null = el;
  while (p) {
    if (matchesSelector.call(p, selector)) {
      return p;
    }
    p = p.parentElement;
  }
  return null;
}
