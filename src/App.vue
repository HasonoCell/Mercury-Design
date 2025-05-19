<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import Switch from './components/Switch/Switch.vue'

const test = ref(false)
</script>

<template>
  <div style="padding: 20px" class="Button">
    <!-- 基础按钮 -->
    <Button>默认按钮</Button>

    <!-- 不同类型按钮 -->
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>

    <!-- 不同尺寸按钮 -->
    <Button size="large">大号按钮</Button>
    <Button size="small">小号按钮</Button>

    <!-- 其他样式按钮 -->
    <Button type="primary" icon="star">图标按钮</Button>
    <Button round>圆角按钮</Button>
    <!-- 禁用状态 -->
    <Button disabled>禁用按钮</Button>

    <!-- 加载状态 -->
    <Button loading>加载中</Button>

    <!-- 提交类型的按钮 -->
    <Button :nativeType="'submit'">提交</Button>
  </div>

  <div style="padding: 20px" class="Switch">
    <Switch v-model="test" activeText="ON" inactiveText="OFF" />
  </div>
</template>
