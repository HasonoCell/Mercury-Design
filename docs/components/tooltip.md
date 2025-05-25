---
title: Tooltip
description: 常用于展示悬浮提示信息，支持多种触发方式和位置配置。
---

<script setup>
import Tooltip from '../../src/components/Tooltip/Tooltip.vue'
import Button from '../../src/components/Button/Button.vue'
import { ref } from 'vue'
const tooltipRef = ref()
</script>

# Tooltip 组件

常用于展示悬浮提示信息，支持多种触发方式和位置配置。

## 基础用法

通过 `content` 属性设置提示内容，使用默认插槽包裹触发元素：
<Tooltip content="这是一个提示">
<Button>悬停显示</Button>
</Tooltip>

```vue
<Tooltip content="这是一个提示">
  <Button>悬停显示</Button>
</Tooltip>
```

## 触发方式

支持 `hover` 和 `click` 两种触发方式：
<Tooltip content="悬停触发">
<Button>Hover me</Button>
</Tooltip>

  <div style="display: inline-flex; width: 20px;" />
<Tooltip content="点击触发" trigger="click">
  <Button>Click me</Button>
</Tooltip>

```vue
<!-- hover 触发 -->
<Tooltip content="悬停触发">
  <Button>Hover me</Button>
</Tooltip>

<!-- click 触发 -->
<Tooltip content="点击触发" trigger="click">
  <Button>Click me</Button>
</Tooltip>
```

## 位置设置

通过 `placement` 属性设置提示框位置：
<Tooltip content="top 提示" placement="top">
<Button>Top</Button>
</Tooltip>

<div style="display: inline-flex; width: 20px;" />

<Tooltip content="right 提示" placement="right">
<Button>Right</Button>
</Tooltip>

```vue
<Tooltip content="top 提示" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="right 提示" placement="right">
  <Button>Right</Button>
</Tooltip>
```

## 延迟控制

设置 `openDelay` 和 `closeDelay` 控制显示/隐藏延迟（单位：毫秒）：
<Tooltip content="延迟显示提示" :open-delay="500" :close-delay="300">
<Button>悬停查看延迟效果</Button>
</Tooltip>

```vue
<Tooltip content="延迟显示提示" :open-delay="500" :close-delay="300">
  <Button>悬停查看延迟效果</Button>
</Tooltip>
```

## 手动控制

通过 `manual` 模式结合 `ref` 实现手动控制：

  <Tooltip ref="tooltipRef" content="手动控制提示" manual>
  <Button>触发元素</Button>
  </Tooltip>
  <div style="display: inline-flex; width: 20px;" />
  <Button @click="tooltipRef.open()">手动打开</Button>
  <Button @click="tooltipRef.close()">手动关闭</Button>

```vue
<script setup lang="ts">
import Button from '@hasonocell/mercury-design'
import Tooltip from '@hasonocell/mercury-design'
import { ref } from 'vue'
const tooltipRef = ref()
</script>

<template>
  <Tooltip ref="tooltipRef" content="手动控制提示" manual>
    <Button>触发元素</Button>
  </Tooltip>
  <Button @click="tooltipRef.open()">手动打开</Button>
  <Button @click="tooltipRef.close()">手动关闭</Button>
</template>
```

## 自定义内容

使用 `content` 插槽自定义提示内容:
<Tooltip>
<Button>复杂内容</Button>
<template #content>

<div style="padding: 8px">
<h1>自定义HTML内容</h1>
<p style="color: skyblue">支持样式和组件</p>
</div>

</template>
</Tooltip>

```vue
<Tooltip>
  <Button>复杂内容</Button>
  <template #content>
    <div style="padding: 8px">
      <p>自定义HTML内容</p>
      <span style="color: red">支持样式和组件</span>
    </div>
  </template>
</Tooltip>
```

## API

### Props

| 属性名          | 类型                 | 默认值     | 描述                                        |
| --------------- | -------------------- | ---------- | ------------------------------------------- |
| `content`       | `string`             | —          | 提示文本内容                                |
| `trigger`       | `'hover' \| 'click'` | `'hover'`  | 触发方式                                    |
| `placement`     | `BasePlacement`      | `'bottom'` | 提示框位置（支持所有 `Popper.js` 位置参数） |
| `manual`        | `boolean`            | `false`    | 是否启用手动控制模式                        |
| `openDelay`     | `number`             | `0`        | 鼠标移入后延迟显示时间（ms）                |
| `closeDelay`    | `number`             | `0`        | 鼠标移出后延迟隐藏时间（ms）                |
| `popperOptions` | `Partial<Options>`   | —          | 自定义 `Popper.js` 配置对象                 |

### Emits

| 事件名           | 参数类型  | 描述                    |
| ---------------- | --------- | ----------------------- |
| `visible-change` | `boolean` | 显示/隐藏状态变化时触发 |
| `click-outside`  | `boolean` | 点击非触发区域时触发    |

### Exposes

| 方法名  | 参数 | 返回值 | 描述           |
| ------- | ---- | ------ | -------------- |
| `open`  | —    | `void` | 手动打开提示框 |
| `close` | —    | `void` | 手动关闭提示框 |
