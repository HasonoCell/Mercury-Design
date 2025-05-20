<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
import type { MessageProps } from './types'
import RenderVNode from '../Common/RenderVNode'
import { computed, onMounted, ref, type CSSProperties } from 'vue'
import { getLastBottomOffset } from './method'
import useEventListener from '../../hooks/useEventListener'

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
})

let timer: number
const visible = ref<boolean>(false)
const messageRef = ref<HTMLDivElement>()
const height = ref<number>(0)

const lastBottomOffset = computed(() => getLastBottomOffset(props.id))
const topOffset = computed(() => lastBottomOffset.value + props.offset)
const bottomOffset = computed(() => topOffset.value + height.value)
const messageStyle = computed(
  () =>
    ({
      top: topOffset.value + 'px',
      zIndex: props.zIndex,
    }) as CSSProperties,
)

const startTimer = () => {
  if (props.duration === 0) return

  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}

const clearTimer = () => {
  clearTimeout(timer)
}

const handleClose = () => {
  visible.value = false
}

useEventListener(document, 'keydown', (e: Event) => {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
})

const destroyComponent = () => {
  props.onDestroy()
}

const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}

onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose({
  bottomOffset,
  visible,
})
</script>

<template>
  <Transition @enter="updateHeight" @after-leave="destroyComponent" name="fade-up">
    <div
      class="mr-message"
      role="alert"
      :class="{
        [`mr-message--${type}`]: type,
        'is-close': showClose,
      }"
      v-show="visible"
      ref="messageRef"
      :style="messageStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="mr-message__content">
        <slot><RenderVNode v-if="props.message" :vnode="props.message" /></slot>
      </div>
      <div class="mr-message__close" v-if="props.showClose">
        <Icon icon="xmark" @click.stop="handleClose" />
      </div>
    </div>
  </Transition>
</template>
