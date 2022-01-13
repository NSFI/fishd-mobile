import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';

export interface StepsProps {
  prefixCls?: string;
  className?: string;
  active?: string | number;
  activeColor?: string;
  inactiveColor?: string;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
}

class Steps extends React.Component<StepsProps, any> {
  static defaultProps = {
    prefixCls: 'fm-steps',
    active: 0,
    activeColor: '#07c160',
    inactiveColor: '#969799',
    direction: 'horizontal',
  };

  static Step: any;

  render() {
    const {
      className,
      prefixCls,
      children,
      active,
      activeColor,
      inactiveColor,
      activeIcon,
      inactiveIcon,
      direction,
    } = this.props;
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);

    const wrapCls = classNames(prefixCls, className, `${prefixCls}__${direction}`);

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}__items`}>
          {Children.map(filteredChildren, (child: any, index) => {
            if (!child) {
              return null;
            }
            const childProps = {
              stepNumber: `${index + 1}`,
              prefixCls,
              active,
              activeColor,
              inactiveColor,
              activeIcon,
              inactiveIcon,
              ...child.props,
            };

            return cloneElement(child, childProps);
          })}
        </div>
      </div>
    );
  }
}

export default Steps;
