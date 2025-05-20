import type { CreateMessageProps, MessageContext } from './types'
import { render, h, shallowReactive } from 'vue'
import MessageVNode from './Message.vue'
import useZIndex from '../../hooks/useZIndex'

// 只需要在对数组进行增删改时触发响应式，我们使用 shallowReactive 来优化
const messageInstances: MessageContext[] = shallowReactive([])
const { nextZIndex } = useZIndex()

let flag = 1
const Message = (props: CreateMessageProps) => {
  const id = `message_${flag++}`
  const container = document.createElement('div')

  // 删除组件实例
  const destroy = () => {
    const idx = messageInstances.findIndex((instance) => instance.id === id)
    if (idx < 0) return
    else messageInstances.splice(idx, 1)
    render(null, container)
  }

  // 手动删除
  const manualDestroy = () => {
    const instance = messageInstances.find((instance) => instance.id === id)
    if (!instance) return
    instance.vm.exposed!.visible.value = false
  }

  // 更新 props
  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  }

  const vnode = h(MessageVNode, newProps)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: manualDestroy,
  }
  messageInstances.push(instance)
  return instance
}

export const getLastInstance = () => {
  return messageInstances.at(-1)
}

export const getLastBottomOffset = (id: string): number => {
  const idx = messageInstances.findIndex((instance) => instance.id === id)
  if (idx <= 0) return 0
  const prevInstance = messageInstances[idx - 1]
  return prevInstance.vm.exposed!.bottomOffset.value
}

export const closeAll = () => {
  messageInstances.forEach((instance) => instance.destroy())
}

export default Message
