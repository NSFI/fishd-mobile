/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import classnames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import * as React from 'react';
import { GridPropsType, DataItem } from './PropsType';
import Flex from '../Flex/index';

export interface GridProps extends GridPropsType {
  prefixCls?: string;
  className?: string;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    prefixCls: 'fm-grid',
    data: [],
    border: true,
    gutter: 0,
    columnNum: 4,
    square: true,
    itemStyle: {},
  };

  renderItem = (dataItem: DataItem | any, index: number, columnNum: number, renderItem: any) => {
    const { prefixCls, gutter, border, square, itemStyle } = this.props;
    let itemEl: any = null;
    if (renderItem) {
      itemEl = renderItem(dataItem, index);
    } else if (dataItem) {
      const { icon, text } = dataItem;
      itemEl = (
        <>
          {React.isValidElement(icon) ? icon : <img className={`${prefixCls}-icon`} src={icon} />}
          <div className={`${prefixCls}-text`}>{text}</div>
        </>
      );
    }
    const cls = classnames(prefixCls, {
      [`column-num-${columnNum}`]: true,
      [`${prefixCls}-item-content`]: true,
      [`${prefixCls}-item-content__border`]: !!gutter && border,
    });
    let style = {
      ...itemStyle,
    };
    if (gutter && square) {
      style = {
        right: gutter,
        bottom: gutter,
        height: 'auto',
        width: 'auto',
      };
    }
    return (
      <div className={cls} style={style}>
        {itemEl}
      </div>
    );
  };

  getRows = (rowCount: number, dataLength: number) => {
    let { columnNum, data, renderItem, prefixCls, onClick, activeStyle, activeClassName, gutter, square } = this.props;
    const rowsArr: any[] = [];

    columnNum = columnNum!;

    const rowWidth = `${100 / columnNum}%`;
    const colStyle = {
      width: rowWidth,
      paddingRight: !square && gutter ? gutter : 'auto',
    };

    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        let itemEl;
        if (dataIndex < dataLength) {
          const el = data && data[dataIndex];
          itemEl = (
            <TouchFeedback
              key={`griditem-${dataIndex}`}
              activeClassName={activeClassName || `${prefixCls}-item-active`}
              activeStyle={activeStyle}
            >
              <Flex.Item
                className={`${prefixCls}-item`}
                onClick={() => onClick && onClick(el, dataIndex)}
                style={colStyle}
              >
                {this.renderItem(el, dataIndex, columnNum, renderItem)}
              </Flex.Item>
            </TouchFeedback>
          );
        } else {
          itemEl = (
            <Flex.Item
              key={`griditem-${dataIndex}`}
              className={`${prefixCls}-item ${prefixCls}-null-item`}
              style={colStyle}
            />
          );
        }
        rowArr.push(itemEl);
      }
      rowsArr.push(
        <Flex
          justify="center"
          align="stretch"
          key={`gridline-${i}`}
          style={{ marginTop: i !== 0 && !square ? gutter : 0 }}
        >
          {rowArr}
        </Flex>,
      );
    }
    return rowsArr;
  };

  render() {
    const {
      prefixCls,
      className,
      data,
      border,
      gutter,
      square,
      activeStyle,
      activeClassName,
      ...restProps
    } = this.props;
    let { columnNum } = restProps;

    columnNum = columnNum!;

    const dataLength = (data && data.length) || 0;

    const rowCount = Math.ceil(dataLength / columnNum);

    const rowsArr = this.getRows(rowCount, dataLength);
    const renderEl = rowsArr;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-square`]: square,
      [`${prefixCls}-line`]: border && !gutter,
    });
    return (
      <div className={cls} style={{ paddingLeft: gutter }}>
        {renderEl}
      </div>
    );
  }
}

export default Grid;
