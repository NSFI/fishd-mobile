import * as React from 'react';

export type SelectCallBack = (index: number, rowIndex: number) => Promise<void> | void;

export type CancelCallBack = () => Promise<void> | void;

export type CloseCallBack = () => Promise<void> | void;

export interface ActionSheetOptions {
  maskClosable?: boolean;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  className?: string;
  transitionName?: string;
  maskTransitionName?: string;
  cancelButtonText?: string;
  onSelect?: SelectCallBack;
  onCancel?: CancelCallBack;
  onClose?: CloseCallBack;
}
export interface ShareOption {
  icon: React.ReactNode;
  title: string;
}

export interface ActionSheetWithOptions extends ActionSheetOptions {
  options: string[];
}

export interface ShareActionSheetWithOptions extends ActionSheetOptions {
  options: ShareOption[] | ShareOption[][];
}
