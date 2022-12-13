<template>
  <header class="navbar">
    <SidebarButton :show="showToggleButton" @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link">
      <img
        class="logo"
        v-if="$themeConfig.logo"
        :src="$withBase($themeConfig.logo)"
        :alt="$siteTitle">
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle">{{ $siteTitle }}</span>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}">

      <Mode />
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"/>
      <SearchBox v-else-if="$themeConfig.searchConfig.searchBox !== false && $frontmatter.searchBox !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '../SearchBox/AlgoliaSearchBox'
import SearchBox from '../SearchBox'
import SidebarButton from '../Sidebar/SidebarButton'
import NavLinks from '../Navbar/NavLinks'
import Mode from '../Mode'

export default {
  name: 'NavbarIndex',
  props: {
    showToggleButton: {
      type: Boolean,
      default: false
    }
  },
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },
  data () {
    return {
      linksWrapMaxWidth: null
    }
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia.value && this.algolia.value.apiKey && this.algolia.value.indexName
    }
  },
  methods: {
    css (el, property) {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const win = el.ownerDocument.defaultView
      // null means not to return pseudo styles
      return win.getComputedStyle(el, null)[property]
    }
  },
  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(this.css(this.$el, 'paddingLeft')) + parseInt(this.css(this.$el, 'paddingRight'))

    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  }
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  box-shadow var(--box-shadow)
  background var(--background-color)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
    border-radius 50%
  .site-name
    font-size 1.2rem
    font-weight 600
    color var(--text-color)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    background-color var(--background-color)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>
