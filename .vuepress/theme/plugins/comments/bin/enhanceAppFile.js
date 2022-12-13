import Comments from './Comments.vue'
import AccessNumber from './AccessNumber.vue'

export default ({ Vue }) => {
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component('Comments', Comments)
  Vue.component('AccessNumber', AccessNumber)
}
