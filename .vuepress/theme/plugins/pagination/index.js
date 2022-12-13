const { path } = require('@vuepress/shared-utils')

module.exports = (options) => {
  const { perPage = 10 } = options || {}
  return {
    define () {
      return {
        PERPAGE: perPage
      }
    },
    name: 'plugin-pagination',
    enhanceAppFiles: [
      path.resolve(__dirname, './enhanceAppFile.js'),
      () => ({
        name: 'dynamic-pagination',
        content: `export default ({ Vue }) => {
          Vue.mixin({
            computed: {
              $perPage () { return ${perPage} }
            }
          })
        }`
      })
    ]
  }
}
