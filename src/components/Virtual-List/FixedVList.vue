<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FixedVLProps } from './types'
import { throttle } from 'lodash-es'

defineOptions({
  name: 'Mercury-FixedVList',
})

const props = withDefaults(defineProps<FixedVLProps>(), {
  itemHeight: 50,
})

const startIndex = ref<number>(0)
const startOffset = ref<number>(0)
const listRef = ref<HTMLDivElement>()

const fillerHeight = computed(() => {
  return props.data.length * props.itemHeight
})

const listViewHeight = computed(() => {
  return listRef.value ? listRef.value.offsetHeight : 0
})

const viewItemsCount = computed(() => {
  return Math.ceil(listViewHeight.value / props.itemHeight) + 1
})

const endIndex = computed(() => {
  return startIndex.value + viewItemsCount.value
})

const renderData = computed(() => {
  const realStartIndex = Math.max(0, startIndex.value - viewItemsCount.value)

  // 这里不是 props.data.length - 1，是因为后面截取 renderData 时 slice 方法截取左闭右开区间
  const realEndIndex = Math.min(endIndex.value, props.data.length)
  return props.data.slice(realStartIndex, realEndIndex)
})

const translateStyle = computed(() => {
  return `transform:translateY(${startOffset.value}px)`
})

const heightStyle = computed(() => {
  return `height: ${fillerHeight.value}px`
})

const itemStyle = computed(() => {
  return `height: ${props.itemHeight}px; line-height: ${props.itemHeight}px`
})

const handleScroll = (e: Event) => {
  const scrollDom = e.target as HTMLDivElement
  if (!scrollDom) return

  const { scrollTop } = scrollDom
  startIndex.value = Math.floor(scrollTop / props.itemHeight)
  startOffset.value = startIndex.value * props.itemHeight
}

const throttledHandleScroll = throttle(handleScroll, 100)
</script>

<template>
  <div class="mr-virtual-list" ref="listRef" @scroll="throttledHandleScroll">
    <div class="mr-virtual-list-filler" :style="heightStyle" />
    <div class="mr-virtual-list-content" :style="translateStyle">
      <div class="mr-virtual-list-item" v-for="item in renderData" :key="item" :style="itemStyle">
        {{ item }}
      </div>
    </div>
  </div>
</template>
