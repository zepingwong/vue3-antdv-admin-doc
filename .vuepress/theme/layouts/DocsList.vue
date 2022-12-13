<template>
  <Common class="docslist-wrapper" :sidebar="false">
    <ModuleTransition>
      <section v-show="recoShowModule">
        <div class="page-title">
          <h1 class="title">{{$customLocales.docsList}}</h1>
        </div>
      </section>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <div class="content">
        <div class="list-wrapper">
          <div class="list-item" v-for="(doc, index) in currentPageData" :key="index" @click="$router.push(doc.link)">
            <div v-if="doc.title" class="card-wrapper">
              <div style="width: 100%; position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                <div class="title">
                  <router-link :to="doc.link">{{doc.title}}</router-link>
                </div>
                <div class="desc">{{ doc.description }}</div>
              </div>
            </div>
            <div v-else class="card-wrapper">
              <img :src="$withBase(doc.heroImage)" alt="封面图片">
            </div>
          </div>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.16">
      <!-- 分页 -->
      <pagination
        class="pagination"
        :total="docsList.length"
        :currentPage="currentPage"
        :perPage="6"
        @getCurrentPage="getCurrentPage"
      ></pagination>
    </ModuleTransition>
  </Common>
</template>

<script>
import Common from '../components/Common'
import moduleTransitonMixin from '../mixins/moduleTransiton'
import { ModuleTransition } from '../core/components'
export default {
  name: 'DocsList',
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition },
  data () {
    return {
      currentPage: 1,
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  computed: {
    docsList () {
      return this.$docsLists
    },
    currentPageData () {
      const start = (this.currentPage - 1) * 9
      const end = this.currentPage * 9
      return this.docsList.slice(start, end)
    }
  },
  methods: {
    getCurrentPage (current) {
      this.currentPage = current
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
  }
}
</script>

<style src='../styles/theme.styl' lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>
.docslist-wrapper
  position relative
  padding-top 5rem

  .page-title
    max-width $contentWidth
    margin: 0 auto
    padding: 1rem 2.5rem
    color var(--text-color)
  .content
    max-width $contentWidth
    margin 0 auto
    padding 2rem
    .list-wrapper
      display flex
      flex-wrap wrap
      justify-content space-between
      .list-item
        margin 0 auto 1.5rem
        width 45%
        transition all .5s
        .card-wrapper
          cursor pointer
          position relative
          height 140px
          box-shadow var(--box-shadow)
          border-radius 6px
          background-position center
          background-size cover
          width 100%
          text-align center
          overflow hidden
          box-sizing border-box
          padding 1rem 1rem
          img
            width 90%
            height auto
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            box-shadow none
          .title
            position relative
            font-size 1.28rem
            line-height 46px
            display inline-block
            a
              color var(--text-color)
              text-decoration-line none
            &:after
              content ""
              position absolute
              width 100%
              height 2px
              bottom 0
              left 0
              background-color $accentColor
              visibility hidden
              -webkit-transform scaleX(0)
              transform scaleX(0)
              transition .3s ease-in-out
          .desc
            margin .6rem 0 .6rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 12px
        &:hover
          box-shadow var(--box-shadow-hover)
          .title
            position relative
            font-size 1.28rem
            line-height 46px
            display inline-block
            a
              color $accentColor
              text-decoration-line none
            &:after
              visibility visible
              -webkit-transform scaleX(1)
              transform scaleX(1)
@media (max-width: $MQMobile)
  .docslist-wrapper
    .page-title
      padding 0 1rem
    .content
      padding 1rem 2rem
      .list-wrapper
        .list-item
          width 100%
</style>

