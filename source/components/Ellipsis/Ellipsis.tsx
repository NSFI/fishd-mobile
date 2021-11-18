import React, { useRef, useLayoutEffect } from 'react';
import classnames from 'classnames';

export interface EllipsisProps {
  className?: string;
  style?: React.CSSProperties;
  /** 文本内容 */
  content: string;
  /** 省略位置 */
  direction?: 'start' | 'end' | 'middle';
  /** 展示行数 */
  rows?: number;
  /** 展开文案 */
  expandText?: string;
  /** 收起文案 */
  collapseText?: string;
}

const classPrefix = `fm-ellipsis`;

const Ellipsis: React.FC<EllipsisProps> = ({ className, style, content = '', direction = 'end', rows = 1 }) => {
  const EllipsisClassName = classnames(classPrefix, {}, className);

  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const target = rootRef.current;
    if (!target) return;
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        console.log('ggg尺寸改变');
      });
      observer.observe(target);
      return () => {
        observer.disconnect();
      };
    } else {
      console.log('ggg尺寸改变');
    }
  }, [rootRef]);

  return (
    <div className={EllipsisClassName} ref={rootRef}>
      {content}
    </div>
  );
};

export default Ellipsis;
