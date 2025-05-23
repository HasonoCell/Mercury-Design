---
title: Input
description: 允许通过鼠标或键盘输入字符的组件
---

<script setup>
import Input from '../../src/components/Input/Input.vue'
import Button from '../../src/components/Button/Button.vue'
import Icon from '../../src/components/Icon/Icon.vue'
</script>

## 基础文本框

<Input v-model="test" placeholder="基础文本框，请输入" />

```vue
<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <Input v-model="test" placeholder="基础文本框，请输入" />
  <span>{{ test }}</span>
</template>
```

## 禁用文本框

通过 `disabled` 属性指定是否禁用 input 组件

<Input v-model="test" disabled />
```vue
<Input v-model="test" disabled />
```

## 尺寸

使用 `size` 属性改变输入框大小。除了默认大小外还有另外两个选项： `large / small`。

<Input v-model="test" placeholder="大的 Input" size="large" />
<div style="display: inline-flex; width: 20px;" />
<Input v-model="test" placeholder="普通的 Input" />
<div style="display: inline-flex; width: 20px;" />
<Input v-model="test" placeholder="小的 Input" size="small" />

```vue
<Input v-model="test" placeholder="大的 Input" size="large" />
<Input v-model="test" placeholder="普通的 Input" />
<Input v-model="test" placeholder="小的 Input" size="small" />
```

## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 `prepend` 和 `append` 插槽。 要在输入框中添加前后元素，可以使用 `prefix` 和 `suffix` 插槽。

<Input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
</Input>

<Input v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
</Input>

```vue
<Input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
</Input>

<Input v-model="test" placeholder="prefix suffix">
    <template #prefix>
        <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
</Input>
```

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 input 元素转换为原生的 textarea 元素。

<Input v-model="test" placeholder="可以是一个 Textarea" type="textarea" />

```vue
<Input v-model="test" placeholder="可以是一个 Textarea" type="textarea" />
```

## 密码文本框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

<Input v-model="test" placeholder="密码文本框，可以切换" showPassword/>

```vue
<Input v-model="test" placeholder="密码文本框，可以切换" showPassword />
```

## 清空文本框

使用 `clearable` 属性即可得到一个可一键清空的输入框。

<Input v-model="test" clearable placeholder="输入字符以后可以点击清空"/>

```vue
<Input v-model="test" clearable placeholder="输入字符以后可以点击清空" />
```

## API

### 属性

| 属性名                    | 说明                                               | 类型                   | 默认值   |
| ------------------------- | -------------------------------------------------- | ---------------------- | -------- |
| `type`                    | input 原生类型                                     | `string`               | `'text'` |
| `model-value` / `v-model` | 绑定值                                             | `string`               | —        |
| `disabled`                | 是否禁用                                           | `boolean`              | `false`  |
| `placeholder`             | 输入框占位文本                                     | `string`               | —        |
| `size`                    | 输入框尺寸（仅在 `type` 不为 `'textarea'` 时有效） | `'large'` \| `'small'` | —        |
| `show-password`           | 是否显示切换密码图标                               | `boolean`              | `false`  |
| `clearable`               | 是否显示清除按钮                                   | `boolean`              | `false`  |
| `readonly`                | 原生 `readonly` 属性（是否只读）                   | `boolean`              | `false`  |
| `autofocus`               | 原生属性，自动获取焦点                             | `boolean`              | `false`  |
| `autocomplete`            | 原生 `autocomplete` 属性                           | `string`               | `'off'`  |

### 事件

| 事件名   | 说明                           | 类型                      |
| -------- | ------------------------------ | ------------------------- |
| `blur`   | 输入框失去焦点时触发           | `(e: FocusEvent) => void` |
| `focus`  | 输入框获得焦点时触发           | `(e: FocusEvent) => void` |
| `change` | 输入框失去焦点时触发（值变化） | `(e: string) => void`     |
| `input`  | 输入框输入时触发               | `(e: string) => void`     |
| `clear`  | 点击清空按钮时触发             | `() => void`              |

### 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `prefix`  | 输入框头部内容 |
| `suffix`  | 输入框尾部内容 |
| `prepend` | 输入框前置内容 |
| `append`  | 输入框后置内容 |

### Exposes

| 名称  | 说明                               | 类型                                           |
| ----- | ---------------------------------- | ---------------------------------------------- |
| `ref` | HTML 元素（`input` 或 `textarea`） | `Ref<HTMLInputElement \| HTMLTextAreaElement>` |
