import React, { useMemo } from 'react';
import classNames from 'classnames';
import CollapseIcon from './CollapseIcon';
import DeleteIcon from './DeleteIcon';

export type NumberKeyProps = {
  prefixCls?: string;
  className?: string;
  type?: string;
  text: number | string;
  color?: string;
  wider?: boolean;
  large?: boolean;
  onPress?: (type: string, text: number | string) => void;
};

const classPrefix = 'fm-number-key';

const NumberKey: React.FC<NumberKeyProps> = props => {
  const { className, large, wider, color, type = '', text } = props;

  const hanldeClick = e => {
    e.preventDefault();
    props.onPress?.(type, text);
  };

  const content = useMemo(() => {
    let contentNode: React.ReactNode = text;
    const isDelete = type === 'delete';
    const isClose = type === 'close';
    if (isDelete) {
      contentNode = <DeleteIcon></DeleteIcon>;
    }
    if (isClose) {
      contentNode = <CollapseIcon></CollapseIcon>;
    }
    return contentNode;
  }, [text, type]);

  const wrapCls = classNames(`${classPrefix}__wrapper`, className, wider ? `${classPrefix}__wider` : '');
  const keyCls = classNames(
    `${classPrefix}__key`,
    large ? `${classPrefix}__large` : '',
    color ? `${classPrefix}__${color}` : '',
  );

  return (
    <div className={wrapCls}>
      <div role="button" className={keyCls} onClick={hanldeClick}>
        {content}
      </div>
    </div>
  );
};

export default NumberKey;
