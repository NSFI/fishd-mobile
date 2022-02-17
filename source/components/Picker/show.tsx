import React, { useEffect, useState } from 'react';
import Picker, { PickerProps } from './Picker';
import { renderToBody } from '../../utils/render-to-body';

export type PickerShowProps = Omit<PickerProps, 'visible'>;

export function show(props: PickerShowProps) {
  return new Promise((resolve, reject) => {
    const Wrapper = () => {
      const [visible, setVisible] = useState(false);
      useEffect(() => {
        setVisible(true);
      }, []);
      return (
        <Picker
          {...props}
          visible={visible}
          onConfirm={val => {
            resolve(val);
          }}
          onCancel={() => {
            reject(null);
          }}
          onClose={() => {
            props.onClose?.();
            setVisible(false);
          }}
          afterClose={() => {
            props.afterClose?.();
            unmount();
          }}
        />
      );
    };

    const unmount = renderToBody(<Wrapper />);
  });
}
