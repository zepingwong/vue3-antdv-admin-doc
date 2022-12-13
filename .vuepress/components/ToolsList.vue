<template>
  <div class="content">
    <div class="list-wrapper">
      <div class="list-item" v-for="(blog, index) in currentPageData" :key="index">
        <div class="card-wrapper">
          <div class="front">
            <div class="info">
              <h4 class="title">{{ blog.name }}</h4>
              <p class="desc">{{ blog.desc }}</p>
            </div>
          </div>
          <div class="back">
            <a target="blank" :href="blog.link"><img class="thumbnail" :src="blog.thumbnail" :alt="blog.name"></a>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <pagination
      class="pagination"
      :total="toolsList.length"
      :currentPage="currentPage"
      :perPage="9"
      @getCurrentPage="getCurrentPage"
    ></pagination>
  </div>
</template>

<script>

export default {
  name: 'ToolsList',
  props: {
    toolsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    currentPageData () {
      const start = (this.currentPage - 1) * 9
      const end = this.currentPage * 9
      return this.toolsList.slice(start, end)
    }
  },
  methods: {
    getCurrentPage (currentPage) {
      this.currentPage = currentPage
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  padding 0
  .list-wrapper
    display flex
    flex-wrap wrap
    .list-item
      margin 0 auto 1.5rem
      width 30%
      height 140px
      transition: all .5s;
      .card-wrapper
        position relative
        height 100%
        .back
          text-align center
        .front, .back
          border-radius: 6px;
          background-position: center;
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          transition: ease-in-out 600ms;
          overflow hidden
          box-shadow: var(--box-shadow)
          .thumbnail
            height auto
            width 100%
            position absolute
            left 0
            top 50%
            transform translateY(-50%)
          &.back
            transform: rotateY(-180deg);
          .info
            box-sizing border-box
            padding 1rem 1rem
            .title
              margin 0
              max-width 65%
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .desc
              margin .6rem 0 1.5rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 12px
        &:hover
          .front
            transform: rotateY(180deg);
          .back
            transform: rotateY(0deg);

@media (max-width: $MQMobile)
  .content
    .list-wrapper
      .list-item
        width 100%
</style>

