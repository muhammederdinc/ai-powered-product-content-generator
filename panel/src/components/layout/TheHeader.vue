<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { useDarkMode } from '../../composables/useDarkMode'

const isMenuOpen = ref(false)
const profileMenuOpen = ref(false)
const { isDarkMode, toggleDarkMode } = useDarkMode()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleProfileMenu = () => {
  profileMenuOpen.value = !profileMenuOpen.value
}
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Mobil menü button -->
          <div class="flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              @click="toggleMenu"
              aria-expanded="false"
            >
              <span class="sr-only">Ana menüyü aç</span>
              <Bars3Icon v-if="!isMenuOpen" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <!-- Logo ve masaüstü navigation -->
          <nav class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              class="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
            >
              Ana Sayfa
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
            >
              Ürünler
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
            >
              İçerikler
            </a>
          </nav>
        </div>

        <!-- Profil ve dark mode -->
        <div class="flex items-center">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="ml-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            :class="{ 'bg-indigo-100 dark:bg-indigo-900/30': isDarkMode }"
          >
            <span class="sr-only">Görünüm modunu değiştir</span>
            <SunIcon v-if="isDarkMode" class="h-6 w-6 text-yellow-500" aria-hidden="true" />
            <MoonIcon v-else class="h-6 w-6 text-indigo-600" aria-hidden="true" />
          </button>

          <!-- Profil dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                @click="toggleProfileMenu"
                class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Kullanıcı menüsünü aç</span>
                <UserCircleIcon
                  class="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              v-if="profileMenuOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all transform"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                role="menuitem"
                >Profilim</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                role="menuitem"
                >Ayarlar</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                role="menuitem"
                >Çıkış</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobil menu -->
    <div v-if="isMenuOpen" class="sm:hidden transition-all">
      <div class="pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
        >
          Ana Sayfa
        </a>
        <a
          href="#"
          class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
        >
          Ürünler
        </a>
        <a
          href="#"
          class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
        >
          İçerikler
        </a>
      </div>
    </div>
  </header>
</template>
