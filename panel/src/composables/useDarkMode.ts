import { ref, onMounted, watch } from 'vue'

type ThemeMode = 'light' | 'dark' | 'auto'

export function useDarkMode() {
  const isDarkMode = ref(false)
  const themeMode = ref<ThemeMode>('auto')

  const toggleDarkMode = () => {
    const newMode = isDarkMode.value ? 'light' : 'dark'
    setThemeMode(newMode)
  }

  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode

    if (mode === 'auto') {
      const prefersColor = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDarkMode.value = prefersColor
      localStorage.removeItem('darkMode')
      localStorage.setItem('themeMode', 'auto')
    } else {
      isDarkMode.value = mode === 'dark'
      localStorage.setItem('darkMode', isDarkMode.value ? 'true' : 'false')
      localStorage.setItem('themeMode', mode)
    }

    updateDarkClass()
  }

  const updateDarkClass = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  onMounted(() => {
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeMode | null
    const savedDarkMode = localStorage.getItem('darkMode')

    if (savedThemeMode) {
      themeMode.value = savedThemeMode
    }

    // Kaydedilen dark mode ayarını kontrol et
    if (savedDarkMode === 'true') {
      isDarkMode.value = true
    } else if (savedDarkMode === 'false') {
      isDarkMode.value = false
    } else {
      // Sistem ayarlarını kontrol et
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    updateDarkClass()
  })

  // Sistem dark mode değişikliklerini dinle
  watch(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    (isDark) => {
      if (themeMode.value === 'auto') {
        isDarkMode.value = isDark
        updateDarkClass()
      }
    },
  )

  return {
    isDarkMode,
    themeMode,
    toggleDarkMode,
    setThemeMode,
  }
}
