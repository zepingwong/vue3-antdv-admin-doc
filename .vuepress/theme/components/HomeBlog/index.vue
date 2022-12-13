<template>
  <div class="home-blog-wrapper">
    <hero v-if="recoShowModule" ref="hero"></hero>

    <ModuleTransition delay="0.12">
      <div v-show="recoShowModule" class="article">
        <!-- 文章列表 -->
        <div class="list">
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <!-- 文章列表 -->
        <!-- 信息包装器 -->
        <div class="info-wrapper">
          <!-- 个人信息 -->
          <personal-info v-if="frontmatter.PersonalInfo !== false" />
          <!-- 个人信息 -->
          <!-- 标签列表 -->
          <tag-list v-if="frontmatter.TagList !== false"  @getCurrentTag="getPagesByTags" />
          <!-- 标签列表 -->
          <!-- 分类列表 -->
          <category-list v-if="frontmatter.CategoryList !== false" />
          <!-- 分类列表 -->
          <!-- 友情链接 -->
          <friend-link/>
          <!-- 友情链接 -->
        </div>
        <!-- 信息包装器 -->
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <Content v-show="recoShowModule" class="md-content-wrapper" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import TagList from './TagList'
import FriendLink from './FriendLink'
import NoteAbstract from '../NoteAbstract'
import { ModuleTransition } from '../../core/components'
import PersonalInfo from './PersonalInfo'
import CategoryList from './CategoryList'
import Hero from '../Hero'

export default {
  name: 'HomeBlog',
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, CategoryList, Hero },
  data () {
    return {
      state: {
        recoShow: false,
        heroHeight: 0
      }
    }
  },
  computed: {
    frontmatter () {
      return this.$frontmatter
    },
    recoShowModule () {
      return this && this.$parent.recoShowModule
    }
  },
  updated () {
    this.state.heroHeight = this.$refs.hero.$el.clientHeight
    this.state.recoShow = true
  },
  methods: {
    // 换页后，滚动到文章列表开头
    paginationChange () {
      setTimeout(() => {
        window.scrollTo(0, this.state.heroHeight)
      }, 100)
    },
    getPagesByTags (tagInfo) {
      this.$router.push({ path: tagInfo.path })
    }
  }
}
</script>

<style scoped lang="stylus">
.home-blog-wrapper
  margin $navbarHeight 0 0
  .article
    display flex
    align-items flex-start
    margin 0 auto
    padding 0 20px
    max-width $homePageWidth
    .list
      flex auto
      width 0
      .abstract-wrapper
        .abstract-item:last-child
          margin-bottom: 0
    .info-wrapper
      position -webkit-sticky
      position sticky
      top 70px
      overflow hidden
      transition all .3s
      margin-left 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover
        box-shadow var(--box-shadow-hover)
      h4
        color var(--text-color)

@media (max-width: $MQNarrow)
  .home-blog-wrapper
    .article
      display block!important
      .list
        width auto
      .info-wrapper
        margin-left 0
    .md-content-wrapper
      padding 0

@media (max-width: $MQMobile)
  .home-blog-wrapper
    .article
      display block!important
      .list
        width auto
      .info-wrapper
        margin-left 0
        .personal-info-wrapper
          display none
    .md-content-wrapper
      padding 0
</style>
