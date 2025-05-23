<script setup lang="ts">
import { ref } from 'vue'
import type { AlertEmits, AlertProps } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'MercuryAlert',
})

withDefaults(defineProps<AlertProps>(), {
  type: 'success',
  closable: true,
})

const emits = defineEmits<AlertEmits>()

const visible = ref<boolean>(true)

const close = () => {
  visible.value = false
  emits('close')
}
</script>

<template>
  <Transition name="fade">
    <div
      class="mr-alert"
      :class="{
        [`mr-alert--${type}`]: type,
        [`mr-alert--${effect}`]: effect,
      }"
      v-if="visible"
    >
      <slot />
      <div v-if="closable" class="mr-alert-icon">
        <Icon icon="xmark" @click.stop="close"></Icon>
      </div>
    </div>
  </Transition>
</template>
