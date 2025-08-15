<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
import { useDarkMode } from './composables/useDarkMode'

// Tüm uygulama seviyesinde dark mode ayarını başlat
const { isDarkMode } = useDarkMode()
console.log('TEST 1')
console.log('TEST 2')
console.log('TEST 3')
console.log('TEST 4')
console.log('TEST 5')
console.log('TEST 6')
console.log('TEST 7')
console.log('TEST 8')
</script>

<template>
  <div class="min-h-screen transition-colors duration-200 bg-white dark:bg-gray-900">
    <TheHeader />
    <main class="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <RouterView />
    </main>
  </div>
</template>
