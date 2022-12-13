const { path } = require('@vuepress/shared-utils')

module.exports = () => ({
  name: 'plugin-back-to-top',
  enhanceAppFiles: [
    path.resolve(__dirname, './enhanceAppFile.js')
  ],
  globalUIComponents: 'BackToTop'
})
