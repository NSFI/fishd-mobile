/* eslint-disable prefer-destructuring */
import * as React from 'react';
import classnames from 'classnames';
import Photoswipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { ImageViewPropsType } from './PropsType';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    tabIndex?: number;
    role?: string;
    modifiers?: any;
  }
}

export interface ImageViewProps extends ImageViewPropsType {
  prefixCls?: string;
  className?: string;
}

// TODO: 后期自己实现
class ImageView extends React.Component<ImageViewProps, any> {
  static defaultProps = {
    prefixCls: 'pswp',
  };

  pswpElement: any;

  componentDidMount() {
    this.pswpElement = document.querySelectorAll('.pswp')[0];
    const items = [
      {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400,
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900,
      },
    ];

    const options = {
      index: 0,
      history: false,
      shareEl: false,
      fullscreenEl: false,
    };

    const gallery = new Photoswipe(this.pswpElement, PhotoswipeUIDefault, items, options);
    gallery.init();
  }

  render() {
    const { className, prefixCls } = this.props;
    const wrapCls = classnames(prefixCls, className, {});
    return (
      <div className={wrapCls} tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>

              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageView;
