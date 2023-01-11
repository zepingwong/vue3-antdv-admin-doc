import VTable from './src/index.vue'
import type { App, Plugin } from 'vue'

export const VTablePlugin: Plugin = {
  install(app: App) {
    app.component('VTable', VTable)
  }
}

export { VTable }
