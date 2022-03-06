/**
 * 挂载静态属性到组件上
 * @param component React组件
 * @param properties 属性
 */
export function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
