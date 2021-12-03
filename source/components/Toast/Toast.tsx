import React from 'react';
import classnames from 'classnames';
import Notification from 'rmc-notification';

import Icon from '../Icon';
import LoadMore from '../LoadMore';

export type ToastProps = {
  icon?: 'success' | 'error' | 'loading' | React.ReactNode;
  duration?: number;
  mask?: boolean;
  content?: React.ReactNode;
  onClose?: () => void;
};

let messageInstance: any;
let messageNeedHide: boolean;
const prefixCls = 'fm-toast';

const getMessageInstance: (config: ToastProps) => Promise<any> = ({ mask }) =>
  new Promise(resolve => {
    (Notification as any).newInstance(
      {
        prefixCls,
        style: {}, // clear rmc-notification default style
        transitionName: 'fm-fade',
        className: classnames({
          [`${prefixCls}-mask`]: mask,
          [`${prefixCls}-nomask`]: !mask,
        }),
      },
      (notification: any) => resolve(notification),
    );
  });

function Toast(props: ToastProps = {}) {
  const { icon, duration = 3, mask = false, content, onClose } = props;
  messageNeedHide = false;
  getMessageInstance({ mask }).then(notification => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;

    let iconNode: React.ReactNode = null;
    if (icon === 'loading') {
      iconNode = <LoadMore className="fm-toast-loading" type="spinner" color="#fff"></LoadMore>;
    } else if (icon === 'error') {
      iconNode = <Icon type="error-o" fontSize={32} />;
    } else if (icon === 'success') {
      iconNode = <Icon type="check" fontSize={32} />;
    } else {
      iconNode = icon;
    }

    notification.notice({
      duration,
      style: {},
      content: (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          {iconNode}
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });
}

export default {
  show(config: ToastProps | React.ReactNode) {
    if (typeof config === 'string' || React.isValidElement(config)) {
      return Toast({ content: config });
    }
    return Toast(config || {});
  },
  info(content: React.ReactNode) {
    return Toast({ content });
  },
  success(content: React.ReactNode) {
    return Toast({ icon: 'success', content });
  },
  error(content: React.ReactNode) {
    return Toast({ icon: 'error', content });
  },
  loading(content: React.ReactNode) {
    return Toast({ icon: 'loading', content, duration: 0, mask: true });
  },
  clear() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
};
