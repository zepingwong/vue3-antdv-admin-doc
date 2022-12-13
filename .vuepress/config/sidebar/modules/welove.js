module.exports = {
  '/docs/WeLove/base/': [{
    title: '首页',
    path: '/docs/WeLove/'
  }, {
    title: '基础',
    collapsable: false,
    children: [
      'About',
      'Icon'
    ]
  }, {
    title: 'API',
    path: '/docs/WeLove/api/'
  }, {
    title: '数据库',
    path: '/docs/WeLove/database/'
  }],
  '/docs/WeLove/api/': [{
    title: '首页',
    path: '/docs/WeLove/'
  }, {
    title: '基础',
    path: '/docs/WeLove/base/'
  }, {
    title: 'API',
    collapsable: false,
    children: [
      'Account',
      'Category',
      'Event'
    ]
  }, {
    title: '数据库',
    path: '/docs/WeLove/database/'
  }],
  '/docs/WeLove/database/': [{
    title: '首页',
    path: '/docs/WeLove/'
  }, {
    title: '基础',
    path: '/docs/WeLove/base/'
  }, {
    title: 'API',
    path: '/docs/WeLove/api/'
  }, {
    title: '数据库',
    path: '/docs/WeLove/database/'
  }]
}
