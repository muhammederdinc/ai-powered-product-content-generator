<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDarkMode, themeMode, setThemeMode } = useDarkMode()

const changeTheme = (mode: 'light' | 'dark' | 'auto') => {
  setThemeMode(mode)
}

const cards = ref([
  {
    title: 'Kolay İçerik Üretimi',
    description: 'Yapay zeka ile ürün içeriklerinizi saniyeler içinde oluşturun.',
    icon: '⚡️',
  },
  {
    title: 'SEO Dostu',
    description:
      'Otomatik olarak SEO dostu içerik üretme özelliği ile arama motorlarında daha iyi sıralamalara ulaşın.',
    icon: '🔍',
  },
  {
    title: 'Özelleştirilebilir',
    description: 'Üretilen içerikleri marka tonunuza ve hedef kitlenize göre özelleştirin.',
    icon: '🎨',
  },
  {
    title: 'Çoklu Dil Desteği',
    description: 'Birden fazla dilde içerik üreterek global pazara açılın.',
    icon: '🌐',
  },
])
</script>

<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        AI-Powered Product Content Generator
      </h1>
      <p class="text-xl text-gray-700 dark:text-gray-300">
        Ürün içeriklerinizi saniyeler içinde oluşturun
      </p>

      <div class="mt-8 flex justify-center space-x-4">
        <button
          @click="changeTheme('light')"
          class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 transition-colors"
          :class="{ 'bg-blue-100 text-blue-800 border-blue-300': themeMode === 'light' }"
        >
          Light Mode
        </button>
        <button
          @click="changeTheme('dark')"
          class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 transition-colors"
          :class="{ 'bg-gray-700 text-gray-100 border-gray-600': themeMode === 'dark' }"
        >
          Dark Mode
        </button>
        <button
          @click="changeTheme('auto')"
          class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 transition-colors"
          :class="{
            'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700':
              themeMode === 'auto',
          }"
        >
          Auto Mode
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors hover:shadow-lg"
      >
        <div class="text-4xl mb-4">{{ card.icon }}</div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ card.title }}</h3>
        <p class="text-gray-700 dark:text-gray-300">{{ card.description }}</p>
      </div>
    </div>

    <div
      class="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Tema Modunuz: {{ themeMode }}
      </h2>
      <p class="text-gray-700 dark:text-gray-300">
        Şu anki görünüm:
        <span
          class="font-medium"
          :class="{ 'text-yellow-600': isDarkMode, 'text-blue-600': !isDarkMode }"
        >
          {{ isDarkMode ? 'Karanlık Mod' : 'Aydınlık Mod' }}
        </span>
      </p>
    </div>
  </div>
</template>
