/* eslint-disable prefer-destructuring */
import * as React from 'react';
import classnames from 'classnames';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import { IPhotoSliderProps } from 'react-photo-view/dist/PhotoSlider';

import { ImageViewPropsType } from './PropsType';

export interface ImageViewProps extends ImageViewPropsType, IPhotoSliderProps {
  prefixCls?: string;
  className?: string;
  isFn?: boolean;
  defaultIndex?: number;
}

// TODO: 后续自己实现
class ImageView extends React.Component<ImageViewProps, any> {
  static defaultProps = {
    prefixCls: 'fm-imageView',
  };

  static preview: any; // 函数式调用

  constructor(props) {
    super(props);
    this.state = {
      innerVisible: false, // 如果是函数式组件，则内部维护状态
      index: props.index || props.defaultIndex,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.index !== undefined && nextProps.index !== prevState.index) {
      return {
        ...prevState,
        index: nextProps.index,
      };
    }
    return null;
  }

  componentDidMount() {
    // 等待dom创建后在进行显示，否则会闪烁
    this.setState({
      innerVisible: true,
    });
  }

  handleClose = () => {
    this.setState({
      innerVisible: false,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleIndexChange = index => {
    const { onIndexChange } = this.props;
    this.setState({ index });
    if (onIndexChange) {
      onIndexChange(index);
    }
  };

  render() {
    const { className, prefixCls, visible, isFn, ...restProps } = this.props;
    const { index } = this.state;
    const { innerVisible } = this.state;
    const wrapCls = classnames(prefixCls, className, {});
    const v = isFn ? innerVisible : visible;
    return (
      <div className={wrapCls}>
        <PhotoSlider
          {...restProps}
          visible={v}
          index={index}
          onClose={this.handleClose}
          onIndexChange={this.handleIndexChange}
        />
      </div>
    );
  }
}

export default ImageView;
