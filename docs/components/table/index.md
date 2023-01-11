# ***表格***

:::demo

```vue

<template>
  <v-table :columns="columns"></v-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const columns = ref([{
  title: "test"
}])
console.log("script")
</script>

```
:::