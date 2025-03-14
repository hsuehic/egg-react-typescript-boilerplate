'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    home: 'app/web/page/home/index.tsx',
    admin: 'app/web/page/admin/index.tsx',
  },
  module: {
    rules: [
      {
        less: {
          include: [resolve('app/web'), resolve('node_modules')],
          options: {
            javascriptEnabled: true,
          },
        },
      },
      {
        typescript: true,
      },
    ],
  },
};
