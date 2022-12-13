<template>
  <div class="footer-wrapper">
    <span v-if="$themeConfig.recordConfig.record">
      <reco-icon icon="icon-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.recordConfig.record }}</a>
    </span>
    <span>
      <reco-icon icon="icon-copyright" />
      <a>
        <span v-if="$themeConfig.authorConfig.author">{{ $themeConfig.authorConfig.author }}</span>
        <span v-if="$themeConfig.recordConfig.startYear && $themeConfig.recordConfig.startYear !== (new Date().getFullYear())">{{ $themeConfig.recordConfig.startYear }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <span v-show="showAccessNumber">
      <reco-icon icon="icon-eye" />
      <AccessNumber idVal="/" />
    </span>
    <span class="cyber-security" v-if="$themeConfig.recordConfig.cyberSecurityRecord && $themeConfig.recordConfig.cyberSecurityLink" >
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.recordConfig.cyberSecurityLink || '#'">{{ $themeConfig.recordConfig.cyberSecurityRecord }}</a>
    </span>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'

export default {
  name: 'FooterIndex',
  components: { RecoIcon },
  computed: {
    showAccessNumber () {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = this
      const vc = valineLocalConfig || valineConfig
      return vc && vc.visitor !== false
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer-wrapper
  padding 0.8rem 2.5rem
  border-top 1px solid var(--border-color)
  text-align center
  color lighten($textColor, 25%)
  a
    font-size 14px
  > span
    margin-left 1rem
    > i
      margin-right .5rem
  .cyber-security img
    margin-right .5rem
    width 15px
    height 15px
    vertical-align middle
    margin-top -3px

@media (max-width: $MQMobile)
  .footer
    text-align: left!important;
    > span
      display block
      margin-left 0
      line-height 2rem
</style>
