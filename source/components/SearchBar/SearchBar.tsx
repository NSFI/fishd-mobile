import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

export interface SearchBarProps {
  prefixCls?: string;
  className?: string;
}

class SearchBar extends React.Component<SearchBarProps, any> {
  static defaultProps = {
    prefixCls: 'fm-searchbar',
  };

  render() {
    const { className, prefixCls } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}__content`}>
          <div className={`${prefixCls}__icon`}>
            <Icon type="fm-search" style={{ width: '14px', height: '14px', color: '#333' }} />
          </div>
          <div className={`${prefixCls}__body`}>
            <input className={`${prefixCls}__input`} type="search" placeholder="请输入搜索关键词" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
