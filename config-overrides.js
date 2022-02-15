const { alias } = require('react-app-rewire-alias')

module.exports = alias({
  '@components': './src/components',
  '@pages': './src/pages',
  '@assets': './src/assets',
});
