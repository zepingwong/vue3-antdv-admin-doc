const themeConfig = require('./config/theme')
const head = require('./config/head')
const plugins = require('./config/plugins')
module.exports = {
  head: head,
  port: 8088,
  base: '/vue3-antdv-admin-doc/',
  title: 'Admin后台文档',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: themeConfig,
  markdown: {
    'lineNumbers': false,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-katex'))
    }
  },
  plugins: plugins
}
