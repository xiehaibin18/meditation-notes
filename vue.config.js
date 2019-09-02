const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'network': resolve('src/network'),
      }
    }
  }
}
