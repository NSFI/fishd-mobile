import { ReactNode } from 'react';
import { show } from './show';
import { ModalProps } from './index';
import { mergeProps } from '../../utils/merge-props';

export type ModalAlertProps = Omit<ModalProps, 'visible' | 'closeOnAction' | 'actions'> & {
  confirmText?: ReactNode;
  onConfirm?: () => void | Promise<void>;
};

export function alert(p: ModalAlertProps) {
  const defaultProps = {
    confirmText: '确认',
  };
  const props = mergeProps(defaultProps, p);
  return new Promise<void>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: props.confirmText,
          type: 'primary',
        },
      ],
      onAction: props.onConfirm,
      onClose: () => {
        resolve();
      },
    });
  });
}
