---
title: Message
description: 用于显示全局消息提示，支持多种类型和自定义配置。
---

<script setup> 
import { createMessage, closeAll } from '../../src/components/Message/method.ts'
import Button from '../../src/components/Button/Button.vue'
import { h } from 'vue'
</script>

# Message 组件

用于显示全局消息提示，支持多种类型和自定义配置。

## 基础用法

从顶部出现，3 秒后自动消失。 提供 Message 方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<Button type="primary" @click="createMessage({ message: 'hello world' })"> 创建一条消息 </Button>
<Button @click="createMessage({ message: h('b', 'this is bold') })"> 创建支持 VNode 的消息 </Button>

```vue
<Button type="success" @click="createMessage({ message: 'hello world' })"> 创建一条消息 </Button>
<Button @click="createMessage({ message: h('b', 'this is bold') })"> 创建支持 VNode 的消息 </Button>
```

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。设置 type 字段可以定义不同的状态，默认为info。

<Button @click="createMessage({ message: 'hello world', type: 'success' })"> Success </Button>
<Button @click="createMessage({ message: 'hello world', type: 'info' })"> Info </Button>
<Button @click="createMessage({ message: 'hello world', type: 'warning' })"> warning </Button>
<Button @click="createMessage({ message: 'hello world', type: 'danger' })"> Danger </Button>

```vue
<Button @click="createMessage({ message: 'hello world', type: 'success' })"> Success </Button>
<Button @click="createMessage({ message: 'hello world', type: 'info' })"> Info </Button>
<Button @click="createMessage({ message: 'hello world', type: 'warning' })"> warning </Button>
<Button @click="createMessage({ message: 'hello world', type: 'danger' })"> Danger </Button>
```

## 可关闭的消息提示

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true ，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

<Button @click="createMessage({ message: 'hello world', showClose: true, duration: 0 })"> 可关闭消息 </Button>

```vue
<Button
  @click="createMessage({ message: 'hello world', showClose: true, duration: 0 })"
> 可关闭消息 </Button>
```

## 手动关闭所有实例

可以调用 message 模块提供了一个 closeAll() 手动关闭所有实例。

<Button @click="() => {
createMessage({ message: 'hello world1', duration: 0 })
createMessage({ message: 'hello world2', duration: 0 })
createMessage({ message: 'hello world3', duration: 0 })
}"> 创建三条消息 </Button>
<Button @click="() => {
closeAll()
}"> 全部关闭 </Button>

```vue
<script setup>
import { createMessage, closeAll } from '@hasonocell/mercury-design'
import Button from '@hasonocell/mercury-design'
const open = () => {
  createMessage({ message: 'hello world1', duration: 0 })
  createMessage({ message: 'hello world2', duration: 0 })
  createMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
  closeAll()
}
</script>
<template>
  <Button @click="open"> 创建三条消息 </Button>
  <Button @click="close"> 全部关闭 </Button>
</template>
```

## API ### Message 配置项 | 参数名 | 说明 | 类型 | 默认值 | | ----------- |

--------------------------------- | ---------------------------------------------- | ------- | |
`message` | 消息文字 | `'string' \| 'vNode'` | - | | `type` | 消息类型 | `'success' \| 'warning' \|
'info' \| 'danger'` | `info` | | `showClose` | 是否显示关闭按钮 | `boolean` | `false` | | `duration`
| 显示时间（毫秒），0表示不自动关闭 | `number` | `3000` | --- ### Message 方法（实例方法） | 方法名
| 说明 | 类型 | | ------- | ------------------ | ------------ | | `close` | 关闭当前的 Message | `()
=> void` | --- ### 全局方法 | 方法名 | 说明 | 类型 | | ---------- | ---------------------- |
------------ | | `closeAll` | 关闭当前所有的 Message | `() => void` |

```

```
