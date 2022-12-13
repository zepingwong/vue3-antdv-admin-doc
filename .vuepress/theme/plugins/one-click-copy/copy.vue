<template>
  <span>
    <span
      ref="btn"
      class="v-copy-code-btn"
      @click="copyClick"
    >{{copyText}}</span>
  </span>
</template>

<script>
import clipboard from '../../helpers/clipboard'
export default {
  name: 'CopyPlugin',
  props: {
    copyText: String,
    code: String,
    visibleTip: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    copyClick () {
      const call = (e) => {
        if (typeof change === 'function') {
          // eslint-disable-next-line no-undef
          change.call(this, e, this.$el)
        }
      }
      if (this.visibleTip) {
        this.$message({
          time: 3000,
          content: 'Copy Successfully',
          title: 'Tips',
          type: 'success'
        })
      }

      clipboard(this.code)
        .then(e => call)
        .catch(call)
    }
  }
}
</script>

<style>
div[class][class*="language-"]::before {
  right: 70px
}
</style>

<style scoped lang="stylus">
.v-copy-code-btn
  cursor: pointer
  color: hsla(0, 0%, 54.9%, 0.8)
  transition: color 0.1s
  position: absolute
  z-index: 3
  top: 0.8em
  right: 15px
  font-size: 0.75rem

.v-copy-code-btn:hover
  color: #8c8c8c
</style>
