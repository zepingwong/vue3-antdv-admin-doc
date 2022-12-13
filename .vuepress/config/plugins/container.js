module.exports = [
  ['vuepress-plugin-container', {
    type: 'theorem',
    before: info => `<div class="theorem"><p class="title">${info}</p>`,
    after: '</div>'
  }]
]