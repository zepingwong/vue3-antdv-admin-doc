<template>
  <main class="page" :style="pageStyle">
    <ModuleTransition>
      <section v-show="recoShowModule">
        <div class="page-title">
          <h1 class="title">{{ $page.title }}</h1>
          <PageInfo :pageInfo="$page" :showAccessNumber="showAccessNumber"></PageInfo>
        </div>
        <!-- 这里使用 v-show，否则影响 SSR -->
        <Content class="theme-reco-content"/>
      </section>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <footer v-if="recoShowModule" class="page-edit">
        <div class="edit-link" v-if="editLink">
          <a
            :href="editLink"
            target="_blank"
            rel="noopener noreferrer"
          >{{ $customLocales.editLinkText }}</a>
          <OutboundLink/>
        </div>

        <div
          class="last-updated"
          v-if="lastUpdated"
        >
          <span class="prefix">{{ $customLocales.lastUpdatedText }}: </span>
          <span class="time">{{ lastUpdated }}</span>
        </div>
      </footer>
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <div class="page-nav" v-if="recoShowModule && (prev || next)">
        <p class="inner">
          <span v-if="prev" class="prev">
            <router-link v-if="prev" class="prev" :to="prev.path">
              {{ prev.title || prev.path }}
            </router-link>
          </span>
          <span v-if="next" class="next">
            <router-link v-if="next" :to="next.path">
              {{ next.title || next.path }}
            </router-link>
          </span>
        </p>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Comments v-if="recoShowModule" :isShowComments="shouldShowComments"/>
    </ModuleTransition>

    <ModuleTransition>
      <SubSidebar
        v-if="recoShowModule"
        :style="{
          bottom: $themeConfig.KanBanNiang.isShow === true ? '11rem' : 0
        }"
        @foldSubSidebar='foldSubSidebar'
      />
    </ModuleTransition>
  </main>
</template>

<script>
import SubSidebar from './SubSidebar'
import PageInfo from './PageInfo'
import { resolvePage, outboundRE, endingSlashRE } from '../../helpers/utils'
import { ModuleTransition } from '../../core/components'

export default {
  name: 'PageIndex',
  components: { PageInfo, ModuleTransition, SubSidebar },
  props: ['sidebarItems'],
  data () {
    return {
      isShowSubSidebar: true
    }
  },
  computed: {
    recoShowModule () {
      return this.$parent.recoShowModule
    },
    // 是否显示评论
    shouldShowComments () {
      const { isShowComments } = this.$frontmatter
      const { showComment } = this.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    },
    showAccessNumber () {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = this || {}
      const vc = valineLocalConfig || valineConfig
      return vc && vc.visitor !== false
    },
    lastUpdated () {
      const { lastUpdated } = this.$themeConfig?.pageConfig || { pageConfig: false }
      return lastUpdated === true ? this.$page.lastUpdated : false
    },
    prev () {
      const frontmatterPrev = this.$frontmatter.prev
      return frontmatterPrev === false ? false : frontmatterPrev ? resolvePage(this.$site.pages, frontmatterPrev, this.$route.path) : resolvePrev(this.$page, this.sidebarItems)
    },
    next () {
      const frontmatterNext = this.$frontmatter.next
      return frontmatterNext === false ? false : frontmatterNext ? resolvePage(this.$site.pages, frontmatterNext, this.$route.path) : resolveNext(this.$page, this.sidebarItems)
    },
    editLink () {
      if (this.$frontmatter.editLink === false) {
        return false
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
      return ''
    },
    pageStyle () {
      return this.$showSubSideBar && this.isShowSubSidebar ? {} : { paddingRight: '0' }
    }
  },
  methods: {
    foldSubSidebar (val) {
      this.isShowSubSidebar = val
    }
  }
}

function createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
  const bitbucket = /bitbucket.org/
  if (bitbucket.test(repo)) {
    const base = outboundRE.test(docsRepo)
      ? docsRepo
      : repo
    return (
      base.replace(endingSlashRE, '') +
      `/src` +
      `/${docsBranch}/` +
      (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
      path +
      `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
    )
  }

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  return (
    base.replace(endingSlashRE, '') +
    `/edit` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    path
  )
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
// 这里不要加scope
@require '../../styles/wrapper.styl'

.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  padding-right 12rem
  display block

  .page-title
    max-width $contentWidth
    margin 0 auto
    padding 1rem 2.5rem
    color var(--text-color)

    .title
      font-weight bold
      font-family "Microsoft YaHei UI"

  .theme-reco-content h2
    position relative
    padding-left 0.8rem

    &::before
      position absolute
      left 0
      display block
      height 1.8rem
      content ''
      border-left 5px solid $accentColor

  .page-edit
    @extend $wrapper
    padding-top 1rem
    padding-bottom 1rem
    overflow auto

    .edit-link
      display inline-block

      a
        color $accentColor
        margin-right 0.25rem

    .last-updated
      float right
      font-size 0.9em

      .prefix
        font-weight 500
        color $accentColor

      .time
        font-weight 400
        color #aaa

  .comments-wrapper
    @extend $wrapper

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0

  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--border-color)
    padding-top 1rem
    overflow auto

  // clear float

  .next
    float right

@media (max-width: $MQMobile)
  .page
    padding-right 0

    .page-title
      padding 0 1rem

    .page-edit
      .edit-link
        margin-bottom .5rem

      .last-updated
        font-size .8em
        float none
        text-align left

</style>
