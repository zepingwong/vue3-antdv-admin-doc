const navConfig = require('../nav')
const sidebarConfig = require('../sidebar/')
module.exports = {
  '/': {
    customLocales: {
      homeBlog: {}
    },
    navConfig: navConfig,
    sidebarConfig: sidebarConfig
  },
  '/en/': {
    customLocales: {
      homeBlog: {}
    },
    navConfig: navConfig,
    sidebarConfig: sidebarConfig
  }
}
