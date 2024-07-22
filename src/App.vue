<script setup lang="ts">
// import { componentTokens, globalTokens } from './config/token'
import LayoutView from './components/Layout/LayoutView.vue';
import ThemeProvider from './context/ThemeProvider.vue';
</script>

<template>
  <ThemeProvider>
    <LayoutView />
  </ThemeProvider>
</template>

<style scoped></style>
