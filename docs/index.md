# Mercury-Design

A simple UI component library for Vue 3  
仿 Element-Plus 风格的 Vue3 组件库。

## 安装

```bash
npm i @hasonocell/mercury-design
pnpm i @hasonocell/mercury-design
```

## 导入样式文件

```js
// main.js
import '@hasonocell/mercury-design/dist/index.css'
```

## 全局导入

在 main.js 中进行导入并注册，即可全局使用。

```js
import '@hasonocell/mercury-design/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import MercuryDesign from '@hasonocell/mercury-design'

createApp(App).use(MercuryDesign).mount('#app')
```

## 局部导入

在需要使用组件的文件中进行手动导入。

```vue
<script setup lang="ts">
import { createMessage } from '@hasonocell/mercury-design'
import { Button } from '@hasonocell/mercury-design'

const handleClick = () => {
  createMessage({
    type: 'success',
    message: 'Hello World!',
  })
}
</script>

<template>
  <Button @click="handleClick">click here</Button>
</template>
```
