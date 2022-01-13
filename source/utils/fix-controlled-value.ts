/**
 * react双向绑定时候，若传入的值是undefined，则会被react视为非受控组件
 * 如果此时动态修改了值，则会抛出警告提示：从非受控组件变成受控组件
 */
export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}
