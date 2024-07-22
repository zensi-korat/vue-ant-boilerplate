<template>
  <a-config-provider :theme="themeConfig">
    <slot></slot>
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { globalTokens, componentTokens } from '../config/token';
// import { useThemeSwitcher } from '../context/composables/useThemeSwitcher' // Adjust the path as needed

// const { themeColor } = useThemeSwitcher()

const themeConfig = computed(() => ({
  token: globalTokens,
  components: componentTokens,
  cssVar: true,
  hashed: false
}));
</script>
