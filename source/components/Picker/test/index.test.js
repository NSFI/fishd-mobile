import React from 'react';
import { mount } from 'enzyme';
import Picker from '../index';
import List from '../../list/index';

describe('<Picker />', () => {
  it('trigger event correctly', () => {
    // todos: write test!
    const fruit = [
      {
        label: '苹果',
        value: '苹果',
      },
      {
        label: '橘子',
        value: '橘子',
      },
      {
        label: '香蕉',
        value: '香蕉',
      },
    ];
    const wrapper = mount(
      <List>
        <Picker data={fruit}>
          <List.Item arrow="horizontal">选择</List.Item>
        </Picker>
      </List>,
    );
    wrapper.find('.fm-list-item').simulate('click');
    expect(wrapper.find('.fm-picker')).toHaveLength(1);
  });
});
