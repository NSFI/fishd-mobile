import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { closest } from '../../utils/dom';
import Modal from './Modal';
import { Action } from './PropsType';

export default function operation(actions = [{ text: '确定' }], platform = 'ios') {
  let closed = false;

  const prefixCls = 'fm-modal';
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button: Action<React.CSSProperties>) => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onPress || function noop() {};
    button.onPress = () => {
      if (closed) {
        return;
      }

      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {});
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target as Element, `.fm-modal-footer`);
    if (!pNode) {
      e.preventDefault();
    }
  }

  ReactDOM.render(
    <Modal
      visible
      operation
      transparent
      prefixCls={prefixCls}
      transitionName="fm-zoom"
      closable={false}
      maskClosable
      onClose={close}
      footer={footer}
      maskTransitionName="fm-fade"
      className="fm-modal-operation"
      platform={platform}
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    />,
    div,
  );

  return {
    close,
  };
}
