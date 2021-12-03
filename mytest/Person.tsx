import React from 'react';

export type PersonProps = {};

export type PersonRef = {
  focus: () => void;

  blur: () => void;
};

class Person extends React.Component<PersonProps, any> {
  focus = () => {
    console.log('focus');
  };

  blur = () => {
    console.log('blur');
  };

  render() {
    return <div>test</div>;
  }
}

export default Person;
