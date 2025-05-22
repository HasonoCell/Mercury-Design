import type { Options, Placement } from '@popperjs/core'

export interface TooltipProps {
  trigger?: 'hover' | 'click'
  content?: string
  manual?: boolean
  placement?: Placement
  popperOptions?: Partial<Options>
  openDelay?: number
  closeDelay?: number
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface TooltipInstance {
  open: () => void
  close: () => void
}
