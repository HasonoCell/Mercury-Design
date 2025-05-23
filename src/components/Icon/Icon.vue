<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'MercuryIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

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
