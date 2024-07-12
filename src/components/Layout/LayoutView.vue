<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeSwitcher } from '../../context/composables/useThemeSwitcher' // Adjust the path as needed

const { themeColor, toggleTheme } = useThemeSwitcher()
import { MenuFoldOutlined, MenuUnfoldOutlined, VideoCameraOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import UserIcon from '../icons/UserIcon.vue'
import InfoIcon from '../icons/InfoIcon.vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="nav-wrapper">
        <img src="/public/Images/logo.svg" alt="logo" width="161" height="30" />
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <a-button @click="toggleTheme">
          {{ themeColor === 'dark' ? 'Light Mode' : 'Dark Mode' }}
        </a-button>
      </div>
    </a-layout-header>

    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <UserIcon />
            <span> <RouterLink to="/">Home</RouterLink></span>
          </a-menu-item>
          <a-menu-item key="2">
            <InfoIcon />
            <span> <RouterLink to="/about">About</RouterLink></span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
