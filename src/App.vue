<script setup lang="ts">
import { ref } from 'vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'

const data = ref([1, 2, 3])
</script>

<template>
  <Collapse :model-value="data" accordion>
    <CollapseItem :name="1">
      <template #title>
        <h1>Hello World!</h1>
      </template>
      <h1>Goodbye World</h1>
    </CollapseItem>

    <CollapseItem title="Hello Vue!" :name="2">
      <h1>Goodbye Vue</h1>
    </CollapseItem>

    <CollapseItem title="Hello React!" :name="3" disabled>
      <h1>Goodbye React</h1>
    </CollapseItem>
  </Collapse>
</template>
