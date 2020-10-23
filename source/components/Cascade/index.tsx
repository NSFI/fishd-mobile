/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

interface Item {
  label: string;
  key: string | number;
  parentKey?: string | number;
  children?: Item[];
}

interface Props {
  onSelect: (number) => void;
  cascadeData: Item[];
  selectId?: string | number;
}

const Cascade: FC<Props> = ({ onSelect, selectId, cascadeData }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const selectFocusRef = useRef(false);
  const [expand, setExpand] = useState(false);
  const [cols, setCols] = useState<Item[][]>([cascadeData]);
  const [selectColIndex, setSelectColIndex] = useState(0);
  const [selectItem, setSelectItem] = useState<Item | undefined>(undefined);

  const flatArr: Item[] = [];
  const flatArray = (arr: Item[] = []) => {
    arr.forEach(item => {
      flatArr.push(item);
      if (item.children) {
        flatArray(item.children);
      }
    });
    return flatArr;
  };

  const parentKeys: (string | number)[] = [];
  const findParentKeys = (arr, key) => {
    const self = arr.find(item => item.key === key);
    parentKeys.unshift(self.key);
    if (self.parentKey) {
      findParentKeys(arr, self.parentKey);
    }
    return parentKeys;
  };

  const formatCols = [cascadeData];
  const formatColsFn = (arr: Item[], keys: (string | number)[]) => {
    const pKey = [...keys];
    const sk = pKey.shift();
    const self = arr.find(item => item.key === sk);
    if (self?.children) {
      formatCols.push(self.children);
    }
    if (pKey.length > 0) {
      formatColsFn(arr, pKey);
    }
    return formatCols;
  };

  useEffect(() => {
    if (selectId) {
      const arr = flatArray(cascadeData);
      setSelectItem(arr.find(item => item.key === selectId));
      const keys = findParentKeys(arr, selectId);
      setSelectColIndex(keys.length - 2);
      const finalCols = formatColsFn(arr, keys);
      setCols(finalCols);
    }
  }, [selectId]);

  useEffect(() => {
    window.addEventListener('click', () => {
      setExpand(false);
    });
  }, []);

  const handleExpandSubCol = (e, index, item) => {
    e.stopPropagation();
    selectRef.current?.focus();
    const { children = [] } = item;
    setSelectItem(item);
    if (children.length > 0) {
      setSelectColIndex(index);
      setCols(pre => {
        const final = [...pre];
        final.splice(index + 1, 1, children);
        return final;
      });
    } else {
      selectRef.current?.blur();
      onSelect(item.key);
    }
  };

  const handleBack = e => {
    e.stopPropagation();
    selectRef.current?.focus();
    setSelectColIndex(pre => pre - 1);
    setCols(pre => {
      const final = [...pre];
      final.pop();
      return final;
    });
  };

  const handleSelectAll = e => {
    e.stopPropagation();
    // 若当前选中项没有子项，此时的选中全部应为选中父项
    if (!selectItem?.children) {
      // 需要递归查找  1-1-1-3连续点击返回回到了1，此时selectItem的parentKey是找不到的
      const flatColArr: Item[] = [];
      const flatColArray = (arr: Item[] = []) => {
        arr.forEach(item => {
          flatColArr.push(item);
          if (item.children) {
            flatColArray(item.children);
          }
        });
        return flatColArr;
      };
      flatColArray(cols[selectColIndex]);

      let finalItem: Item | undefined;
      const findFinalItem = key => {
        if (finalItem) return;
        const allItem = cols[selectColIndex].find(item => item.key === key);
        if (!allItem) {
          findFinalItem(flatColArr.find(item => item.key === key)?.parentKey);
        } else {
          finalItem = allItem;
        }
      };

      findFinalItem(selectItem?.parentKey);
      setSelectItem(finalItem);
      onSelect(finalItem?.key);
    } else {
      onSelect(selectItem?.key);
    }
    setExpand(false);
  };

  return (
    <div className="fm-cascade-wrapper">
      <div
        ref={selectRef}
        className={classNames('fm-cascade-select', {
          active: expand,
          selected: !!selectItem,
        })}
        onClick={e => {
          e.stopPropagation();
          if (!selectFocusRef.current) {
            selectRef.current?.blur();
          }
          selectFocusRef.current = false;
        }}
        tabIndex={-1}
        onBlur={() => {
          selectFocusRef.current = false;
          setExpand(false);
        }}
        onFocus={() => {
          selectFocusRef.current = true;
          setExpand(true);
        }}
      >
        {selectItem?.label || '请选择'}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <div
          className={classNames('cascade-column', { expand })}
          style={
            selectRef.current
              ? {
                  top: selectRef.current?.offsetTop + selectRef.current?.getBoundingClientRect().height,
                }
              : {}
          }
        >
          {[...cols, []].map((col, colIndex) => (
            <div
              key={colIndex}
              className={classNames('col', { selectCol: selectColIndex === colIndex, fullWidth: cols.length === 1 })}
              style={cols.length > 2 ? { transform: `translateX(${(cols.length - 2) * -100}%)` } : {}}
            >
              {colIndex === selectColIndex && colIndex !== 0 && (
                <div className="item back" onClick={handleBack}>
                  <Icon type="allow-left" fontSize={12} />
                  返回上一级
                </div>
              )}
              {colIndex !== 0 && !!selectItem && (
                <div className="item all" onClick={handleSelectAll}>
                  全部
                </div>
              )}
              {col.map(item => (
                <div
                  className={classNames('item', {
                    selected: item.key === selectItem?.key || item.key === selectItem?.parentKey,
                  })}
                  key={item.key}
                  onClick={e => handleExpandSubCol(e, colIndex, item)}
                >
                  {item.label}
                  {!!item.children && <Icon type="allow-right" fontSize={12} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cascade;
