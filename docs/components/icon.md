---
title: Icon
description: 通用的图标组件，基于 FontAwesome 实现，支持主题颜色和自定义颜色以及属性。
---

<script setup>
import Icon from '../../src/components/Icon/Icon.vue'
</script>

# Icon 组件

通用的图标组件，基于 FontAwesome 实现，支持主题颜色和自定义颜色以及属性。
你可以在 [可以使用的图标名称列表](https://fontawesome.com/search?o=r&ic=free&s=solid&ip=classic) 查看所有图标选项。

## 基础用法

使用 `icon` 属性指定 FontAwesome 图标名称：
<Icon icon="user" size="2x" />

<div style="width: 10px; display: inline-flex;" />
<Icon icon="cookie-bite" size="2x"/>

```vue
<Icon icon="user" size="2x" />
<Icon icon="cookie-bite" size="2x" />
```

使用 `type` 属性设置图标主题颜色：
<Icon type="primary" icon="circle" size="2x" />

<div style="width: 10px; display: inline-flex;" />
<Icon type="success" icon="check" size="2x" />
<div style="width: 10px; display: inline-flex;" />
<Icon type="warning" icon="exclamation" size="2x" />
<div style="width: 10px; display: inline-flex;" />
<Icon type="danger" icon="xmark" size="2x" />
<div style="width: 10px; display: inline-flex;" />
<Icon type="info" icon="info" size="2x" />

```vue
<Icon type="primary" icon="circle" size="2x" />
<Icon type="success" icon="check" size="2x" />
<Icon type="warning" icon="exclamation" size="2x" />
<Icon type="danger" icon="xmark" size="2x" />
<Icon type="info" icon="info" size="2x" />
```

## 自定义颜色

通过 color 属性直接指定图标颜色：
<Icon icon="star" color="#f06" size="2x" />

<div style="width: 10px; display: inline-flex;" />
<Icon icon="heart" color="#9c27b0" size="2x" />

```vue
<Icon icon="star" color="#f06" size="2x" />
<Icon icon="heart" color="#9c27b0" size="2x" />
```

## 继承属性

组件继承所有 FontAwesomeIcon 的属性和 原生 SVG 属性，支持 `class、style` 等属性设置。

## API

| 属性名  | 类型                   | 默认值  | 描述                                                        |
| ------- | ---------------------- | ------- | ----------------------------------------------------------- |
| `type`  | `string`               | —       | 图标主题颜色，可选值：`primary/success/warning/danger/info` |
| `color` | `string`               | —       | 自定义图标颜色（优先级高于 type）                           |
| `icon`  | `string` \| `string[]` | 必填    | 图标名称或图标集合                                          |
| `size`  | `string`               | —       | 图标尺寸（继承自 `FontAwesomeIconProps`）                   |
| `spin`  | `boolean`              | `false` | 是否启用旋转动画                                            |
| `pulse` | `boolean`              | `false` | 是否启用阶梯旋转动画                                        |
