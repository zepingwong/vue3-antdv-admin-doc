<template>
  <div class="bookmark-wrapper">
    <div class="mark">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookMark'
}
</script>

<style lang="stylus" scoped>
.bookmark-wrapper
  .mark
    border-radius 6px
    background-position center
    background-size cover
    position absolute
    height 100%
    width 100%
    backface-visibility: hidden
    transform-style: preserve-3d
    transition: ease-in-out 600ms
    overflow hidden
    box-shadow: var(--box-shadow)
</style>
