import { App } from 'vue'
import FixedVList from './FixedVList.vue'

FixedVList.install = (app: App) => {
  app.component(FixedVList.name!, FixedVList)
}

export default FixedVList
export * from './types'
