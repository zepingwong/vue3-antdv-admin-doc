import postMixin from './mixins/posts'
import localMixin from './mixins/locales'
import themeMixin from './mixins/theme'
import { interceptRouterError, fixRouterError404 } from './helpers/other'

import Vue from 'vue'

export default ({
  router
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.mixin(themeMixin)
  interceptRouterError(router)
  fixRouterError404(router)
}
