---
title: Scale
description: 用于根据设计稿尺寸进行等比缩放，常用于大屏适配场景。
---

<script setup>
import Scale from '../../src/components/Scale/Scale.vue'
</script>

# Scale 组件

用于根据设计稿尺寸进行等比缩放，常用于大屏适配场景。

## 基础用法

通过 `designDraftWidth` 和 `designDraftHeight` 定义设计稿尺寸，组件会自动根据屏幕尺寸进行等比缩放。

```vue
<template>
  <Scale>
    <div style="width: 100%; height: 100%; background: #409eff" />
  </Scale>
</template>

<script setup lang="ts">
import Scale from './components/Scale/Scale.vue'
</script>
```

## 动态调整

修改设计稿尺寸时，或者当前视口尺寸变化时，容器会自动重新计算缩放比例

```vue
<template>
  <Scale designDraftWidth="500" designDraftHeight="800">
    <div style="width: 150px; height: 150px; background: #67C23A;" />
  </Scale>
</template>
```

## API

### Props

| 属性名              | 类型     | 默认值 | 描述                   |
| ------------------- | -------- | ------ | ---------------------- |
| `designDraftWidth`  | `number` | `375`  | 设计稿宽度（单位：px） |
| `designDraftHeight` | `number` | `700`  | 设计稿高度（单位：px） |

### Exposes

| 名称        | 类型             | 描述                |
| ----------- | ---------------- | ------------------- |
| `screenRef` | `HTMLDivElement` | 缩放容器的 DOM 引用 |
