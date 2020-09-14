import classnames from 'classnames';
import * as React from 'react';
import { SearchBarPropsType } from './PropsType';

export interface SearchBarProps extends SearchBarPropsType {
  prefixCls?: string;
  className?: string;
}

class SearchBar extends React.Component<SearchBarProps, any> {
  static defaultProps = {
    prefixCls: '',
  };

  render() {
    const { className, prefixCls } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return <div className={wrapCls}>my component</div>;
  }
}

export default SearchBar;
