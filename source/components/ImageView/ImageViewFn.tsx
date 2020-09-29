import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ImageViewComponent, { ImageViewProps } from './ImageView';

function ImageViewFn(config: ImageViewProps) {
  const { onClose, ...props } = config;

  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    if (onClose) {
      onClose();
    }
    // 延迟关闭
    setTimeout(() => {
      if (div) {
        ReactDOM.unmountComponentAtNode(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }
    }, 1000);
  }

  ReactDOM.render(<ImageViewComponent {...props} isFn={true} onClose={close} />, div);

  return {
    close,
  };
}

export default ImageViewFn;
