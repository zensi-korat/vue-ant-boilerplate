<script setup lang="ts">
import { ref } from 'vue'
import type { SelectProps } from 'ant-design-vue'
const value1 = ref('lucy')

const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe'
  }
])
</script>

<template>
  <main>
    <h2 class="home-heading">This is Home page</h2>

    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      :options="options1"
    ></a-select>
  </main>
</template>
