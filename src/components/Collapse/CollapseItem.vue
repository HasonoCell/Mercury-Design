<script setup lang="ts">
import { computed, inject } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'Mercury-Collapse-Item',
})

const props = withDefaults(defineProps<CollapseItemProps>(), {
  disabled: false,
})

const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeName.value.includes(props.name))

const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<template>
  <div
    class="mr-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="mr-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="arrow-right" class="header-arrow" />
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="mr-collapse-item__wrapper" v-show="isActive">
        <div class="mr-collapse-item__content" :id="`item-header-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
