---
title: Collapse
description: 用于组织和折叠内容区域，支持手风琴模式和多展开模式。
---

<script setup>
import Collapse from '../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../src/components/Collapse/CollapseItem.vue'
</script>

# Collapse 组件

用于组织和折叠内容区域，支持手风琴模式和多展开模式。

## 基础用法

通过 `v-model` 控制展开面板：
<Collapse v-model="activeNames" :accordion="false">
<CollapseItem name="1" title="面板1">内容区域</CollapseItem>
<CollapseItem name="2" title="面板2">内容区域</CollapseItem>
<CollapseItem name="3" title="面板3">内容区域</CollapseItem>
</Collapse>

```vue
<template>
  <Collapse v-model="activeNames">
    <CollapseItem name="1" title="面板1">内容区域</CollapseItem>
    <CollapseItem name="2" title="面板2">内容区域</CollapseItem>
    <CollapseItem name="3" title="面板3">内容区域</CollapseItem>
  </Collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
```

使用 `accordion` 开启手风琴模式：

<Collapse v-model="activeNames" :accordion="true">
<CollapseItem name="1" title="面板1">内容区域</CollapseItem>
<CollapseItem name="2" title="面板2">内容区域</CollapseItem>
<CollapseItem name="3" title="面板3">内容区域</CollapseItem>
</Collapse>

```vue
<template>
  <Collapse v-model="activeNames" :accordion="true">
    <CollapseItem name="1" title="面板1">内容区域</CollapseItem>
    <CollapseItem name="2" title="面板2">内容区域</CollapseItem>
    <CollapseItem name="3" title="面板3">内容区域</CollapseItem>
  </Collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
```

你可以通过插槽自定义标题内容，当没有插槽内容时，将使用 `title` 属性的值作为标题.
<Collapse v-model="activeNames" :accordion="false">
<CollapseItem name="a">
<template #title>
<span style="color: skyblue">自定义标题</span>
</template>
内容区域
</CollapseItem>
</Collapse>

```vue
<template>
  <Collapse v-model="activeNames" :accordion="false">
    <CollapseItem name="a">
      <template #title>
        <span style="color: skyblue">自定义标题</span>
      </template>
      内容区域
    </CollapseItem>
  </Collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['a'])
</script>
```

## 禁用状态

通过 `disabled` 属性禁用面板：
<Collapse v-model="activeNames">
<CollapseItem name="1" title="禁用面板" disabled>不可操作的面板</CollapseItem>
</Collapse>

```vue
<CollapseItem name="1" title="禁用面板" disabled>
  不可操作的面板
</CollapseItem>
```

## API

### Collapse Props

| 属性名    | 类型      | 默认值 | 描述                     |
| --------- | --------- | ------ | ------------------------ |
| v-model   | `array`   | —      | 绑定展开面板的 name 数组 |
| accordion | `boolean` | false  | 是否开启手风琴模式       |

### Collapse Emits

| 事件名            | 参数类型 | 描述                         |
| ----------------- | -------- | ---------------------------- |
| update:modelValue | `array`  | 当前展开面板 name 变化时触发 |
| change            | `array`  | 面板展开状态变化时触发       |

### CollapseItem Props

| 属性名   | 类型              | 默认值 | 描述                 |
| -------- | ----------------- | ------ | -------------------- |
| name     | `string`/`number` | —      | 面板唯一标识（必填） |
| title    | `string`          | —      | 面板标题             |
| disabled | `boolean`         | false  | 是否禁用该面板       |
