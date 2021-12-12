const path = require('path');

module.exports = {
  globalSassResource: [
    path.resolve(process.cwd(), 'src/sass/mixins/_index.scss'),
    path.resolve(process.cwd(), 'src/sass/constants/_index.scss'),
    path.resolve(process.cwd(), 'src/sass/constants/_colors.scss'),
  ]
}
