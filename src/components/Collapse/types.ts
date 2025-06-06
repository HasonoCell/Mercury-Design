import type { Ref, InjectionKey } from 'vue'
export type NameType = number | string

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType[]): void
  (e: 'change', value: NameType[]): void
}

export interface CollapseContext {
  activeName: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
