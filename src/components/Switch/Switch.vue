<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { SwitchProps, SwitchEmits } from './types'

defineOptions({
  name: 'MercurySwitch',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
})

const emits = defineEmits<SwitchEmits>()

const inputRef = ref<HTMLInputElement>()
const innerValue = ref(props.modelValue)
const checked = computed(() => innerValue.value === props.activeValue)

const switchValue = () => {
  if (props.disabled) return

  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('change', newValue)
  emits('update:modelValue', newValue)
}

onMounted(() => {
  inputRef.value!.checked = checked.value
})

watch(checked, (newVal) => {
  inputRef.value!.checked = newVal
})

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  },
)
</script>

<template>
  <div
    class="mr-switch"
    :class="{
      [`mr-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="switchValue"
  >
    <input
      class="mr-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
      ref="inputRef"
    />
    <div class="mr-switch__core">
      <div class="mr-switch__core-inner">
        <span v-if="activeText || inactiveText" class="mr-switch__core-inner-text">{{
          checked ? activeText : inactiveText
        }}</span>
      </div>
      <div class="mr-switch__core-action" />
    </div>
  </div>
</template>
