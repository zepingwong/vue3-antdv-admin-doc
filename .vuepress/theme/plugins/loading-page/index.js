const { path } = require('@vuepress/shared-utils')

module.exports = () => ({
  name: 'plugin-loading-page',
  enhanceAppFiles: [
    path.resolve(__dirname, './enhanceAppFile.js')
  ]
})
