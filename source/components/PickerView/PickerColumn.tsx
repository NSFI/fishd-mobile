import React, { useLayoutEffect } from 'react';
import classNames from 'classnames';
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import LoadMore from '../LoadMore'
import { mergeProps } from '../../utils/merge-props';
import isEqual from 'lodash/isEqual'

import type { PickerColumnItem, PickerColumnValue } from './PickerView'

export interface PickerColumnProps {
  className?: string;
  style?: React.CSSProperties;
  index: number;
  column: PickerColumnItem[];
  value: PickerColumnValue;
  onSelect: (value: PickerColumnValue, index: number) => void
}

const defaultProps = {}
const classPrefix = `fm-picker-column`;

const PickerColumn: React.FC<PickerColumnProps> = (p) => {
  const props = mergeProps(defaultProps, p)
  const { className, column, value } = props
  const itemHeight = 34;
  const [{ y }, api] = useSpring(() => ({ y: 0 }));

  const bind = useDrag(
    state => {
      const max = 0;
      const min = -itemHeight * (column.length - 1);
      if (state.last) {
        const position = state.offset[1] + state.velocity[1] * state.direction[1] * 50;
        const index = calcIndex({ min, max, position, itemHeight });
        selectIndex(index);
      } else {
        api.start({ y: calcBounce({ min, max, position: state.offset[1], constant: 0.25 }) });
      }
    },
    {
      axis: 'y',
      from: () => [0, y.get()],
      filterTaps: true,
      pointer: { touch: true },
    },
  );
  
  /** reset ui */
  useLayoutEffect(() => {
    if (!value) return
    const targetIndex = column.findIndex(item => item.value === value)
    if (targetIndex < 0) return
    const finalPosition = targetIndex * -itemHeight
    api.start({ y: finalPosition, immediate: y.goal !== finalPosition })
  }, [value, column])

  /** reset value */
  useLayoutEffect(() => {
    if (column.length === 0) {
      if (value !== null) {
        onSelect(null)
      }
    } else {
      if (!column.some(item => item.value === value)) {
        const firstItem = column[0]
        onSelect(firstItem.value)
      }
    }
  }, [column, value])

  const onSelect = (val: PickerColumnValue) => {
    props.onSelect(val, props.index)
  }

  const selectIndex = (index: number) => {
    scrollToIndex(index)
    const item = column[index]
    if (!item) return
    onSelect(item.value)
  }

  const scrollToIndex = (index: number, immediate?: boolean) => {
    const position = -itemHeight * index;
    api.start({ y: position, immediate });
  };

  const calcIndex = ({ position, min, max, itemHeight }) => {
    const count = column.length;
    let index = 0;
    if (position > max) {
      index = 0;
    } else if (position < min) {
      index = count - 1;
    } else {
      index = -Math.round(position / itemHeight);
    }
    return index;
  };

  const calcBounce = ({ position, min, max, constant }) => {
    if (position > max) {
      return max + (position - max) * constant;
    }
    if (position < min) {
      return min + (position - min) * constant;
    }
    return position;
  };

  const PickerColumnClassName = classNames(classPrefix, {}, className);

  return (
    <div className={`${classPrefix}-wrap`} {...bind()}>
      <animated.div className={PickerColumnClassName} style={{ y }}>
        {column.map((item, index) => {
          return (
            <div key={item.value} className={`${classPrefix}__item`} data-selected={item.value === value} onClick={() => selectIndex(index)}>
              <div className={`${classPrefix}__label`}>
                <span>{item.label}</span>
              </div>
              { item.loading && <LoadMore className={`${classPrefix}__loading`} type="spinner" size="14px"></LoadMore>}
            </div>
          );
        })}
      </animated.div>
    </div>
  );
};

export default React.memo(PickerColumn, (prev, next) => {
  if (prev.index !== next.index) { return false }
  if (prev.value !== next.value) { return false }
  if (!isEqual(prev.column, next.column)) {
    return false
  }
  return true
});
