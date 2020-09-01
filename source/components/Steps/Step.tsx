import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export interface StepProps {
  prefixCls?: string;
  title?: string | React.ReactNode;
  active: string | number;
  stepNumber: number;
  activeColor: string;
  inactiveColor: string;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  description?: string;
}

class Step extends React.Component<StepProps, any> {
  render() {
    const {
      prefixCls,
      title,
      active,
      stepNumber,
      activeColor,
      inactiveColor,
      activeIcon,
      inactiveIcon,
      description,
    } = this.props;

    const stepProcess = stepNumber - 1 === Number(active);
    const stepFinish = stepNumber - 1 < Number(active);

    const wrapClass = classNames(`${prefixCls}__step`, {
      [`${prefixCls}__step-process`]: stepProcess,
      [`${prefixCls}__step-finish`]: stepFinish,
    });

    return (
      <div className={wrapClass}>
        <div className={`${prefixCls}__title`} style={{ color: stepProcess ? activeColor : inactiveColor }}>
          <div>{title}</div>
          {description && <div className={`${prefixCls}__description`}>{description}</div>}
        </div>
        <div className={`${prefixCls}__dot`}>
          {stepProcess
            ? activeIcon || (
                <Icon type="fm-wancheng" color={activeColor} style={{ width: '14px', height: '14px' }}></Icon>
              )
            : inactiveIcon || (
                <i
                  className={`${prefixCls}__icon`}
                  style={{ backgroundColor: stepFinish || stepProcess ? activeColor : inactiveColor }}
                ></i>
              )}
        </div>
        <div className={`${prefixCls}__line`} style={{ backgroundColor: stepFinish ? activeColor : undefined }}></div>
      </div>
    );
  }
}

export default Step;
