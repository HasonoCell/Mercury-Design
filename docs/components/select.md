---
title: Select
description: 当选项过多时，使用下拉菜单展示并选择内容。
---

<script setup>
import Select from '../../src/components/Select/Select.vue'
import { h } from 'vue'

const customRender = (option) => {
  return h('div', h('b', option.label)) 
}
</script>

# Select 组件

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

通过 `v-model` 绑定选中值，使用 `options` 定义选项列表。

<Select v-model="selected" :options="[
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '禁用选项', value: '3', disabled: true }
]" placeholder="请选择" />

```vue
<template>
  <Select v-model="selected" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref, h } from 'vue'
const selected = ref('')
const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '禁用选项', value: '3', disabled: true },
]
</script>
```

## 自定义模板

通过 `renderLabel` 属性自定义选项渲染内容。
<Select
v-model="selected"
:options="[
{ label: '<b>标签选项1', value: '1' },
{ label: '<b>标签选项2', value: '2' },
{ label: '禁用选项', value: '3', disabled: true },
]"
:renderLabel="customRender">
</Select>

```vue
<script setup>
import Select from '../../src/components/Select/Select.vue'

const customRender = (option) => {
  return h('div', h('b', option.label))
}
</script>

<template>
  <Select
    v-model="selected"
    :options="[
      { label: '<b>标签选项1', value: '1' },
      { label: '<b>标签选项2', value: '2' },
      { label: '禁用选项', value: '3', disabled: true },
    ]"
    :renderLabel="customRender"
  >
  </Select>
</template>
```

## 可清空单选

启用 `clearable` 属性允许通过图标清除已选值。

<Select
v-model="selected"
:options="[
{ label: '选项1', value: '1' },
{ label: '选项2', value: '2' },
{ label: '禁用选项', value: '3', disabled: true },
]"
clearable>
</Select>

## 筛选选项

启用 `filterable` 属性后支持输入筛选，可通过 `filterFunc` 自定义筛选逻辑。

<Select
  v-model="selected"
  :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '禁用选项', value: '3', disabled: true },
    ]"
  filterable>
</Select>

## API

### `SelectProps` 属性

| 名称                      | 描述               | 类型                                                   | 默认值  |
| ------------------------- | ------------------ | ------------------------------------------------------ | ------- |
| `model-value` / `v-model` | 绑定值             | `'string \| number'`                                   | —       |
| `options`                 | 下拉框选项         | `SelectOption[]`                                       | `[]`    |
| `disabled`                | 是否禁用           | `boolean`                                              | `false` |
| `placeholder`             | 输入框占位文本     | `string`                                               | `''`    |
| `clearable`               | 是否显示清除按钮   | `boolean`                                              | `false` |
| `filterable`              | 是否可筛选         | `boolean`                                              | `false` |
| `filter-method`           | 自定义筛选方法     | `(value: string \| number) => SelectOption[]`          | —       |
| `remote`                  | 选项是否远程加载   | `boolean`                                              | `false` |
| `remote-method`           | 自定义远程筛选方法 | `(value: string \| number) => Promise<SelectOption[]>` | —       |

### `SelectOption` 属性

| 名称       | 描述           | 类型               | 默认值  |
| ---------- | -------------- | ------------------ | ------- |
| `label`    | 选项显示的文字 | `'string'`         | —       |
| `value`    | 选项的值       | `string \| number` | —       |
| `disabled` | 是否禁用       | `boolean`          | `false` |

### 事件

| 名称             | 描述                                      | 类型                        |
| ---------------- | ----------------------------------------- | --------------------------- |
| `change`         | 当选择器的输入框失去焦点时触发            | `(e: SelectOption) => void` |
| `visible-change` | 当下拉框显示或者隐藏时触发                | `(e: boolean) => void`      |
| `clear`          | 点击 `clearable` 属性生成的清空按钮时触发 | `() => void`                |
