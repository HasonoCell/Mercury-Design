---
title: Switch
description: 用于表示两种状态之间的切换，支持自定义值、尺寸和禁用状态。
---

<script setup>
import Switch from '../../src/components/Switch/Switch.vue'
</script>

# Switch 组件

用于表示两种状态之间的切换，支持自定义值、尺寸和禁用状态。

## 基础用法

通过 `v-model` 绑定开关状态，默认为 `true/false`。点击开关区域可切换状态：
<Switch v-model="value" /> <span>{{ value }}</span>

```vue
<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <Switch v-model="value" />
  <span>{{ value }}</span>
</template>
```

## 不同尺寸

通过 `size` 属性设置开关尺寸，支持 `large、small 和默认（medium）`：
<Switch v-model="value" size="large" />

<div style="width: 20px" />
<Switch v-model="value" />
<div style="width: 20px" />
<Switch v-model="value" size="small" />

```vue
<Switch v-model="value" size="large" />
<Switch v-model="value" />
<Switch v-model="value" size="small" />
```

## 状态文本

使用 `activeText` 和 `inactiveText` 显示状态文字：
<Switch v-model="value" activeText="开" inactiveText="关" />

```vue
<Switch v-model="value" activeText="开" inactiveText="关" />
```

## 自定义值

通过 `activeValue` 和 `inactiveValue` 定义自定义值：
<Switch v-model="value" :activeValue="1" :inactiveValue="0" /> <span>{{ value }}</span>

```vue
<template>
  <Switch v-model="value" :activeValue="1" :inactiveValue="0" />
  <span>{{ value }}</span>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>
```

## API

### Props

| 属性名          | 类型      | 默认值  | 描述                                |
| --------------- | --------- | ------- | ----------------------------------- |
| `v-model`       | `any`     | —       | 绑定开关状态值                      |
| `size`          | `string`  | —       | 开关尺寸，可选值：`large` / `small` |
| `disabled`      | `boolean` | `false` | 是否禁用开关                        |
| `activeText`    | `string`  | —       | 打开状态时显示的文本                |
| `inactiveText`  | `string`  | —       | 关闭状态时显示的文本                |
| `activeValue`   | `any`     | `true`  | 打开状态对应的值                    |
| `inactiveValue` | `any`     | `false` | 关闭状态对应的值                    |
| `name`          | `string`  | —       | 原生表单名称属性                    |
| `id`            | `string`  | —       | 原生表单 ID 属性                    |

### Emits

| 事件名              | 参数类型 | 描述                   |
| ------------------- | -------- | ---------------------- |
| `change`            | `any`    | 状态变化时触发         |
| `update:modelValue` | `any`    | 状态变化时更新 v-model |

### Exposes

| 名称  | 类型               | 描述                    |
| ----- | ------------------ | ----------------------- |
| `ref` | `HTMLInputElement` | 暴露原生 input 元素引用 |
