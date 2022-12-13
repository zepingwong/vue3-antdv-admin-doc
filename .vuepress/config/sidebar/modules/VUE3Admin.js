module.exports = {
  '/docs/VUE3Admin/guide/': [
    {
      title: '封面',
      path: '/docs/VUE3Admin/'
    },
    {
      title: '指南',
      collapsable: false,
      path: '/docs/VUE3Admin/guide/',
      children: [
        {
          title: '入门',
          children: [
            {
              title: '简介',
              path: '/docs/VUE3Admin/guide/start/introduction'
            },
            {
              title: '安装',
              path: '/docs/VUE3Admin/guide/start/install'
            }
          ]
        },
        {
          title: '开发',
          children: [
            {
              title: '开发工具',
              path: '/docs/VUE3Admin/guide/develop/tools'
            },
            {
              title: '代码规范',
              path: '/docs/VUE3Admin/guide/develop/lint'
            },
            {
              title: '代码生成',
              path: '/docs/VUE3Admin/guide/develop/code'
            },
            {
              title: '后端交互',
              path: '/docs/VUE3Admin/guide/develop/server'
            },
            {
              title: '构建与发布',
              path: '/docs/VUE3Admin/guide/develop/build'
            }
          ]
        },
        {
          title: '进阶',
          children: [
            {
              title: '路由配置',
              path: '/docs/VUE3Admin/guide/advance/router'
            },
            {
              title: '权限配置',
              path: '/docs/VUE3Admin/guide/advance/jurisdiction'
            },
            {
              title: 'mock',
              path: '/docs/VUE3Admin/guide/advance/mock'
            },
            {
              title: '全局配置',
              path: '/docs/VUE3Admin/guide/advance/config'
            },
            {
              title: '主题风格',
              path: '/docs/VUE3Admin/guide/advance/style'
            },
            {
              title: '国际化',
              path: '/docs/VUE3Admin/guide/advance/i18n'
            }
          ]
        },
        {
          title: '常见问题',
          children: [
            {
              title: '打包相关',
              path: '/docs/VUE3Admin/guide/others/package'
            },
            {
              title: '路由相关',
              path: '/docs/VUE3Admin/guide/others/router'
            }
          ]
        }
      ]
    },
    {
      title: 'API接口',
      path: '/docs/VUE3Admin/api/'
    },
    {
      title: '感谢巨人',
      path: '/docs/VUE3Admin/target/'
    }
  ],
  '/docs/VUE3Admin/api/': [
    {
      title: '封面',
      path: '/docs/VUE3Admin/'
    },
    {
      title: '指南',
      path: '/docs/VUE3Admin/guide/'
    },
    {
      title: 'API接口',
      collapsable: false,
      path: '/docs/VUE3Admin/api/',
      children: [
        {
          title: '系统接口',
          path: '/docs/VUE3Admin/api/system'
        },
        {
          title: '用户接口',
          path: '/docs/VUE3Admin/api/user'
        }
      ]
    },
    {
      title: '感谢巨人',
      path: '/docs/VUE3Admin/target/'
    }
  ],
  '/docs/VUE3Admin/target/': [
    {
      title: '封面',
      path: '/docs/VUE3Admin/'
    },
    {
      title: '指南',
      path: '/docs/VUE3Admin/guide/'
    },
    {
      title: 'API接口',
      path: '/docs/VUE3Admin/api/'
    },
    {
      title: '感谢巨人',
      path: '/docs/VUE3Admin/target/'
    }
  ]
}
