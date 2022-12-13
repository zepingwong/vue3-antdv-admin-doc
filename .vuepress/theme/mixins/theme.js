export default {
  computed: {
    $mode () {
      const modeOptions = ['dark', 'auto', 'light']
      const mode = this.$themeConfig?.modeConfig?.mode || 'auto'
      return modeOptions.indexOf(mode) !== -1 ? mode : 'auto'
    },
    $modeSwitch () {
      return this.$themeConfig?.modeConfig?.modeSwitch !== false
    },
    $bgImageStyle () {
      const url = this.$frontmatter.bgImage
        ? this.$withBase(this.$frontmatter.bgImage)
        : require('../images/bg.svg')

      const initBgImageStyle = {
        textAlign: 'center',
        overflow: 'hidden',
        background: `url(${url}) center/cover no-repeat`
      }
      const { bgImageStyle } = this.$frontmatter
      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    }
  }
}
