export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '功能',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/api/'
        },
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        },
        {
          text: 'Tag 标签',
          link: '/components/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue'
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '介绍',
          link: '/guide/'
        },
        {
          text: '入门',
          link: '/guide/start/'
        },
        {
          text: '常见问题',
          link: '/guide/start/qa'
        }
      ]
    },
    {
      text: '开发',
      items: [
        {
          text: '开发工具配置',
          link: '/guide/develop/tools'
        },
        {
          text: '代码规范',
          link: '/guide/develop/eslint'
        },
        {
          text: 'tsconfig',
          link: '/guide/develop/tsconfig'
        }
      ]
    }
  ]
}

