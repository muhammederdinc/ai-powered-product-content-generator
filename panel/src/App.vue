<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
import { useDarkMode } from './composables/useDarkMode'

// Tüm uygulama seviyesinde dark mode ayarını başlat
const { isDarkMode } = useDarkMode()
console.log('TEST')
console.log('TEST 2')
</script>

<template>
  <div class="min-h-screen transition-colors duration-200 bg-white dark:bg-gray-900">
    <TheHeader />
    <main class="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <RouterView />
    </main>
  </div>
</template>
