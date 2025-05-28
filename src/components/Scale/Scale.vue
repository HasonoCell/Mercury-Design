<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { ScaleProps } from './types'

const props = withDefaults(defineProps<ScaleProps>(), {
  designDraftHeight: 700,
  designDraftWidth: 375,
})

const screenRef = ref<HTMLDivElement>()

const screenStyle = computed<CSSProperties>(() => ({
  width: props.designDraftWidth + 'px',
  height: props.designDraftHeight + 'px',
}))

const handleScreenAuto = () => {
  if (!screenRef.value) return
  // 计算缩放比例
  const clientHeight = document.documentElement.clientHeight // 初始高度
  const clientWidth = document.documentElement.clientWidth // 初始宽度
  const scale =
    clientWidth / clientHeight < props.designDraftWidth / props.designDraftHeight
      ? clientWidth / props.designDraftWidth
      : clientHeight / props.designDraftHeight // 缩放比例
  screenRef.value.style.transform = `scale(${scale}) translate(-50%, -50%)`
}

onMounted(() => {
  handleScreenAuto()
  window.addEventListener('resize', () => {
    handleScreenAuto()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    handleScreenAuto()
  })
})

defineExpose({
  screenRef,
})
</script>

<template>
  <div class="mr-scale">
    <div ref="screenRef" :style="screenStyle" class="mr-scale__content">
      <slot />
    </div>
  </div>
</template>
