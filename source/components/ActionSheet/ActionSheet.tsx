/* eslint-disable no-case-declarations */
/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog from 'rmc-dialog';
import TouchFeedback from 'rmc-feedback';
import { ActionSheetWithOptions, ShareActionSheetWithOptions, ShareOption } from './PropsType';
import { getDataAttr } from '../../utils';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
const queue: any[] = [];

function createActionSheet(flag: string, config: ActionSheetWithOptions | ShareActionSheetWithOptions) {
  const props = {
    prefixCls: 'fm-action-sheet',
    cancelButtonText: '取消',
    ...config,
  };
  const {
    prefixCls,
    className,
    transitionName,
    maskTransitionName,
    maskClosable = true,
    onSelect,
    onCancel,
    onClose,
  } = props;

  const div = document.createElement('div');
  document.body.appendChild(div);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  queue.push(close);

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
      const index = queue.indexOf(close);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  function cb(index: any, rowIndex = 0) {
    const res = onSelect && onSelect(index, rowIndex);
    if (res && res.then) {
      res.then(() => {
        close();
      });
    } else {
      close();
    }
  }

  function handleCancel() {
    const res = onCancel && onCancel();
    if (res && res.then) {
      res.then(() => {
        close();
      });
    } else {
      close();
    }
  }

  function handleClose() {
    const res = onClose && onClose();
    if (res && res.then) {
      res.then(() => {
        close();
      });
    } else {
      close();
    }
  }

  const { title, message, options, destructiveButtonIndex, cancelButtonText } = props;
  const titleMsg = [
    title ? (
      <h3 key="0" className={`${prefixCls}-title`}>
        {title}
      </h3>
    ) : null,
    message ? (
      <div key="1" className={`${prefixCls}-message`}>
        {message}
      </div>
    ) : null,
  ];
  let children: React.ReactElement<any> | null = null;
  let mode = 'normal';
  switch (flag) {
    case NORMAL:
      const normalOptions = options as string[];
      mode = 'normal';
      children = (
        <div {...getDataAttr(props)}>
          <div className={`${prefixCls}-button-list`} role="group">
            <div className={`${prefixCls}-top`}>
              {titleMsg}
              {normalOptions.map((item, index) => {
                const itemProps = {
                  className: classnames(`${prefixCls}-button-list-item`, {
                    [`${prefixCls}-destructive-button`]: destructiveButtonIndex === index,
                  }),
                  onClick: () => cb(index),
                  role: 'button',
                };
                const bContent = <div {...itemProps}>{item}</div>;
                const bItem = (
                  <TouchFeedback key={index} activeClassName={`${prefixCls}-button-list-item-active`}>
                    {bContent}
                  </TouchFeedback>
                );
                return bItem;
              })}
            </div>
            {cancelButtonText && (
              <div className={`${prefixCls}-bottom`}>
                <div className={`${prefixCls}-gap`}></div>
                <TouchFeedback activeClassName={`${prefixCls}-button-list-item-active`}>
                  <div
                    className={classnames(`${prefixCls}-button-list-item`, {
                      [`${prefixCls}-cancel-button`]: true,
                    })}
                    onClick={() => handleCancel()}
                    role={'button'}
                  >
                    {cancelButtonText}
                  </div>
                </TouchFeedback>
              </div>
            )}
          </div>
        </div>
      );
      break;
    case SHARE:
      mode = 'share';
      const multipleLine = (options.length && Array.isArray(options[0])) || false;
      const createList = (item: ShareOption, index: number, rowIndex = 0) => (
        <div className={`${prefixCls}-share-list-item`} role="button" key={index} onClick={() => cb(index, rowIndex)}>
          <div className={`${prefixCls}-share-list-item-icon`}>{item.icon}</div>
          <div className={`${prefixCls}-share-list-item-title`}>{item.title}</div>
        </div>
      );
      children = (
        <div {...getDataAttr(props)}>
          <div className={`${prefixCls}-top`}>
            {titleMsg}
            <div className={`${prefixCls}-share`}>
              {multipleLine ? (
                (options as ShareOption[][]).map((item, index) => (
                  <div key={index} className={`${prefixCls}-share-wrap`}>
                    <div className={`${prefixCls}-share-list`}>{item.map((ii, ind) => createList(ii, ind, index))}</div>
                  </div>
                ))
              ) : (
                <div className={`${prefixCls}-share-list`}>
                  {(options as ShareOption[]).map((item, index) => createList(item, index))}
                </div>
              )}
            </div>
          </div>
          {cancelButtonText && (
            <div className={`${prefixCls}-bottom`}>
              <div className={`${prefixCls}-gap`}></div>
              <TouchFeedback activeClassName={`${prefixCls}-share-cancel-button-active`}>
                <div className={`${prefixCls}-share-cancel-button`} role="button" onClick={() => handleCancel()}>
                  {cancelButtonText}
                </div>
              </TouchFeedback>
            </div>
          )}
        </div>
      );
      break;
    default:
      break;
  }

  const rootCls = classnames(`${prefixCls}-${mode}`, className);

  ReactDOM.render(
    <Dialog
      visible
      title=""
      footer=""
      prefixCls={prefixCls}
      className={rootCls}
      transitionName={transitionName || `fm-slide-up`}
      maskTransitionName={maskTransitionName || `fm-fade`}
      onClose={() => handleClose()}
      maskClosable={maskClosable}
      wrapProps={(props as any).wrapProps || {}}
    >
      {children}
    </Dialog>,
    div,
  );

  return {
    close,
  };
}

export default {
  showActionSheetWithOptions(config: ActionSheetWithOptions) {
    createActionSheet(NORMAL, config);
  },
  showShareActionSheetWithOptions(config: ShareActionSheetWithOptions) {
    createActionSheet(SHARE, config);
  },
  close() {
    queue.forEach(q => q());
  },
};
