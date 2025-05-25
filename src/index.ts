import Button from './components/Button/Button.vue'
import Alert from './components/Alert/Alert.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Icon from './components/Icon/Icon.vue'
import Input from './components/Input/Input.vue'
import Message from './components/Message/Message.vue'
import { createMessage, closeAll } from './components/Message/method'
import Switch from './components/Switch/Switch.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Select from './components/Select/Select.vue'
import FixedVList from './components/Virtual-List/FixedVList.vue'
import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles/index.scss'
library.add(fas)

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
  Select,
  FixedVList,
]

const install = (app: App) => {
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
  Select,
  FixedVList,
  createMessage,
  closeAll,
}

export default {
  install,
}
