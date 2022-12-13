const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}) => ({
  name: 'plugin-one-click-copy',
  define () {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = 'Copy code',
      change,
      visibleTip = true
    } = options
    return {
      selector,
      copyText,
      change,
      visibleTip
    }
  },
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})
