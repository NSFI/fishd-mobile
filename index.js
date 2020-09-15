// const req = require.context('./source/components', true, /^\.\/[^_][\w-]+\/style\/index\.less?$/);
// req.keys().forEach(mod => {
//   req(mod);
// });
const req = require.context('./source/components', true, /^\.\/[^_][\w-]+\/style\/index?$/);
req.keys().forEach(mod => {
  req(mod);
});

module.exports = require('./source/components/index');
