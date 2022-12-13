module.exports = {
  '/docs/ESP32LightSwitch/about/': [{
    title: '首页', path: '/docs/ESP32LightSwitch/'
  }, {
    title: '关于', path: '/docs/ESP32LightSwitch/about/'
  }, {
    title: '电路', path: '/docs/ESP32LightSwitch/circuit/'
  }], '/docs/ESP32LightSwitch/circuit/': [{
    title: '首页', path: '/docs/ESP32LightSwitch/'
  }, {
    title: '关于', path: '/docs/ESP32LightSwitch/about/'
  }, {
    title: '电路', // path: '/docs/ESP32LightSwitch/circuit/'
    collapsable: false, children: ['relay', 'schematic']
  }]
}
