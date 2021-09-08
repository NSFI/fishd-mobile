export type ScrollElement = Element | Window;

function isWindow(val: unknown): val is Window {
  return val === window;
}

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

export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
  // event.nativeEvent.stopImmediatePropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
