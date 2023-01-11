import guide from "./guide"
import config from "./config"
import component from "./components"
export default {
  '/api/': getApiSidebar(),
  '/components/': component,
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



