<template>
  <div class="tags">
    <hr>
    <h4 v-if="$tags.list.length !== 0"><reco-icon icon="icon-tag" /> {{$customLocales.tag}}</h4>
    <span
      v-for="(item, index) in tags"
      v-show="!item.pages || (item.pages && item.pages.length > 0)"
      :key="index"
      :class="{'active': item.name === currentTag}"
      :style="{ 'backgroundColor': getColor() }"
      @click="tagClick(item)">{{item.name}}
    </span>
  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'
import { getOneColor } from '../../helpers/other'

export default {
  name: 'TagList',
  components: { RecoIcon },
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  computed: {
    tags () {
      return [{ name: this.$customLocales.all, path: '/tag/' }, ...this.$tagesList]
    }
  },
  methods: {
    tagClick (tag) {
      this.$emit('getCurrentTag', tag)
    },
    getColor () {
      return getOneColor()
    }
  }
}
</script>

<style lang="stylus" scoped>
.tags
  margin 30px 0
  span
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: $borderRadius
    background: #fff;
    color: #fff;
    line-height 13px
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    &:hover
      transform scale(1.04)
    &.active
      transform scale(1.2)

@media (max-width: $MQNarrow)
  .tags
    hr
      display none

@media (max-width: $MQMobile)
  .tags
    hr
      display none
</style>
