import { useMemo } from 'react';

export const useCascadeOptions = options => {
  return useMemo(() => {
    const valueItemRecord = {};
    let depth = 1;

    const traverse = (option, currentDepth) => {
      if (!option.children || option.children.length === 0) {
        return;
      }
      valueItemRecord[option.value] = option.children;
      const newDepth = currentDepth + 1;
      if (depth < newDepth) {
        depth = newDepth;
      }
      option.children.forEach(op => {
        traverse(op, newDepth);
      });
    };

    options.forEach(item => {
      traverse(item, 1);
    });

    return {
      depth,
      valueItemRecord,
    };
  }, [options]);
};
