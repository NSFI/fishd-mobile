export interface AvatarPropsType {
  size?: 'lg' | 'sm' | 'xs';
  type?: 'image' | 'icon' | 'text';
  text?: any;
  shape?: 'circle' | 'square' | number;
  radius?: number;
  width?: number;
  height?: number;
}
// | 属性 | 说明         | 类型                                            | 默认值    |
// | ---- | ------------ | ----------------------------------------------- | --------- |
// | size | 设置大小 | Enum {'xsmall', 'small', 'middle', 'large'}  | 'middle' |
// | type | 设置类型 | Enum {'image', 'icon', 'text'} | 'icon' |
// | shape | 形状 |  Enum { 'circle', 'square', 'custom' }  | 'circle' |
// | radius | 自定义形状时，圆角大小, 默认单位px | number | -- |
// | width | 自定义宽度, 默认单位px | number | -- |
// | height | 自定义高度, 默认单位px | number | -- |
