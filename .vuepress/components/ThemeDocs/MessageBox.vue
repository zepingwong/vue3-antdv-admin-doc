<template>
  <div class="demo-wrapper">
    <div
      class="v-notification__group"
      :style="{
        'border-left-width': '10px',
        'border-left-color': item.color
      }"
      v-for="item in types"
      :key="item.name"
    >
      <h2 class="v-notification__title">{{item.name}}</h2>
      <div class="v-notification__content">
        <p>{{item.name + '消息内容'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data () {
    return {
      types: [{
        name: 'normal',
        color: 'transparent'
      }, {
        name: 'success',
        color: '#3eaf7c'
      }, {
        name: 'warning',
        color: '#F8B20A'
      }, {
        name: 'error',
        color: '#E15B64'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .demo-wrapper
    display flex
    flex-wrap wrap
    justify-content space-between
    .v-notification__group
      margin 0 auto 1.5rem
      width: 45%
      padding: 14px 26px 14px
      border-radius: 8px
      box-sizing: border-box
      border: 1px solid #ebeef5
      background-color: #fff
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      margin-bottom: 1rem

      .v-notification__title
        font-weight: 700
        font-size: 16px
        color: #303133
        margin: 0
        border: none

      h2
        padding-left 0
        &::before
          border-left none

      .v-notification__content
        font-size: 14px
        line-height: 21px
        margin: 6px 0 0
        color: #606266
        text-align: justify

      .v-notification__content p
        margin: 0

  @media (max-width: $MQMobile)
    .demo-wrapper
      .v-notification__group
        width 90%
  @media (max-width: $MQNarrow)
    .demo-wrapper
      .v-notification__group
        width 90%
</style>
