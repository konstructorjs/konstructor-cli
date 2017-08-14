const path = require('path');

module.exports = {
  server: {
    command: path.join(__dirname, '../node_modules/.bin/nodemon'),
    options: [
      require.resolve('konstructor/app'),
      '--watch', 'app',
      '--quiet',
    ],
    environment: {
    },
  },
  assets: {
    command: path.join(__dirname, '../node_modules/.bin/brunch'),
    options: [
      'watch',
    ],
    environment: {
    },
  },
  keys: ['<%= developmentSecretKeyBase %>'],
  liveReload: true,
};