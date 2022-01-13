import React, { useState } from 'react';
import classNames from 'classnames';

import Button, { ButtonProps } from '../Button';
import { mergeProps } from '../../utils/merge-props';

export type Action = {
  key: string | number;
  text: string;
  onClick?: () => void | Promise<void>;
} & Pick<ButtonProps, 'type' | 'color' | 'disabled'>;

export interface ModalActionProps {
  className?: string;
  style?: React.CSSProperties;
  action: Action;
  onAction: () => void | Promise<void>;
}

const defaultProps = {};
const classPrefix = `fm-modal-action`;

const ModalAction: React.FC<ModalActionProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className, action } = props;
  const ModalActionClassName = classNames(classPrefix, {}, className);
  const [loading, setLoading] = useState(false);

  const hanldeClick = async () => {
    setLoading(true);
    try {
      const promise = props.onAction();
      await promise;
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  return (
    <Button
      loading={loading}
      className={ModalActionClassName}
      style={props.style}
      color={action.color}
      type={action.type}
      onClick={hanldeClick}
      fill="none"
    >
      {action.text}
    </Button>
  );
};

export default ModalAction;
