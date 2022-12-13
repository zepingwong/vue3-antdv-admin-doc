<template>
  <div class="home-docs-wrapper">
    <hero v-if="recoShowModule"></hero>

    <ModuleTransition delay="0.16">
      <div
        v-if="recoShowModule && frontmatter.features && frontmatter.features.length"
        class="features"
      >
        <div v-for="(feature, index) in frontmatter.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.20">
      <Content class="md-content-wrapper" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import Hero from '../Hero'
import { ModuleTransition } from '../../core/components'

export default {
  name: 'HomeDocs',
  components: { Hero, ModuleTransition },
  computed: {
    recoShowModule () {
      return this && this.$parent.recoShowModule
    },
    frontmatter () {
      return this.$frontmatter
    },
    actionLink () {
      return this && {
        link: this.$frontmatter.actionLink,
        text: this.$frontmatter.actionText
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.home-docs-wrapper
  padding $navbarHeight 0 0
  .features
    margin auto
    max-width 960px
    border-top 1px solid var(--border-color)
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    .feature
      flex-grow 1
      flex-basis 30%
      max-width 30%
      transition all .5s
      color var(--text-color)
      h2
        font-size 1.6rem
        font-weight 500
        border-bottom none
        padding-bottom 0
      &:hover
        transform scale(1.05)

@media (max-width $MQNarrow)
  .home-docs-wrapper
    .features
      display block
      padding 0 2.5rem
      .feature
        flex-direction column
        max-width 100%
        padding 0 2.5rem
    .md-content-wrapper
      padding 0

@media (max-width $MQMobile)
  .home-docs-wrapper
    .features
      .feature
        flex-direction column
        max-width 100%
        padding 0 2.5rem

    .md-content-wrapper
      padding 0
</style>
