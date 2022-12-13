const { resolve } = require('path')

module.exports = () => ({
  name: 'plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, './enhanceAppFile.js'),
  globalUIComponents: 'KanBanNiang'
})
