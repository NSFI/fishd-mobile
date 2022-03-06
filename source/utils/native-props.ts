import React from 'react';

export interface NativeProps<S extends string = never> {
  className?: string;
  style?: React.CSSProperties & Partial<Record<S, string>>;
}

export function getNativeAttr<P extends NativeProps>(props: P) {
  return Object.keys(props).reduce<{ [key: string]: string }>((prev, key) => {
    if (key.startsWith('aria-') || key.startsWith('data-') || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}
