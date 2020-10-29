import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../index';
import List from '../../list/index';

describe('<DatePicker />', () => {
  it('trigger event correctly', () => {
    const wrapper = mount(
      <List>
        <DatePicker title="标题">
          <List.Item>日期时间选择</List.Item>
        </DatePicker>
      </List>,
    );
    wrapper.find('.fm-list-item').simulate('click');
    expect(wrapper.find('.fm-picker')).toHaveLength(1);
  });
});
