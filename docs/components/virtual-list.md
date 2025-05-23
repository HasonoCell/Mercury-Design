---
title: Virtual-List
description: 用于高效渲染超长定高列表的虚拟滚动组件。
---

<script setup> 
import VirtualList from '../../src/components/Virtual-List/FixedVList.vue' 
import { ref } from 'vue'

const listData = ref(Array.from({ length: 10000 }, (_, i) => `当前显示数据 ${i + 1}`))
</script>

# Virtual-List 组件

用于高效渲染超长定高列表的虚拟滚动组件，仅渲染可视区域附近的元素，显著提升大数据场景下的性能表现。

## 基础用法

通过 `data` 传递数据源，`item-height` 定义每项高度`（默认50px）`。
建议在外层添加一个父元素 `container` 用来控制列表的高度，作为子元素的列表会自动占满父元素。

<div style="width: 100%; height: 500px">
<VirtualList :data="listData"/>
</div>

```vue
<template>
  <div style="width: 100%; height: 500px">
    <VirtualList :data="listData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const listData = ref(Array.from({ length: 100000 }, (_, i) => `当前显示数据 ${i + 1}`))
</script>
```

## API

| 属性名       | 类型     | 默认值 | 描述                                       |
| ------------ | -------- | ------ | ------------------------------------------ |
| `data`       | `any[]`  | 必填   | 需要渲染的数据源（响应式数据需使用ref）    |
| `itemHeight` | `number` | `50`   | 列表项固定高度（必须保证所有子项高度一致） |

| 属性名 | 类型             | 默认值 | 描述                      |
| ------ | ---------------- | ------ | ------------------------- |
| `ref`  | `HTMLDivElement` | —      | 暴露虚拟列表容器的DOM引用 |
