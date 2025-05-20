import type { VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'warning' | 'danger' | 'info'
  onDestroy: () => void
  offset?: number
  id: string
  zIndex: number
  // transitionName?: string
}

export interface MessageContext {
  id: string
  vnode: VNode
  props: MessageProps
  vm: ComponentInternalInstance
  destroy: () => void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>
