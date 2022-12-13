<template>
  <div class="search-box">
    <reco-icon icon="icon-search" />
    <input
      @input="state.query = $event.target.value"
      aria-label="Search"
      :value="state.query"
      :class="{ 'focused': state.focused }"
      :placeholder="state.placeholder"
      autocomplete="off"
      spellcheck="false"
      @focus="state.focused = true"
      @blur="state.focused = false"
      @keyup.enter="go(state.focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
      ref="input"
    >
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :key="i"
        :class="{ focused: i === state.focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'

export default {
  name: 'SearchBox',
  components: { RecoIcon },
  data () {
    return {
      state: {
        query: '',
        focused: false,
        focusIndex: 0,
        placeholder: undefined
      }
    }
  },
  computed: {
    suggestions () {
      const query = this.state.query.trim().toLowerCase()
      if (!query) {
        return
      }
      const { pages } = this.$site
      const max = this.$site.themeConfig.searchConfig.searchMaxSuggestions || 10
      const localePath = this.$localePath
      const matches = item => (
        item && item.title && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },
    showSuggestions () {
      return this.state.focused && this.suggestions && this.suggestions.length
    },
    alignRight () {
      const navCount = (this.$site.themeConfig.navConfig || {}).length - 1
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },
  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },
    onUp () {
      if (this.showSuggestions) {
        if (this.state.focusIndex > 0) {
          this.state.focusIndex--
        } else {
          this.state.focusIndex = this.suggestions.length - 1
        }
      }
    },
    onDown () {
      if (this.showSuggestions) {
        if (this.state.focusIndex < this.suggestions.length - 1) {
          this.state.focusIndex++
        } else {
          this.state.focusIndex = 0
        }
      }
    },
    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.state.query = ''
      this.state.focusIndex = 0
    },
    focus (i) {
      this.state.focusIndex = i
    },
    unfocus () {
      this.state.focusIndex = -1
    }
  },
  mounted () {
    this.placeholder = this.$site.themeConfig.searchConfig.searchPlaceholder || ''
  }
}
</script>

<style lang="stylus">
.search-box
  display inline-block
  position relative
  margin-right 1rem
  .iconfont
    position absolute
    top 0
    bottom 0
    z-index 0
    left .6rem
    margin auto
  input
    cursor text
    width 10rem
    height: 2rem
    color lighten($textColor, 25%)
    display inline-block
    border 1px solid var(--border-color)
    border-radius $borderRadius
    font-size 0.9rem
    line-height 2rem
    padding 0 0.5rem 0 2rem
    outline none
    transition all .2s ease
    background transparent
    background-size 1rem
    &:focus
      cursor auto
      border-color $accentColor
  .suggestions
    background var(--background-color)
    width 20rem
    position absolute
    top 1.5rem
    border 1px solid darken($borderColor, 10%)
    border-radius 6px
    padding 0.4rem
    list-style-type none
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    a
      white-space normal
      color var(--text-color)
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color var(--border-color)
      a
        color $accentColor
@media (max-width: $MQNarrow)
  .search-box
    input
      cursor pointer
      width 0
      border-color transparent
      position relative
      &:focus
        cursor text
        left 0
        width 10rem
// Match IE11
@media all and (-ms-high-contrast: none)
  .search-box input
    height 2rem
@media (max-width: $MQNarrow) and (min-width: $MQMobile)
  .search-box
    margin-right 0
    .suggestions
      left 0
@media (max-width: $MQMobile)
  .search-box
    margin-right 0
    .suggestions
      right 0
@media (max-width: $MQMobileNarrow)
  .search-box
    .suggestions
      width calc(100vw - 4rem)
    input:focus
      width 8rem
</style>
