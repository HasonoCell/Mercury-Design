<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'Mercury-Button',
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const buttonRef = ref<HTMLButtonElement>()

defineExpose({
  ref: buttonRef,
})
</script>

<template>
  <button
    ref="buttonRef"
    class="mr-button"
    :class="{
      [`mr-button--${type}`]: type,
      [`mr-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span><slot /></span>
  </button>
</template>
