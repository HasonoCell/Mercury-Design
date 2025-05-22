<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { collapseContextKey, type CollapseEmits, type CollapseProps, type NameType } from './types'

defineOptions({
  name: 'Mercury-Collapse',
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeName = ref<NameType[]>([])

const handleItemClick = (name: NameType) => {
  const idx = activeName.value.indexOf(name)

  if (props.accordion) {
    activeName.value = [activeName.value[0] === name ? '' : name]
  } else {
    if (idx >= 0) {
      // 存在，删除对应的 name
      activeName.value.splice(idx, 1)
    } else {
      // 不存在，添加对应的 name
      activeName.value.push(name)
    }
  }
  emits('update:modelValue', activeName.value)
  emits('change', activeName.value)
}

provide(collapseContextKey, {
  activeName,
  handleItemClick,
})

watch(
  () => props.modelValue,
  () => {
    activeName.value = props.modelValue
  },
)

watch(
  () => props.accordion,
  () => {
    activeName.value = props.modelValue
  },
)
</script>

<template>
  <div class="mr-collapse">
    <slot />
  </div>
</template>
