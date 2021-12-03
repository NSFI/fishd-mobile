import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import Person, { PersonRef } from './Person';

export interface CheckListProps {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-check-list`;

const CheckList: React.FC<CheckListProps> = ({ className }) => {
  const CheckListClassName = classnames(classPrefix, {}, className);
  const personRef = useRef<Person>(null);

  useEffect(() => {
    personRef.current?.focus();
  }, []);

  return (
    <div className={CheckListClassName}>
      <Person ref={personRef}></Person>
    </div>
  );
};

export default CheckList;
