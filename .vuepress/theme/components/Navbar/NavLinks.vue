<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <reco-icon :icon="`icon-${repoLabel.toLowerCase()}`" />
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </nav>
</template>

<script>
import { RecoIcon } from '../../core/components'
import DropdownLink from '../DropdownLink/DropdownLink'
import { resolveNavLinkItem } from '../../helpers/utils'
import NavLink from './NavLink'

export default {
  name: 'NavLinks',
  components: { NavLink, DropdownLink, RecoIcon },
  computed: {
    nav () {
      const _nav = this.$themeLocaleConfig?.navConfig || this.$themeConfig?.navConfig || {}
      let navList = []
      Object.keys(_nav).map((key) => {
        navList.push({
          key: key,
          ..._nav[key]
        })
      })
      const locales = this.$site.locales || {}
      navList = navList.filter((item) => {
        return this.$localePath === '/' ? true : item.key !== 'category' && item.key !== 'timeLine' && item.key !== 'tag' && item.key !== 'docs'
      })
      navList.map((item) => {
        item['link'] = item.key === 'home' ? this.$localePath
          : item.key === 'docs' ? this.$localePath + 'docslist/'
            : item.key === 'timeLine' ? this.$localePath + 'timeline/'
              : item.key === ('tag' || 'category') ? this.$localePath + item.key + '/'
                : item?.link ? item?.link : ''

        item['text'] = item.text || this.$customLocales[item.key]
        item['icon'] = item.icon || 'icon-' + item.key
        item['items'] = item.key === 'category' ? this.$categories.list.map(i => {
          i.link = i.path
          i.text = i.name
          return i
        }) : item?.items
        return item
      })

      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$themeConfig?.locales || {}
        const languageDropdown = {
          text: this.$customLocales.selectText,
          icon: 'icon-language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link = ''
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localePath, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...navList, languageDropdown]
      }
      return navList
    },
    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },
    repoLink () {
      const { repo } = this.$themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return ''
    },
    repoLabel () {
      if (!this.repoLink) return ''
      if (this.$themeConfig.repoLabel) {
        return this.$themeConfig.repoLabel
      }
      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }
      return 'Source'
    }
  }
}
</script>
<style lang="stylus">
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover, &.router-link-active
      color $accentColor
      .iconfont
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem
@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0
@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>
