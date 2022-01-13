import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { isFunction } from '../../utils/base';

export interface StepProps {
  prefixCls?: string;
  title?: string | React.ReactNode;
  active: string | number;
  stepNumber: number;
  activeColor: string;
  inactiveColor: string;
  activeIcon?: React.ReactNode | Function;
  inactiveIcon?: React.ReactNode | Function;
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

    let renderActiveIcon = activeIcon;
    if (isFunction(activeIcon)) {
      renderActiveIcon = activeIcon({ stepProcess, stepFinish });
    }

    let renderInactiveIcon = inactiveIcon;
    if (isFunction(inactiveIcon)) {
      renderInactiveIcon = inactiveIcon({ stepProcess, stepFinish });
    }

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
            ? renderActiveIcon || <Icon type="success" color={activeColor} fontSize={14}></Icon>
            : renderInactiveIcon || (
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
