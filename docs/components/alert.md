---
title: Alert
description: Alert 组件文档
---

<script setup>
import Alert from '../../src/components/Alert/Alert.vue'
</script>

# Alert 组件

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件提供四种类型，由 `type` 属性指定，为 `success| warning | danger | info` , 默认值为 `info`。

<Alert type="success">this is the alert</Alert>
<Alert type="warning">this is the alert</Alert>
<Alert type="info">this is the alert</Alert>
<Alert type="danger">this is the alert</Alert>

```vue
<Alert type="success">this is the alert</Alert>
<Alert type="warning">this is the alert</Alert>
<Alert type="info">this is the alert</Alert>
<Alert type="danger">this is the alert</Alert>
```

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`，通过设置 `effect` 属性来改变主题，默认为 `light`。

<Alert type="success" effect="light">this is the alert</Alert>
<Alert type="warning" effect="light">this is the alert</Alert>
<Alert type="success" effect="dark">this is the alert</Alert>
<Alert type="warning" effect="dark">this is the alert</Alert>

```vue
<Alert type="success" effect="light">this is the alert</Alert>
<Alert type="warning" effect="light">this is the alert</Alert>
<Alert type="success" effect="dark">this is the alert</Alert>
<Alert type="warning" effect="dark">this is the alert</Alert>
```

## 不可关闭

可以设置 Alert 组件是否为可关闭状态， `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。
<Alert type="success" :closable="false">without close</Alert>

```vue
<Alert type="success" :closable="false">without close</Alert>
```

## API

| Name       | Description  | Type                                           | Default |
| ---------- | ------------ | ---------------------------------------------- | ------- |
| `type`     | Alert 类型   | `enum - 'success'` `'warning' 'danger' 'info'` | —       |
| `effect`   | 主题样式     | `enum - 'light'` \| `'dark'`                   | `light` |
| `closable` | 是否可以关闭 | `boolean`                                      | `false` |
