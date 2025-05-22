<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from 'vue'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import { createPopper, type Instance } from '@popperjs/core'
import { debounce } from 'lodash-es'
import useClickOutside from '../../hooks/useClickOutside'

defineOptions({
  name: 'Mercury Tooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  openDelay: 0,
  closeDelay: 0,
})
const emits = defineEmits<TooltipEmits>()

let popperInstance: null | Instance = null
const containerRef = ref<HTMLDivElement>()
const popperRef = ref<HTMLDivElement>()
const triggerRef = ref<HTMLDivElement>()
const isOpen = ref<boolean>(false)

let innerEvents: Record<string, unknown> = reactive({})
let outerEvents: Record<string, unknown> = reactive({})

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  }
})

const open = debounce(() => {
  isOpen.value = true
  emits('visible-change', true)
}, props.openDelay)

const close = debounce(() => {
  isOpen.value = false
  emits('visible-change', false)
}, props.closeDelay)

const togglePopper = () => {
  if (isOpen.value) close()
  else open()
}

const addEvents = () => {
  if (props.trigger === 'click') {
    innerEvents['click'] = togglePopper
    return
  }

  innerEvents['mouseenter'] = open
  outerEvents['mouseleave'] = close
}

// 如果不是手动模式，添加事件
if (!props.manual) {
  addEvents()
}

useClickOutside(containerRef, () => {
  if (isOpen.value) {
    if (props.trigger === 'click') return close()
    return emits('click-outside', true)
  }
})

watch(
  isOpen,
  (newVal) => {
    if (!newVal) return

    if (triggerRef.value && popperRef.value) {
      popperInstance = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  },
  { flush: 'post' },
)

watch(
  () => props.manual,
  (newVal) => {
    if (newVal) {
      innerEvents = {}
      outerEvents = {}
      addEvents()
    }
  },
)

watch(
  () => props.trigger,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      innerEvents = {}
      outerEvents = {}
      addEvents()
    }
  },
)

onUnmounted(() => {
  popperInstance?.destroy()
})

defineExpose<TooltipInstance>({
  open,
  close,
})
</script>

<template>
  <div class="mr-tooltip" ref="containerRef" v-on="outerEvents">
    <div class="mr-tooltip__trigger" ref="triggerRef" v-on="innerEvents">
      <slot />
    </div>
    <Transition name="fade">
      <div class="mr-tooltip__popper" ref="popperRef" v-if="isOpen">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>
