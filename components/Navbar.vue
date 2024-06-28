<template>
  <div class="navbar bg-[#607486] m-auto">
    <div class="flex items-center justify-between">
      <div class="flex gap-4 font-bold">
        <NuxtLink
            to="/"
            class="nav-link"
            :class="{ 'active': $route.path === '/' }"
        >
          {{ t('home') }}
        </NuxtLink>
        <NuxtLink
            to="/services"
            class="nav-link"
            :class="{ 'active': $route.path === '/services' }"
        >
          {{ t('services') }}
        </NuxtLink>
        <NuxtLink
            to="/contact"
            class="nav-link"
            :class="{ 'active': $route.path === '/contact' }"
        >
          {{ t('contactUs') }}
        </NuxtLink>
      </div>
      <div class="ml-auto mr-4">
        <Dropdown/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>


.nav-link {
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #21262c;
  outline: none;
}

.active {
  color: #2f81f7; /* Blue color for active tab */
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2f81f7; /* Blue underline for active tab */
}
</style>
