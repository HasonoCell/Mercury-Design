<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

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
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span><slot /></span>
  </button>
</template>
