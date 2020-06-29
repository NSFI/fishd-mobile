import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Badge from '../Badge.tsx';

describe('Badge', () => {
  it('renders dot prop correctly', () => {
    const wrapper = render(
      <Badge dot>
        <span style={{ width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block' }} />
      </Badge>,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.fm-badge-dot')).toHaveLength(1);
  });

  it('renders text correctly', () => {
    const wrapper = mount(
      <Badge text="券" />,
    );
    expect(wrapper.find('.fm-badge-text')).toHaveLength(1);
    expect(wrapper.find('.fm-badge-text').text()).toBe('券');
  });
});