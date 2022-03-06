import { show } from './show';
import { ModalProps } from './index';
import { mergeProps } from '../../utils/merge-props';
import { ReactNode } from 'react';

export type ModalConfirmProps = Omit<ModalProps, 'visible' | 'closeOnAction' | 'actions'> & {
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
};

export function confirm(p: ModalConfirmProps) {
  const defaultProps = {
    confirmText: '确认',
    cancelText: '取消',
  };
  const props = mergeProps(defaultProps, p);

  return new Promise<void>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'cancel',
          text: props.cancelText,
          type: 'default',
          onClick: props?.onCancel,
        },
        {
          key: 'confirm',
          text: props.confirmText,
          type: 'primary',
          onClick: props?.onConfirm,
        },
      ],
      onClose: () => {
        resolve();
      },
    });
  });
}
