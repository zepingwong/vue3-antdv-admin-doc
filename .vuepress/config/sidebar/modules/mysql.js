module.exports = {
  '/docs/MySQL/about/': [{
    title: '首页', path: '/docs/MySQL/'
  }, {
    title: '关于', path: '/docs/MySQL/about/'
  }, {
    title: '安装', path: '/docs/MySQL/install/'
  }, {
    title: '管理', path: '/docs/MySQL/manage/'
  }], '/docs/MySQL/install/': [{
    title: '首页', path: '/docs/MySQL/'
  }, {
    title: '关于', path: '/docs/MySQL/about/'
  }, {
    title: '安装', collapsable: false, children: ['041201', '041301', '122201']
  }, {
    title: '管理', path: '/docs/MySQL/manage/'
  }], '/docs/MySQL/manage/': [{
    title: '首页', path: '/docs/MySQL/'
  }, {
    title: '关于', path: '/docs/MySQL/about/'
  }, {
    title: '安装', path: '/docs/MySQL/install/'
  }, {
    title: '管理', collapsable: false, children: ['092802']
  }]
}
