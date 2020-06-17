import classnames from 'classnames';
import * as React from 'react';
import ReactCarousel from 'fishd-nuka-carousel';
import { CarouselPropsType } from './PropsType';

type IFrameOverFlow = 'visible' | 'hidden';

export interface CarouselProps extends CarouselPropsType {
  className?: string;
  prefixCls?: string;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  swipeSpeed?: number;
  easing?: () => void;
  style?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
  dotActiveStyle?: React.CSSProperties;
  frameOverflow?: IFrameOverFlow;
  cellSpacing?: number;
  slideWidth?: string | number;
}
export interface CarouselState {
  selectedIndex?: number;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  static defaultProps = {
    prefixCls: 'fm-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {},
  };

  firstClientX: any;

  firstClientY: any;

  clientX: any;

  clientY: any;

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  componentDidMount() {
    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchmove', this.preventTouch);
  }

  touchStart(e: any) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  // eslint-disable-next-line consistent-return
  preventTouch(e: any) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  onChange = (index: number) => {
    this.setState(
      {
        selectedIndex: index,
      },
      () => {
        if (this.props.afterChange) {
          this.props.afterChange(index);
        }
      },
    );
  };

  render() {
    const { infinite, selectedIndex, beforeChange, afterChange, dots, ...restProps } = this.props;

    const { prefixCls, dotActiveStyle, dotStyle, className, vertical } = restProps;

    const newProps = {
      ...restProps,
      wrapAround: infinite,
      slideIndex: selectedIndex,
      beforeSlide: beforeChange,
    };

    let Decorators: any[] = [];

    if (dots) {
      Decorators = [
        {
          component: ({
            slideCount,
            slidesToScroll,
            currentSlide,
          }: {
            slideCount: number;
            slidesToScroll: number;
            currentSlide: number;
          }) => {
            const arr: number[] = [];
            for (let i = 0; i < slideCount; i += slidesToScroll) {
              arr.push(i);
            }
            const dotDom = arr.map(index => {
              const dotCls = classnames(`${prefixCls}-wrap-dot`, {
                [`${prefixCls}-wrap-dot-active`]: index === currentSlide,
              });
              const currentDotStyle = index === currentSlide ? dotActiveStyle : dotStyle;
              return (
                <div className={dotCls} key={index}>
                  <span style={currentDotStyle} />
                </div>
              );
            });
            return <div className={`${prefixCls}-wrap`}>{dotDom}</div>;
          },
          position: 'BottomCenter',
        },
      ];
    }

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-vertical`]: vertical,
    });

    return <ReactCarousel {...newProps} className={wrapCls} decorators={Decorators} afterSlide={this.onChange} />;
  }
}
