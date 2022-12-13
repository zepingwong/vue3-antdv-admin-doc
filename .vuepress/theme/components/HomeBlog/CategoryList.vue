<template>
  <div>
    <hr>
    <h4><reco-icon icon="icon-category" /> {{$customLocales.category}}</h4>
    <ul class="category-wrapper">
      <li class="category-item" v-for="(item, index) in $categories.list.slice((currentPage-1)*pageSize, currentPage*pageSize)" :key="index">
        <router-link :to="item.path">
          <span class="category-name">{{ item.name }}</span>
          <span class="post-num" :style="{ 'backgroundColor': getColor() }">{{ item.pages.length }}</span>
        </router-link>
      </li>
      <el-pagination
        small
        :current-page.sync="currentPage"
        layout = "prev, next"
        :page-size="pageSize"
        :total="$categories.list.length"
        style="text-align: center"
      ></el-pagination>
    </ul>

  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'
import { getOneColor } from '../../helpers/other'
export default {
  name: 'CategoryList',
  components: { RecoIcon },
  data () {
    return {
      currentPage: 1,
      pageSize: 8
    }
  },
  methods: {
    getColor () {
      return getOneColor()
    }
  }
}
</script>

<style scoped lang="stylus">

.category-wrapper {
  :deep(.btn-prev) {
    background var(--background-color)
    color var(--text-color)
  }
  :deep(.btn-next) {
    background var(--background-color)
    color var(--text-color)
  }
  list-style none
  padding-left 0
  .category-item {
    margin-bottom .4rem
    padding: .4rem .8rem;
    transition: all .5s
    border-radius $borderRadius
    box-shadow var(--box-shadow)
    background-color var(--background-color)
    &:hover {
      transform scale(1.04)
      a {
        color $accentColor
      }
    }
    a {
      display flex
      justify-content: space-between
      align-items: center
      color var(--text-color)
      .post-num {
        width 1.6rem;
        height 1.6rem
        text-align center
        line-height 1.6rem
        border-radius $borderRadius
        background #eee
        font-size 13px
        color #fff
      }
    }
  }
}
</style>
