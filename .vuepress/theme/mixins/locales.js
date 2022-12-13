import { zhHans, zhHant, en, ja, ko, es } from '../locales/index'

export default {
  computed: {
    $customLocales () {
      const customLocalesConfig = this.$themeConfig?.locales || {}
      const customLocales = {}
      if (customLocalesConfig.hasOwnProperty.call(this.$localePath)) {
        Object.assign(customLocales, ...Object.values(customLocalesConfig[this.$localePath]?.customLocales))
      }
      if (/^zh-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...customLocales }
      }
      if (/^zh-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...customLocales }
      }
      if (/^ja-JP$/.test(this.$lang)) {
        return { ...ja, ...customLocales }
      }
      if (/^ko-KR$/.test(this.$lang)) {
        return { ...ko, ...customLocales }
      }
      if (/^es(-[A-Z]+)?$/.test(this.$lang)) {
        return { ...es, ...customLocales }
      }
      return { ...en, ...customLocales }
    }
  }
}
