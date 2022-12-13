<template>
  <div class="sidebar-button" @click="toggleSidebar">
    <svg class="icon" :style="{
      transform: open ? 'rotate(90deg)' : ''
    }" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SidebarButton',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggleSidebar () {
      this.open = !this.open
      this.$emit('toggle-sidebar')
    }
  },
  watch: {
    show (val) {
      this.open = val
    }
  }
}
</script>
<style scoped lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem
  .icon
    display block
    width 1.25rem
    height 1.25rem
    .open
      transform rotate(90deg)

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
