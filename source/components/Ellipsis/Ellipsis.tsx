import React, { useState, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { mergeProps } from '../../utils/merge-props';

function pxToNumber(value: string | null): number {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}
export type EllipsisProps = {
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
};

type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};

const classPrefix = `fm-ellipsis`;

const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '展开',
  collapseText: '收起',
};

/**
 * fork from ant-design-mobile
 * https://github.com/ant-design/ant-design-mobile/blob/master/src/components/ellipsis/ellipsis.tsx
 */
const Ellipsis: React.FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { className, style, content, direction, rows } = props;
  const EllipsisClassName = classNames(classPrefix, {}, className);

  const rootRef = useRef<HTMLDivElement>(null);
  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({});
  const [expanded, setExpanded] = useState(false);
  const [exceeded, setExceeded] = useState(false);

  useLayoutEffect(() => {
    const target = rootRef.current;
    if (!target) return;

    const calcBox = () => {
      const targetStyle = window.getComputedStyle(target);
      const styleList = Array.prototype.slice.apply(targetStyle);
      const tombstone = document.createElement('div');

      styleList.forEach(styleName => {
        tombstone.style.setProperty(styleName, targetStyle.getPropertyValue(styleName));
      });

      tombstone.style.position = 'fixed';
      tombstone.style.left = '999999px';
      tombstone.style.top = '999999px';
      tombstone.style.zIndex = '-1000';
      tombstone.style.height = 'auto';
      tombstone.style.minHeight = 'auto';
      tombstone.style.maxHeight = 'auto';
      tombstone.style.textOverflow = 'clip';
      tombstone.style.whiteSpace = 'normal';
      tombstone.style.webkitLineClamp = 'unset';
      tombstone.style.webkitBoxOrient = 'unset';
      tombstone.style.display = 'block';

      const maxHeight =
        pxToNumber(targetStyle.lineHeight) * (rows + 0.5) +
        pxToNumber(targetStyle.paddingTop) +
        pxToNumber(targetStyle.paddingBottom);

      tombstone.innerText = content;
      document.body.append(tombstone);

      if (tombstone.offsetHeight <= maxHeight) {
        setExceeded(false);
      } else {
        setExceeded(true);
        const end = props.content.length;
        const actionText = expanded ? props.collapseText : props.expandText;

        function check(left: number, right: number): EllipsisedValue {
          if (right - left <= 1) {
            if (props.direction === 'end') {
              return {
                leading: props.content.slice(0, left) + '...',
              };
            } else {
              return {
                tailing: '...' + props.content.slice(right, end),
              };
            }
          }
          const middle = Math.round((left + right) / 2);
          if (props.direction === 'end') {
            tombstone.innerText = props.content.slice(0, middle) + '...' + actionText;
          } else {
            tombstone.innerText = actionText + '...' + props.content.slice(middle, end);
          }
          if (tombstone.offsetHeight <= maxHeight) {
            if (props.direction === 'end') {
              return check(middle, right);
            } else {
              return check(left, middle);
            }
          } else {
            if (props.direction === 'end') {
              return check(left, middle);
            } else {
              return check(middle, right);
            }
          }
        }

        function checkMiddle(leftPart: [number, number], rightPart: [number, number]): EllipsisedValue {
          if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
            return {
              leading: props.content.slice(0, leftPart[0]) + '...',
              tailing: '...' + props.content.slice(rightPart[1], end),
            };
          }
          const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
          const rightPartMiddle = Math.floor((rightPart[0] + rightPart[1]) / 2);
          tombstone.innerText =
            props.content.slice(0, leftPartMiddle) +
            '...' +
            actionText +
            '...' +
            props.content.slice(rightPartMiddle, end);
          if (tombstone.offsetHeight <= maxHeight) {
            return checkMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
          } else {
            return checkMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
          }
        }

        const middle = Math.floor((0 + end) / 2);
        const ellipsised = props.direction === 'middle' ? checkMiddle([0, middle], [middle, end]) : check(0, end);
        setEllipsised(ellipsised);
      }

      document.body.removeChild(tombstone);
    };

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        calcBox();
      });
      observer.observe(target);
      return () => {
        observer.disconnect();
      };
    } else {
      calcBox();
    }
  }, [rootRef]);

  const expandActionElement =
    exceeded && props.expandText ? (
      <a
        onClick={() => {
          setExpanded(true);
        }}
      >
        {props.expandText}
      </a>
    ) : null;
  const collapseActionElement =
    exceeded && props.expandText ? (
      <a
        onClick={() => {
          setExpanded(false);
        }}
      >
        {props.collapseText}
      </a>
    ) : null;
  const renderContent = () => {
    if (!exceeded) {
      return props.content;
    }
    if (expanded) {
      return (
        <>
          {props.content}
          {collapseActionElement}
        </>
      );
    } else {
      return (
        <>
          {ellipsised.leading}
          {expandActionElement}
          {ellipsised.tailing}
        </>
      );
    }
  };
  return (
    <div ref={rootRef} className={EllipsisClassName} style={style}>
      {renderContent()}
    </div>
  );
};

export default Ellipsis;
