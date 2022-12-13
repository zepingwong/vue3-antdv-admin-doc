const recordConfig = require('../record')
const valineConfig = require('../valine')
const authorConfig = require('../author')
const pageConfig = require('../page')
const modeConfig = require('../mode')
const locales = require('../locales')
const KanBanNiang = require('../KanBanNiang')
const searchConfig = require('../search')
module.exports = {
  type: 'docs',
  logo: '/logo.svg',
  locales: locales,
  // searchConfig
  searchConfig: searchConfig,
  // modeConfig
  modeConfig: modeConfig,
  // pageConfig
  pageConfig: pageConfig,
  // authorConfig
  authorConfig: authorConfig,
  // recordConfig：备案信息配置
  recordConfig: recordConfig,
  // valine
  valineConfig: valineConfig,
  // KanBanNiang
  KanBanNiang: KanBanNiang
}
