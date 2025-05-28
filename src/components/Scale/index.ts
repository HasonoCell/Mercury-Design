import type { App } from 'vue'
import Scale from './Scale.vue'

Scale.install = (app: App) => {
  app.component(Scale.name!, Scale)
}

export default Scale
export * from './types'
