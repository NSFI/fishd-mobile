import { ReactNode } from 'react';

export type ThumbType = 'up' | 'down' | 'upcancel' | 'downcancel' | '';

export type ModeType = 'normal' | 'thumb';

export type SizeType = 'lg' | 'md' | 'sm';

export interface RatePropsType {
  count: number;
  value: number;
  thumb: ThumbType;
  allowHalf: boolean;
  mode: ModeType;
  size: SizeType;
  defaultValue: number;
  readonly: boolean;
  disabled: boolean;
  onChange: (value: number) => {};
  onThumbChange: (value: ThumbType) => {};
  character: (props?: any) => ReactNode | ReactNode;
}
