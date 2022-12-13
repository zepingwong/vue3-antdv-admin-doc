const { path } = require('@vuepress/shared-utils')
const extractCodeFromVueSFC = require('./extractCodeFromVueSFC.js')

module.exports = (options, context) => ({
  name: 'extract-code',
  chainMarkdown (config) {
    config.plugin('extract-code')
      .use(extractCodeFromVueSFC)
  },
  enhanceAppFiles: [
    path.resolve(__dirname, './enhanceAppFile.js')
  ]
})
