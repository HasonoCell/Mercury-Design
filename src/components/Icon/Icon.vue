<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'Mercury-Icon',
  inheritAttrs: false,
})

const props = defineProps<
  FontAwesomeIconProps & {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    color?: string
  }
>()

const filteredProps = computed(() => omit(props, ['type', 'color']))

const customStyles = computed(() => (props.color ? { color: props.color } : {}))
</script>

<template>
  <i
    class="mr-icon"
    :class="{
      [`mr-icon--${type}`]: type,
    }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>
