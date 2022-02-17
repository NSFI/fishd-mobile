import React from 'react';
import classNames from 'classnames'
import './DemoBlock.less'

const DemoBlock = props => {
  const DemoBlockClassName = classNames('demo-block', {
    'no-style': !!props.noStyle
  })
  return (
    <div className={DemoBlockClassName}>
      <div className="demo-block__title">{props.title}</div>
      <div className="demo-block__body">{props.children}</div>
    </div>
  );
};

export default DemoBlock;