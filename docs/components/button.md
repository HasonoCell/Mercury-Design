---
title: Button
description: Button 组件文档
---

<script setup>
import Button from '../../src/components/Button/Button.vue'
</script>

# Button 组件

常用的操作按钮组件，支持多种类型、尺寸和状态。

## 基础用法

使用 `type`, `plain`, `round` 和 `circle` 来定义按钮的样式。
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="info">Info</Button>

```vue
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="info">Info</Button>
```

## 不同样式

通过 `size` 属性设置按钮的大小：`large、small 或默认（中等）。`
<Button size="large">Large</Button>
<Button>Default</Button>
<Button size="small">Small</Button>

使用 `plain`, `round`, `circle`, `disabled`, `loading` 来自定义更丰富的按钮
<Button plain>Plain Button</Button>
<Button round>Round Button</Button>
<Button circle icon="search" />
<Button disabled>Disabled Button</Button>
<Button loading>Loading Button</Button>

```vue
<Button size="large">Large</Button>
<Button>Default</Button>
<Button size="small">Small</Button>
<Button plain>Plain Button</Button>
<Button round>Round Button</Button>
<Button circle icon="search" />
<Button disabled>Disabled Button</Button>
<Button loading>Loading Button</Button>
```

## 原生属性

使用 `nativeType` 属性指定按钮的 HTML 类型：`button、submit 或 reset。`
<Button nativeType="submit">Submit</Button>

```vue
<Button nativeType="submit">Submit</Button>
```

## API

### Props

| 属性名       | 类型      | 默认值     | 描述                                                                        |
| ------------ | --------- | ---------- | --------------------------------------------------------------------------- |
| `type`       | `string`  | —          | 按钮样式类型，可选值：`primary` / `success` / `warning` / `danger` / `info` |
| `size`       | `string`  | —          | 按钮大小，可选值：`large` / `small`                                         |
| `plain`      | `boolean` | `false`    | 是否为朴素按钮                                                              |
| `round`      | `boolean` | `false`    | 是否为圆角按钮                                                              |
| `circle`     | `boolean` | `false`    | 是否为圆形按钮                                                              |
| `disabled`   | `boolean` | `false`    | 是否禁用按钮                                                                |
| `nativeType` | `string`  | `'button'` | 原生按钮类型                                                                |
| `autofocus`  | `boolean` | `false`    | 是否自动聚焦                                                                |
| `icon`       | `string`  | —          | 图标类名或 SVG 图标名称                                                     |
| `loading`    | `boolean` | `false`    | 是否显示加载状态                                                            |

### Exposes

| 名称  | 类型                | 描述                     |
| ----- | ------------------- | ------------------------ |
| `ref` | `HTMLButtonElement` | 暴露原生 button 元素引用 |
