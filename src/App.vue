<script setup lang="ts">
import { h } from 'vue'
import Message from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
const open = () => {
  Message({ message: 'hello world' })
}
const open2 = () => {
  Message({ message: h('b', 'this is bold') })
}
</script>
<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建一条消息 </Button>
    <Button @click="open2"> 创建支持 VNode 的消息 </Button>
  </div>
</template>
