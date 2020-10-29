import React from 'react';
import { mount } from 'enzyme';
import Steps from '../index';

const { Step } = Steps;

describe('<Steps />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Steps active={0}>
        <Step title="买家下单" />
        <Step title="商家接单" />
        <Step title="买家提货" />
        <Step title="交易完成" />
      </Steps>,
    );
    expect(wrapper.find('.fm-steps')).toHaveLength(1);
  });
});
