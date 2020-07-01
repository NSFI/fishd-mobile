/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import * as React from 'react';
import { LayoutColPropsType } from './PropsType';
import classnames from 'classnames';

export interface ColProps extends LayoutColPropsType {
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode|string;
  style?: React.CSSProperties;
  gutter?:{left?:number,right?:number};
}

class Col extends React.Component<ColProps, any> {
  static defaultProps = {
    prefixCls: 'fm-col',
    span:'',
    offset:'',
    tag:'div'
  };

  constructor(props:ColProps){
    super(props)
  }

  customTag(props: ColProps):React.DOMElement<React.DOMAttributes<Element>, Element>{
    const attr = {...props}
    attr.tag = undefined
    attr.children = undefined
    return React.createElement(props.tag as string,{...attr}, props.children)
  }

  render(){
    const {children, tag, className, style, prefixCls, span,offset,
      onClick, gutter}:ColProps = this.props
    const wrapCls:string = classnames(prefixCls, className, {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-offset-${offset}`]: offset,
    })
    let gutterStyle:React.CSSProperties = {}
    if(gutter){
      gutterStyle = {
        paddingLeft:gutter.left+'px',
        paddingRight:gutter.right+'px',
      }
    }
    const CustomTag: (props: any) => React.DOMElement<React.DOMAttributes<Element>, Element> = this.customTag

    return <CustomTag 
      tag={tag}
      style={Object.assign({},style,gutterStyle)}
      className={wrapCls}
      onClick={onClick}
    >{children}</CustomTag>
  }
}
export default Col;
