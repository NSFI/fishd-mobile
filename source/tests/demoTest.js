/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

const getDemoContainer = demoName => {
  if (!demoName) return null;
  const demoContainerClass = require(`../../site/docs/zh-CN/${demoName}.md`);

  if (typeof demoContainerClass === 'function') {
    return demoContainerClass;
  }
  if (
    demoContainerClass &&
    typeof demoContainerClass === 'object' &&
    typeof demoContainerClass.default === 'function'
  ) {
    return demoContainerClass.default;
  }
  return null;
};

export default function webDemoTest(compName, options = {}) {
  const demoName = compName.substr(0, 1).toLowerCase() + compName.substr(1);
  const testMethod = options.skip === true ? test.skip : test;

  testMethod(`Renders ${compName} demo correctly`, () => {
    const Container = getDemoContainer(demoName);
    expect(Container).not.toBeNull();
    const wrapper = render(<Container />); // eslint-disable-line global-require, import/no-dynamic-require
    expect(toJson(wrapper)).toMatchSnapshot();
  });
}
