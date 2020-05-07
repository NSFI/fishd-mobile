import glob from 'glob';
import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

export default function webDemoTest(component, options = {}) {
  const files = glob.sync(`./source/components/${component}/demo/*.js`);
  files.forEach(file => {
    const testMethod = options.skip === true ? test.skip : test;
    testMethod(`renders ${file} correctly`, () => {
      const Demo = require(`../.${file}`).default; // eslint-disable-line global-require, import/no-dynamic-require
      const wrapper = render(<Demo />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
}
