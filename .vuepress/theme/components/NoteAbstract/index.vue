<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item) in currentPageData"
      :key="item.path"
      :item="item"
      :currentPage="currentPage"
      :currentTag="currentTag"
    />
    <pagination
      className="pagination"
      :total="data.length"
      :currentPage="currentPage"
      @getCurrentPage="getCurrentPage"
    />
  </div>
</template>

<script>
import pagination from '../../mixins/pagination'
import NoteAbstractItem from './NoteAbstractItem'

export default {
  name: 'NoteAbstract',
  mixins: [pagination],
  components: { NoteAbstractItem },
  props: ['data', 'currentTag'],
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    currentPageData () {
      const start = (this.currentPage - 1) * this.$perPage
      const end = this.currentPage * this.$perPage
      return this.data.slice(start, end)
    }
  },
  methods: {
    getCurrentPage (page) {
      this.currentPage = page
      this._setStoragePage(page)
      this.$emit('paginationChange', page)
    }
  },
  mounted () {
    this.currentPage = this._getStoragePage() || 1
  },
  watch: {
    $route () {
      this.currentPage = this._getStoragePage() || 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
