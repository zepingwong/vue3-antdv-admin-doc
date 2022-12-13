import guide from "./guide"
import config from "./config"
export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': guide,
  '/config/': config
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

