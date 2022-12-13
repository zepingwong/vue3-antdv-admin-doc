const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}) => ({
  name: 'plugin-message',
  define () {
    const {
      time = 3000,
      content = '消息内容',
      title = 'Tips',
      type = 'normal'
    } = options
    return {
      time,
      content,
      title,
      type
    }
  },
  enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFile.js')]
})
