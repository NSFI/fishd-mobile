import React from 'react'
import { shallow, render, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Button from '../Button'

describe('<Button />', () => {
test('<Button /> render text', () => {
    const wrapper = mount(<Button>button text</Button>)
    expect(wrapper.find('.fm-button').text()).toBe('button text')
  })

test('should call onClick callback if provided', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button onClick={onClickMock}>hello</Button>);
    wrapper.find('.fm-button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

test('<Button /> snapshot', () => {
    const largeWrapper = render(<Button size='large' />)
    expect(toJson(largeWrapper)).toMatchSnapshot()

    const smallWrapper = render(<Button size='large'>hello world</Button>)
    expect(toJson(smallWrapper)).toMatchSnapshot()
  })
})
