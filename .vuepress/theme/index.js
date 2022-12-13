// Theme API.
module.exports = () => ({
  plugins: [
    require('./plugins/back-to-top'),
    require('./plugins/loading-page'),
    require('./plugins/pagination'),
    require('./plugins/comments'),
    require('./plugins/message'),
    require('./plugins/kan-ban-niang'),
    [require('./plugins/one-click-copy'), {
      copyText: '复制代码',
      tip: {
        content: '复制成功!'
      }
    }],
    '@vuepress/active-header-links',
    [
      '@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-reco-content :not(a) > img'
    }],
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [{
        id: 'docslist',
        keys: ['docslist'],
        path: '/docslist/',
        layout: 'DocsList',
        scopeLayout: 'DocsList'
      }, {
        id: 'tags',
        keys: ['tags', 'tag'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tag'
      }, {
        id: 'categories',
        keys: ['categories'],
        path: '/categories/',
        layout: 'Categories',
        scopeLayout: 'Category'
      }, {
        id: 'timeline',
        keys: ['timeline'],
        path: '/timeline/',
        layout: 'TimeLines',
        scopeLayout: 'TimeLine'
      }]
    }],
    'vuepress-plugin-smooth-scroll',
    ['container', {
      type: 'tip',
      before: info => `<div class="custom-block tip"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="custom-block warning"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="custom-block danger"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]
  ]
})
