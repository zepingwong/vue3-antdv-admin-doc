<template>
  <div class="md5-wrapper">
    <input type="text" v-model="password" placeholder="请输入你的密码">
    <button class="btn" @click="generate">生成</button>
    <button class="btn" @click="copyClick">复制</button>
    <p><span v-show="md5Str !== ''">md5 密文：{{ md5Str }}</span></p>
  </div>
</template>

<script>
import clipboard from '../../theme/helpers/clipboard'
import md5 from 'md5'

export default {
  name: 'Md5',
  data () {
    return {
      password: '',
      md5Str: ''
    }
  },
  methods: {
    generate () {
      this.md5Str = md5(this.password)
    },
    copyClick () {
      clipboard(this.md5Str)
        .then(() => {
          this.$message({
            content: '复制成功！',
            title: 'Tips',
            type: 'success'
          })
        })
        .catch((e) => {
          this.$message({
            content: e,
            title: 'Tips',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.md5-wrapper
  margin-top .5rem
  input
    min-width 60%
    float left
    outline none
    border-radius $borderRadius
    border 1px solid var(--border-color)
    box-sizing border-box
    padding .5rem
  .btn
    max-width 20%
    display inline-block
    color #fff
    border none
    background-color $accentColor
    padding .5rem 1rem
    border-radius $borderRadius
    transition background-color 0.1s ease
    box-sizing border-box
    load-start()
    &:hover
      cursor pointer
      background-color lighten($accentColor, 10%)
</style>
