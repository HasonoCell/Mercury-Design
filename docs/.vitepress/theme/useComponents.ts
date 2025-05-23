// useComponents.ts
import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from '../../../src/components/Button/Button.vue'
import Alert from '../../../src/components/Alert/Alert.vue'
import Collapse from '../../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../../src/components/Collapse/CollapseItem.vue'
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue'
import Icon from '../../../src/components/Icon/Icon.vue'
import Input from '../../../src/components/Input/Input.vue'
import Message from '../../../src/components/Message/Message.vue'
import { createMessage } from '../../../src/components/Message'
import Switch from '../../../src/components/Switch/Switch.vue'
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'

library.add(fas)

// 注册函数
function useComponents(app: App) {
  const components = [
    Button,
    Alert,
    Collapse,
    CollapseItem,
    Dropdown,
    Icon,
    Input,
    Message,
    Switch,
    Tooltip,
  ]

  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export {
  Button,
  Alert,
  Collapse,
  CollapseItem,
  Dropdown,
  Icon,
  Input,
  Message,
  Switch,
  Tooltip,
  useComponents,
  createMessage,
}
