<template>
  <div class="pagination" v-show="show">
    <div class="pagination-list">
      <span
        class="jump"
        v-show="currentPage > 1"
        @click="goPrev"
        unselectable="on">{{paginationLocales.prev}}</span>
      <span
        v-show="efont&&currentPage>2"
        class="jump"
        @click="jumpPage(1)">1</span>
      <span
        class="ellipsis"
        v-show="efont&&currentPage>3">...</span>
      <span
        class="jump"
        v-for="num in indexs"
        :key="num"
        :class="{bgprimary:currentPage===num}"
        @click="jumpPage(num)">{{num}}</span>
      <span
        class="ellipsis"
        v-show="efont&&currentPage<pages-2">...</span>
      <span
        v-show="efont&&currentPage<pages-1"
        class="jump"
        @click="jumpPage(pages)">{{pages}}</span>
      <span
        class="jump"
        v-show="currentPage < pages"
        @click="goNext">{{paginationLocales.next}}</span>
      <span class="jumppoint">{{paginationLocales.jump}}</span>
      <span class="jumpinp">
        <input type="text" v-model="changePage">
      </span>
      <span
        class="jump go-btn"
        @click="jumpPage(changePage)">{{paginationLocales.go}}</span>
    </div>
  </div>
</template>

<script>
import paginationLocales from './locales'

export default {
  data () {
    return {
      changePage: '', // 跳转页
      /* eslint-disable no-undef */
      pageSize: PERPAGE
    }
  },
  props: {
    total: {
      type: Number,
      default: 10
    },
    perPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages () {
      const pageSize = this.pageSize || this.perPage
      return Math.ceil(this.total / pageSize)
    },
    show: function () {
      return this.pages && this.pages !== 1
    },
    efont: function () {
      return this.pages > 7
    },
    indexs: function () {
      let left = 1
      let right = this.pages
      const ar = []
      if (this.pages >= 5) {
        if (this.currentPage > 2 && this.currentPage < this.pages - 1) {
          left = Number(this.currentPage) - 1
          right = Number(this.currentPage) + 1
        } else {
          if (this.currentPage <= 3) {
            left = 1
            right = 3
          } else {
            right = this.pages
            left = this.pages - 2
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    },
    paginationLocales () {
      return paginationLocales(this)
    }
  },
  methods: {
    goPrev () {
      let currentPage = this.currentPage
      if (this.currentPage > 1) {
        this.emit(--currentPage)
      }
    },
    goNext () {
      let currentPage = this.currentPage
      if (currentPage < this.pages) {
        this.emit(++currentPage)
      }
    },
    jumpPage: function (id) {
      this.changePage = ''
      const numId = parseInt(id)
      if (numId <= this.pages && numId > 0) {
        this.emit(numId)
        return
      }
      this.$message({
        time: 3000,
        title: '错误',
        content: `请输入大于0，并且小于${this.pages}的页码！`,
        type: 'error'
      })
    },
    emit (id) {
      this.$emit('getCurrentPage', id)
    }
  }
}
</script>

<style lang="stylus" scoped>

.pagination
  font-weight: 700;
  text-align: center;
  color: var(--text-color)
  margin: 20px auto 0;
  background: #f2f2f2;
  background: var(--background-color);
  .pagination-list
    font-size: 0;
    line-height: 50px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    span
      font-size: 14px;
      &.jump, &.jumpinp input
        box-shadow: var(--box-shadow)
        border 1px solid var(--border-color)!important
      &.jump
        padding: 5px 8px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 5px;
      &.jumpinp
        input
          width: 55px;
          height: 26px;
          background-color: var(--background-color)
          font-size: 13px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          text-align: center;
          outline none
      &.bgprimary
        cursor: default;
        color: #fff;
        background: $accentColor;
        border-color: $accentColor;
      &.ellipsis
        padding: 0 8px;
      &.jumppoint
        margin: 0 10px 0 30px;
</style>
