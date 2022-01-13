/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import * as React from 'react';
import classNames from 'classnames';
import { LayoutRowPropsType } from './PropsType';

export interface RowProps extends LayoutRowPropsType {
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

class Row extends React.Component<RowProps, any> {
  static defaultProps: Partial<RowProps> = {
    prefixCls: 'fm-row',
    type: '',
    gutter: '',
    tag: 'div',
    justify: 'start',
    align: 'top',
  };

  constructor(props: RowProps) {
    super(props);
  }

  customTag(props: RowProps): React.DOMElement<React.DOMAttributes<Element>, Element> {
    const attr = { ...props };
    attr.tag = undefined;
    attr.children = undefined;
    return React.createElement(props.tag as string, { ...attr }, props.children);
  }

  spaces(solt: React.ReactNode | Array<React.ReactNode>): React.ReactNode | Array<React.ReactNode> {
    const gutter: number = Number(this.props.gutter);
    if (!gutter) return solt;
    const children: Array<React.ReactNode> = solt instanceof Array ? solt : [solt];

    let Remaining = 0;
    return children.map((item: any, index: number) => {
      const averagePadding: number = (gutter * (children.length - 1)) / children.length;
      const space = { right: 0, left: 0 };
      if (index === 0) {
        Remaining = space.right = averagePadding;
      } else {
        space.left = gutter - Remaining;
        Remaining = space.right = averagePadding - space.left;
      }
      return React.cloneElement(item, {
        gutter: space,
        key: index,
      });
    });
  }

  render() {
    const { children, tag, className, style, prefixCls, onClick, type, align, justify }: RowProps = this.props;
    const flex: boolean = type === 'flex';
    const wrapCls: string = classNames(prefixCls, className, {
      [`${prefixCls}-flex`]: flex,
      [`${prefixCls}-align-${align}`]: flex && align,
      [`${prefixCls}-justify-${justify}`]: flex && justify,
    });
    const solt = this.spaces(children);

    const CustomTag: (props: any) => React.DOMElement<React.DOMAttributes<Element>, Element> = this.customTag;
    return (
      <CustomTag tag={tag} style={style} className={wrapCls} onClick={onClick}>
        {solt}
      </CustomTag>
    );
  }
}
export default Row;
