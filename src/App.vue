<script setup lang="ts">
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <div class="basic block">
    <Alert type="success" effect="light">this is the alert</Alert>
    <Alert type="warning" effect="light">this is the alert</Alert>
    <Alert type="success" effect="dark">this is the alert</Alert>
    <Alert type="warning" effect="dark">this is the alert</Alert>
  </div>
</template>
