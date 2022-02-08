/**
 * 扩展options
 * @param data 参数
 * @param data.options 配置数据
 * @param data.nodes 子数据
 * @param data.pickerItem 选中的项 
 * @returns 新配置数据
 */
export const extendOptions = ({ options, nodes, pickerItem }) => {
  const traverse = option => {
    if (option.value === pickerItem.value) {
      option.children = nodes;
    } else {
      if (option.children && option.children.length) {
        option.children.forEach(op => {
          traverse(op);
        });
      }
    }
  };
  options.forEach(op => {
    traverse(op);
  });
  return [...options];
};
