import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Switch.tsx';

describe('Switch', () => {
  it('check api', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Switch checked onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { checked: false } });
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
