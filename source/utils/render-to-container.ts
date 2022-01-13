import { createPortal } from 'react-dom';
import { ReactElement } from 'react';
import { canUseDom } from './can-use-dom';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(getContainer: GetContainer, node: ReactElement) {
  if (canUseDom && getContainer) {
    let container;
    if (typeof getContainer === 'function') {
      container = getContainer();
    } else {
      container = getContainer;
    }

    container = container || document.body;
    return createPortal(node, container);
  }
  return node;
}
