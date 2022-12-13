<template>
  <div class="hero" :style="$bgImageStyle">
    <div>
      <ModuleTransition>
        <img
          v-if="frontmatter.heroImage"
          class="hero-img"
          :style="frontmatter.heroImageStyle || {}"
          :src="$withBase(frontmatter.heroImage)"
          alt="hero">
      </ModuleTransition>
      <ModuleTransition delay="0.04">
        <h1
          v-if="frontmatter.heroText !== null && frontmatter.heroText !== false"
        >
          {{ frontmatter.heroText || $title }}
        </h1>
      </ModuleTransition>
      <ModuleTransition delay="0.08">
        <p
          v-if="frontmatter.tagline !== null && frontmatter.tagline !== false"
          class="description"
        >
          {{ frontmatter.tagline || $description }}
        </p>
      </ModuleTransition>
      <ModuleTransition delay="0.12">
        <p
          v-if="frontmatter.actionText && frontmatter.actionLink"
          class="action"
        >
          <NavLink class="action-button" :item="actionLink"/>
        </p>
      </ModuleTransition>
    </div>
  </div>
</template>

<script>
import NavLink from '../Navbar/NavLink'
import { ModuleTransition } from '../../core'

export default {
  name: 'HeroIndex',
  components: { NavLink, ModuleTransition },
  computed: {
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

<style lang="stylus" scoped>
.hero
  position relative
  height calc(100vh - 3.4rem)
  > div
    position absolute
    width 80%
    top 50%
    left 50%
    transform translate(-50%, -50%)
    .hero-img
      max-width 40rem!important
      width 30rem
      margin: 0
      box-shadow none
    h1
      font-size 2.5rem
      margin 0
    .description
      font-size 1.6rem
      margin-top 0
    .action-button
      display inline-block
      color #fff
      background-color $accentColor
      padding 0.2rem 1.2rem
      border-radius $borderRadius
      transition background-color 0.1s ease
      box-sizing border-box
      load-start()
      &:hover
        background-color lighten($accentColor, 10%)

@media (max-width: $MQMobile)
  .hero
    > div
      width 90%
      .hero-img
        max-width 20rem!important
        width 16rem
        margin: 0
      h1
        font-size 2rem
        margin 0
      .description
        font-size 1.4rem
        margin-top 0

@media (max-width: $MQNarrow)
  .hero
    > div
      width 90%

</style>
