<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import RenderVNode from '../Common/RenderVNode'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import type { TooltipInstance } from '../Tooltip/types'
import type { InputInstance } from '../Input/types'
import { computed, reactive, ref, watch } from 'vue'

defineOptions({
  name: 'MercurySelect',
})

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()

const findOption = (value: string | number) => {
  const option = props.options.find((option) => option.value === value)
  return option ? option : null
}
const initOption = findOption(props.modelValue)
// 解决弹出层与 Input 框相同宽度的问题，参考 popper.js 官网
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
}

const tooltipRef = ref<TooltipInstance>()
const inputRef = ref<InputInstance>()
const isDropdownShow = ref<boolean>(false)
const selectState = reactive<SelectStates>({
  inputValue: initOption ? initOption.label : '',
  selectedOption: initOption,
  mouseHover: false,
})

const showClearIcon = computed(() => {
  return (
    props.clearable &&
    selectState.mouseHover &&
    selectState.selectedOption &&
    selectState.inputValue.trim() !== ''
  )
})

const handleDropdown = (show: boolean) => {
  if (show) tooltipRef.value?.open()
  else tooltipRef.value?.close()

  isDropdownShow.value = show
  emits('visible-change', show)
}

const toggleDropdown = () => {
  if (props.disabled) return

  if (isDropdownShow.value) handleDropdown(false)
  else handleDropdown(true)
}

const itemSelect = (item: SelectOption) => {
  if (item.disabled) return
  selectState.inputValue = item.label
  selectState.selectedOption = item
  emits('change', item.label)
  emits('update:modelValue', item.label)
  handleDropdown(false)
  inputRef.value?.ref.focus()
}

const handleMouse = (isEnter: boolean) => {
  if (isEnter) selectState.mouseHover = true
  else selectState.mouseHover = false
}

const handleClear = () => {
  selectState.selectedOption = null
  selectState.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}

const NOOP = () => {}

watch(
  () => props.modelValue,
  (newVal) => {
    selectState.inputValue = newVal
  },
)
</script>

<template>
  <div
    class="mr-select"
    :class="{
      'is-disabled': disabled,
    }"
    @click="toggleDropdown"
    @mouseenter="handleMouse(true)"
    @mouseleave="handleMouse(false)"
  >
    <Tooltip
      placement="bottom-start"
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-outside="handleDropdown(false)"
      manual
    >
      <Input v-model="selectState.inputValue" :placeholder="placeholder" readonly ref="inputRef">
        <template #suffix>
          <Icon
            icon="circle-xmark"
            class="mr-input__clear"
            v-if="showClearIcon"
            @mousedown.prevent="NOOP"
            @click.stop="handleClear"
          />
          <Icon
            icon="angle-down"
            class="header-angle"
            :class="{
              'is-active': isDropdownShow,
            }"
            v-else
          />
        </template>
      </Input>
      <template #content>
        <ul class="mr-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="mr-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': selectState.selectedOption?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVNode :vnode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
