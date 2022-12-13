<template>
  <div class="sub-side-bar" v-show='headers.length > 0'>
    <div
      class='sub-sidebar-content'
      :style="{ height: isShow ? '' : '100%'}"
    >
      <span
        :style="{display: isShow ? '' : 'flex'}"
        @click='fold'>{{ isShow ? '隐藏' : '显示' }}
      </span>
      <ul
        v-show='isShow'
        class='sub-sidebar-wrapper'
      >
        <li
          v-for="(header, index) in headers"
          :class="{ active: isLinkActive(header),[`level-${header.level}`]: true }"
          :key= "header.title + index"
        >
          <router-link
            :class= "{ 'sidebar-link': true, [`reco-side-${header.slug}`]: true }"
            :to= "$page.path + '#' + header.slug"
          ><p>{{header.title}}</p></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { isActive } from '../../helpers/utils'

export default {
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    headers () {
      return this.$showSubSideBar ? this.$page.headers : []
    }
  },
  methods: {
    fold () {
      this.isShow = !this.isShow
      this.$emit('foldSubSidebar', this.isShow)
      localStorage.setItem('showSubSidebar', this.isShow.toString())
    },
    isLinkActive (header) {
      const active = isActive(this.$route, this.$page.path + '#' + header.slug)
      if (active) {
        setTimeout(() => {
          document.querySelector(`.reco-side-${header.slug}`).scrollIntoView()
        }, 300)
      }
      return active
    }
  },
  beforeMount () {
    const show = localStorage.getItem('showSubSidebar')
    if (show === 'false') {
      this.isShow = false
    } else if (show === 'true') {
      this.isShow = true
    }
    this.$emit('foldSubSidebar', this.isShow)
  }
}
</script>

<style lang="stylus" scoped>
// 右侧sub-side-bar
.sub-side-bar
  position fixed
  top 3.6rem
  bottom 0
  right 0.2rem
  overflow-y scroll
  scroll-behavior smooth
  /************** 滚动条 **************/
  &::-webkit-scrollbar
    width 2px
    height 5px

.sub-sidebar-content
  display flex
  align-items center
  span
    float left
    width 20px
    display none
  span:hover
    color $accentColor
    //鼠标悬浮变"手"
    cursor:pointer

.sub-sidebar-content:hover
  span
    display block

.sub-sidebar-wrapper
  width 11rem
  padding-left 0
  list-style none
  font-size 12px
  float right
  li
    padding .1rem 0
    cursor pointer
    border-left 1px solid var(--border-color)
    a
      padding 0
      color var(--text-color)
      p
        overflow-x hidden
        white-space nowrap
        text-overflow ellipsis
        margin 0
    &:hover
      a
        color $accentColor
    &.active
      border-left 1px solid $accentColor
      a
        color $accentColor
    &.level-1
      padding-left .4rem
    &.level-2
      padding-left .9rem
      a
        font-weight bold
    &.level-3
      padding-left 1.5rem
      a
        padding 0

@media (max-width: $MQMobile)
  .sub-side-bar
    display none
</style>

