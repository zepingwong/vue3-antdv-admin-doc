<template>
  <div class="home-page-one-wrapper">
    <hero v-if="recoShowModule"></hero>
    <div class="wish">
      <ModuleTransition delay="0.16">
        <div class="yesterday">
          <div class="wish-inner">
            <div class="img-wrapper">
              <img src="./images/yesterday.svg" alt="">
            </div>
            <div class="text-wrapper">
              <h1>{{ frontmatter.features[0].title }}</h1>
              <p class="description">{{ frontmatter.features[0].details }}</p>
            </div>
          </div>
        </div>
      </ModuleTransition>
      <ModuleTransition delay="0.20">
        <div class="today">
          <div class="wish-inner">
            <div class="text-wrapper">
              <h1>{{ frontmatter.features[1].title }}</h1>
              <p class="description">{{ frontmatter.features[1].details }}</p>
            </div>
            <div class="img-wrapper">
              <img src="./images/today.svg" alt="">
            </div>
          </div>
        </div>
      </ModuleTransition>
      <ModuleTransition delay="0.24">
        <div class="tomorrow">
          <div class="wish-inner">
            <div class="img-wrapper">
              <img src="./images/tomorrow.svg" alt="">
            </div>
            <div class="text-wrapper">
              <h1>{{ frontmatter.features[2].title }}</h1>
              <p class="description">{{ frontmatter.features[2].details }}</p>
            </div>
          </div>
        </div>
      </ModuleTransition>
    </div>

    <ModuleTransition delay="0.28">
      <Content class="md-content-wrapper" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { ModuleTransition } from '../../core/components'
import Hero from '../Hero'

export default {
  name: 'HomePageOne',
  components: { ModuleTransition, Hero },
  data () {
    return {
      downloads: 0
    }
  },
  computed: {
    recoShowModule () {
      return this && this.$parent.recoShowModule
    },
    actionLink () {
      return this && {
        link: this.$frontmatter.actionLink,
        text: this.$frontmatter.actionText
      }
    },
    frontmatter () {
      return this.$frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-page-one-wrapper
  padding $navbarHeight 0 0
  .wish
    overflow hidden
    .yesterday, .tomorrow
      background var(--code-color)
    .wish-inner
      box-sizing border-box
      margin 0 auto
      padding 2rem
      max-width 56rem
      width 100%
      min-height 25rem
      display flex
      align-items center
      > div
        flex auto
        &.img-wrapper
          max-width 22rem
          img
            display block
            width 100%
        &.text-wrapper
          box-sizing border-box
          padding 0 2rem

@media (max-width $MQMobile)
  .home-page-one-wrapper
    .wish
      .wish-inner
        display block
        padding 2rem 0
        .img-wrapper
          margin 0 auto
    .md-content-wrapper
      padding 0

@media (max-width $MQMobileNarrow)
  .home-page-one-wrapper
    .wish
      .wish-inner
        display block
        padding 2rem 0
        .img-wrapper
          margin 0 auto
    .md-content-wrapper
       padding 0
</style>
