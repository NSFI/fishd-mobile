import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';
import { ToastPropsType } from './PropsType';
import Icon from '../Icon';
import LoadMore from '../LoadMore';

const SHORT = 2;

const config: ToastPropsType = {
  duration: SHORT,
  mask: true,
};

let messageInstance: any;
let messageNeedHide: boolean;
const prefixCls = 'fm-toast';

function getMessageInstance(mask: boolean, callback: (notification: any) => void) {
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
    (notification: any) => callback && callback(notification),
  );
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask,
) {
  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'check',
    fail: 'error-o',
    offline: 'sad',
    loading: 'loading',
  };
  const iconType = iconTypes[type];
  messageNeedHide = false;
  getMessageInstance(mask, notification => {
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

    notification.notice({
      duration,
      style: {},
      content: iconType ? (
        <div className={`${prefixCls}-text ${prefixCls}-text-icon`} role="alert" aria-live="assertive">
          {iconType === 'loading' ? (
            <LoadMore type="spinner" color="#FFF"></LoadMore>
          ) : (
            <Icon type={iconType} fontSize={32} />
          )}
          <div className={`${prefixCls}-text-info`}>{content}</div>
        </div>
      ) : (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
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
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask: boolean = false) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(content: React.ReactNode, duration?: number, onClose?: () => void, mask: boolean = false) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(content: React.ReactNode, duration?: number, onClose?: () => void, mask: boolean = false) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(content: React.ReactNode, duration?: number, onClose?: () => void, mask: boolean = false) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(content: React.ReactNode, duration?: number, onClose?: () => void, mask: boolean = false) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(content: React.ReactNode, duration?: number, onClose?: () => void, mask: boolean = true) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
  config(conf: Partial<ToastPropsType> = {}) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};
