<script setup lang="ts">
import { ref, useAttrs, watch, nextTick, computed } from 'vue'
import type { InputEmits, InputProps, InputInstance } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'MercuryInput',
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off',
  modelValue: '',
})
const emits = defineEmits<InputEmits>()

const attrs = useAttrs()
const isFocus = ref<boolean>(false)
const passwordVisible = ref<boolean>(false)
const innerValue = ref<string>(props.modelValue)
const inputRef = ref<HTMLInputElement>()

const showClear = computed(
  () => props.clearable && !props.disabled && !!innerValue.value && isFocus.value,
)
const showPasswordArea = computed(() => props.showPassword && !props.disabled && !!innerValue.value)

const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}

const handleChange = () => {
  emits('change', innerValue.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}

const keepFocus = async () => {
  await nextTick()
  inputRef.value?.focus()
}

const handleBlur = (event: FocusEvent) => {
  isFocus.value = true
  emits('blur', event)
}

const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

// 占位函数，消除 blur 带来的影响
const NOOP = () => {}

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  },
)

defineExpose<InputInstance>({
  ref: inputRef.value!,
})
</script>

<template>
  <div
    class="mr-input"
    :class="{
      [`mr-input--${type}`]: type,
      [`mr-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="mr-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="mr-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="mr-input__prefix">
          <slot name="prefix" />
        </span>
        <!-- main input -->
        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          class="mr-input__inner"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          ref="inputRef"
        />
        <!-- suffix slot -->
        <span
          v-if="$slots.suffix || showClear || showPasswordArea"
          class="mr-input__suffix"
          @click="keepFocus"
        >
          <slot name="suffix" />
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="mr-input__clear"
            @click="clear"
            @mousedown.prevent="NOOP"
          />
          <Icon
            icon="eye"
            v-if="showPasswordArea && passwordVisible"
            class="mr-input__password"
            @click="togglePasswordVisible"
          />
          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            class="mr-input__password"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="mr-input__append">
        <slot name="append" />
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        v-bind="attrs"
        class="mr-textarea__wrapper"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        ref="inputRef"
      ></textarea>
    </template>
  </div>
</template>
