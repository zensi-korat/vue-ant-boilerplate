<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { useThemeSwitcher } from '../../context/composables/useThemeSwitcher';

const { themeColor, setThemeColor } = useThemeSwitcher();
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import UserIcon from '../icons/UserIcon.vue';
import InfoIcon from '../icons/InfoIcon.vue';

const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);

const handleThemeChange = (value: string) => {
  setThemeColor(value as 'default' | 'dark');
};
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
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <a-select
          v-model:value="themeColor"
          @change="handleThemeChange"
          style="width: 120px"
        >
          <a-select-option value="default">Light Mode</a-select-option>
          <a-select-option value="dark">Dark Mode</a-select-option>
        </a-select>
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

<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trigger {
  margin-left: 16px;
}
</style>
