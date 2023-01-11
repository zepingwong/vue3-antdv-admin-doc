import guide from "./guide.js"
import config from "./config.js"
import component from "./components.js"
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



