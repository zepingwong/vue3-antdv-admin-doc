<template>
  <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
    <component v-if="frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <PageFooter v-if="frontmatter.home" class="footer"/>
  </Common>
</template>

<script>
import HomeBlog from '../components/HomeBlog'
import HomeDocs from '../components/HomeDocs'
import HomePageOne from '../components/HomePageOne'
import Page from '../components/Page'
import Common from '../components/Common'
import PageFooter from '../components/Footer'
import { resolveSidebarItems } from '../helpers/utils'
import moduleTransitonMixin from '../mixins/moduleTransiton'

export default {
  name: 'Layout',
  mixins: [moduleTransitonMixin],
  components: { HomeBlog, HomeDocs, Page, Common, HomePageOne, PageFooter },
  computed: {
    sidebarItems () {
      const { $page, $site, $localePath } = this
      if ($page) {
        return resolveSidebarItems(
          $page,
          $page.regularPath,
          $site,
          $localePath
        )
      } else {
        return []
      }
    },
    frontmatter () {
      return this.$frontmatter
    },
    homeCom () {
      const { type } = this.$frontmatter || this.$themeConfig || { type: 'docs' }
      return ['docs', 'blog', 'HomeBlog', 'HomeDocs', 'HomePageOne'].indexOf(type) > 0 ? type === 'blog' ? 'HomeBlog'
        : type === 'docs' ? 'HomeDocs' : type : 'HomeBlog'
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src='../styles/theme.styl' lang="stylus"></style>
