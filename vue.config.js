const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        '@': resolve('src'),
        'assets': resolve('@/assets'),
        'components': resolve('@/components'),
        'views': resolve('@/views'),
      }
    }
  }
}
