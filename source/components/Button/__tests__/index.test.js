import React from 'react';
import { mount } from 'enzyme';

import Button from '../Button.tsx';

describe('<Button />', () => {
  test('<Button /> render text', () => {
    const wrapper = mount(<Button>button text</Button>);
    expect(wrapper.find('.fm-button').text()).toBe('button text');
  });

  test('should call onClick callback if provided', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button onClick={onClickMock}>hello</Button>);
    wrapper.find('.fm-button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
