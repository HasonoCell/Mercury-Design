---
title: Dropdown 组件
description: 常用的操作菜单组件，支持多种触发方式和菜单选项配置
---

<script setup> 
import Dropdown from '../../src/components/Dropdown/Dropdown.vue' 
import Button from '../../src/components/Button/Button.vue' 
import { h } from 'vue'
</script>

<style>
.vp-doc ul, 
.vp-doc ol {
  list-style-type: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>

# Dropdown 组件

## 基础用法

通过 `menuOptions` 属性传递菜单数据，包裹触发元素使用。支持传入自定义节点。

<Dropdown :menu-options="[
  { label: h('b', '自定义文本'), key: 1 },
  { label: '选项2', key: '2', divided: true },
  { label: '禁用选项', key: '3', disabled: true },
]">
<Button>触发下拉</Button>
</Dropdown>

```vue
<Dropdown
  :menu-options="[
    { label: h('b', '自定义文本'), key: 1 },
    { label: '选项2', key: '2', divided: true },
    { label: '禁用选项', key: '3', disabled: true },
  ]"
>
<Button>触发下拉</Button>
</Dropdown>
```

## 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover/click/focus`

<Dropdown :menu-options="[
  { label: h('b', '自定义文本'), key: 1 },
  { label: '选项2', key: '2', divided: true },
  { label: '禁用选项', key: '3', disabled: true },
]" trigger="click" >
<Button>触发下拉</Button>
</Dropdown>

```vue
<Dropdown
  :menu-options="[
    { label: h('b', '自定义文本'), key: 1 },
    { label: '选项2', key: '2', divided: true },
    { label: '禁用选项', key: '3', disabled: true },
  ]"
  trigger="click"
>
<Button>触发下拉</Button>
</Dropdown>
```

## 菜单特性

设置 `disabled: true` 禁用菜单项；通过 `divided: true` 添加分割线

## API

### Props

| 属性名           | 类型           | 默认值     | 描述                                                |
| ---------------- | -------------- | ---------- | --------------------------------------------------- |
| `menuOptions`    | `MenuOption[]` | — (必填)   | 菜单选项数组（必填）                                |
| `hideAfterClick` | `boolean`      | `true`     | 是否在点击菜单项后隐藏下拉框                        |
| `trigger`        | `string`       | `'hover'`  | 触发方式，可选值：`'hover'` / `'click'` / `'focus'` |
| `placement`      | `string`       | `'bottom'` | 菜单弹出位置（可选值参考 `Tooltip` 组件）           |
| `openDelay`      | `number`       | `0`        | 延迟显示时间（毫秒）                                |
| `closeDelay`     | `number`       | `0`        | 延迟隐藏时间（毫秒）                                |

### Events

| 事件名           | 参数类型     | 描述                     |
| ---------------- | ------------ | ------------------------ |
| `visible-change` | `boolean`    | 下拉框显示状态变化时触发 |
| `select`         | `MenuOption` | 点击菜单项时触发         |

### Exposes

| 名称    | 类型         | 描述           |
| ------- | ------------ | -------------- |
| `open`  | `() => void` | 手动打开下拉框 |
| `close` | `() => void` | 手动关闭下拉框 |
