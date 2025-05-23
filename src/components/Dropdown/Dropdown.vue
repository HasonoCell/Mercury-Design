<script setup lang="ts">
import RenderVNode from '../Common/RenderVNode'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { DropdownEmits, DropdownInstance, DropdownProps, MenuOption } from './types'
import { ref } from 'vue'

defineOptions({
  name: 'MercuryDropdown',
})

const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true,
})
const emits = defineEmits<DropdownEmits>()

const tooltipRef = ref<TooltipInstance>()

const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}

const handleItemClick = (item: MenuOption) => {
  if (item.disabled) return
  if (props.hideAfterClick) tooltipRef.value?.close()
  emits('select', item)
}

defineExpose<DropdownInstance>({
  open: () => tooltipRef.value?.open(),
  close: () => tooltipRef.value?.close(),
})
</script>

<template>
  <div class="mr-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :popper-options="popperOptions"
      ref="tooltipRef"
      @visible-change="visibleChange"
    >
      <slot />
      <template #content>
        <ul class="mr-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.disabled" class="divided-placeholder" role="separator" />
            <li
              class="mr-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
              @click="handleItemClick(item)"
            >
              <RenderVNode :vnode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
