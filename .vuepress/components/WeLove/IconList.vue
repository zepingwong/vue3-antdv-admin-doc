<template>
  <div>
    <ul class="icon_lists dib-box">
      <li v-for="item in lists" :key="item.font_class" class="dib">
        <span :class="'icon iconfont welove-'+item.font_class"></span>
        <div class="name">{{item.name}}</div>
        <div class="code-name">{{'&#' + item.unicode + ';'}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IconList',
  data () {
    return {
      lists: [
        {
          'icon_id': '30177939',
          'name': 'done',
          'font_class': 'done',
          'unicode': 'e620',
          'unicode_decimal': 58912
        },
        {
          'icon_id': '30177913',
          'name': 'remove',
          'font_class': 'remove',
          'unicode': 'e61e',
          'unicode_decimal': 58910
        },
        {
          'icon_id': '30177914',
          'name': 'moveup',
          'font_class': 'moveup',
          'unicode': 'e61f',
          'unicode_decimal': 58911
        },
        {
          'icon_id': '30177899',
          'name': 'close',
          'font_class': 'close',
          'unicode': 'e61b',
          'unicode_decimal': 58907
        },
        {
          'icon_id': '30177902',
          'name': 'history',
          'font_class': 'history1',
          'unicode': 'e61c',
          'unicode_decimal': 58908
        },
        {
          'icon_id': '30177903',
          'name': 'menu',
          'font_class': 'menu1',
          'unicode': 'e61d',
          'unicode_decimal': 58909
        },
        {
          'icon_id': '30177894',
          'name': 'feedback',
          'font_class': 'feedback',
          'unicode': 'e61a',
          'unicode_decimal': 58906
        },
        {
          'icon_id': '30177888',
          'name': 'update',
          'font_class': 'update',
          'unicode': 'e618',
          'unicode_decimal': 58904
        },
        {
          'icon_id': '30177889',
          'name': 'reply',
          'font_class': 'reply',
          'unicode': 'e619',
          'unicode_decimal': 58905
        },
        {
          'icon_id': '30177882',
          'name': 'delete',
          'font_class': 'delete',
          'unicode': 'e616',
          'unicode_decimal': 58902
        },
        {
          'icon_id': '30177883',
          'name': 'archive',
          'font_class': 'archive',
          'unicode': 'e617',
          'unicode_decimal': 58903
        },
        {
          'icon_id': '30177878',
          'name': 'nickname',
          'font_class': 'nickname',
          'unicode': 'e600',
          'unicode_decimal': 58880
        },
        {
          'icon_id': '30177879',
          'name': 'message',
          'font_class': 'message',
          'unicode': 'e614',
          'unicode_decimal': 58900
        },
        {
          'icon_id': '30177880',
          'name': 'email',
          'font_class': 'email',
          'unicode': 'e615',
          'unicode_decimal': 58901
        },
        {
          'icon_id': '30177871',
          'name': 'test',
          'font_class': 'test',
          'unicode': 'e613',
          'unicode_decimal': 58899
        },
        {
          'icon_id': '30177868',
          'name': 'about',
          'font_class': 'about',
          'unicode': 'e612',
          'unicode_decimal': 58898
        },
        {
          'icon_id': '30177867',
          'name': 'account',
          'font_class': 'account',
          'unicode': 'e611',
          'unicode_decimal': 58897
        },
        {
          'icon_id': '30177849',
          'name': 'home',
          'font_class': 'home',
          'unicode': 'e610',
          'unicode_decimal': 58896
        },
        {
          'icon_id': '30177845',
          'name': 'arrow-down',
          'font_class': 'arrow-down',
          'unicode': 'e60c',
          'unicode_decimal': 58892
        },
        {
          'icon_id': '30177846',
          'name': 'arrow-right',
          'font_class': 'arrow-right',
          'unicode': 'e60d',
          'unicode_decimal': 58893
        },
        {
          'icon_id': '30177847',
          'name': 'arrow-up',
          'font_class': 'arrow-up',
          'unicode': 'e60e',
          'unicode_decimal': 58894
        },
        {
          'icon_id': '30177848',
          'name': 'arrow-left',
          'font_class': 'arrow-left',
          'unicode': 'e60f',
          'unicode_decimal': 58895
        },
        {
          'icon_id': '30177805',
          'name': 'birthday',
          'font_class': 'birthday',
          'unicode': 'e60b',
          'unicode_decimal': 58891
        },
        {
          'icon_id': '30177761',
          'name': 'schedule',
          'font_class': 'schedule',
          'unicode': 'e60a',
          'unicode_decimal': 58890
        },
        {
          'icon_id': '30177752',
          'name': 'alarm',
          'font_class': 'alarm',
          'unicode': 'e609',
          'unicode_decimal': 58889
        },
        {
          'icon_id': '30177745',
          'name': 'reminder',
          'font_class': 'reminder',
          'unicode': 'e608',
          'unicode_decimal': 58888
        },
        {
          'icon_id': '30177741',
          'name': 'share',
          'font_class': 'share',
          'unicode': 'e607',
          'unicode_decimal': 58887
        },
        {
          'icon_id': '30177738',
          'name': 'repeat',
          'font_class': 'repeat',
          'unicode': 'e606',
          'unicode_decimal': 58886
        },
        {
          'icon_id': '30177730',
          'name': 'note',
          'font_class': 'note',
          'unicode': 'e605',
          'unicode_decimal': 58885
        },
        {
          'icon_id': '30177720',
          'name': 'top',
          'font_class': 'top',
          'unicode': 'e604',
          'unicode_decimal': 58884
        },
        {
          'icon_id': '30177716',
          'name': 'date',
          'font_class': 'date',
          'unicode': 'e603',
          'unicode_decimal': 58883
        },
        {
          'icon_id': '30177715',
          'name': 'description',
          'font_class': 'description',
          'unicode': 'e602',
          'unicode_decimal': 58882
        },
        {
          'icon_id': '30177714',
          'name': 'category',
          'font_class': 'category',
          'unicode': 'e601',
          'unicode_decimal': 58881
        },
        {
          'icon_id': '8631998',
          'name': 'icon_close',
          'font_class': 'icon_close',
          'unicode': 'e6fc',
          'unicode_decimal': 59132
        },
        {
          'icon_id': '9745410',
          'name': 'history',
          'font_class': 'history',
          'unicode': 'e64d',
          'unicode_decimal': 58957
        },
        {
          'icon_id': '15838501',
          'name': 'menu',
          'font_class': 'menu',
          'unicode': 'e677',
          'unicode_decimal': 58999
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icon_lists
  width: 100% !important;
  overflow: hidden
  padding 0
  li
    width 100px
    margin-bottom 10px
    text-align center
    list-style none !important
    cursor default
  .dib
    display inline-block
    vertical-align top
    font-size 12px
    letter-spacing normal
    line-height inherit
    .code-name, .name
      line-height 1.2
      color #666

  .icon
    display: block
    height: 100px
    line-height: 100px
    font-size: 42px
    margin: 10px auto
    color: #333
    -webkit-transition: font-size 0.25s linear, width 0.25s linear
    -moz-transition: font-size 0.25s linear, width 0.25s linear
    transition: font-size 0.25s linear, width 0.25s linear
    &:hover
      font-size 80px

</style>
