<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

defineOptions({
  name: 'ImageCard',
})

interface Props {
  src: string
  alt: string
  index: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'download', src: string, fileName: string): void
  (e: 'preview', src: string, alt: string): void
}>()

const isHovered = ref(false)

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const handleDownload = (e: Event) => {
  e.stopPropagation()
  const fileName = `urun-foto-${props.index + 1}.jpg`
  emit('download', props.src, fileName)
}

const handleClick = () => {
  emit('preview', props.src, props.alt)
}
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-slate-800 cursor-pointer h-full"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <div class="w-full h-full">
      <img
        :src="src"
        :alt="alt"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="{ 'scale-105': isHovered }"
      />
    </div>
    <div
      class="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-100': isHovered }"
    />

    <button
      @click="handleDownload"
      class="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-700 transition-all transform scale-0 shadow-lg cursor-pointer z-10"
      :class="{ 'scale-100 rotate-0': isHovered, '-rotate-90 opacity-0': !isHovered }"
      title="Fotoğrafı İndir"
    >
      <ArrowDownTrayIcon class="w-5 h-5 text-gray-900 dark:text-white" />
    </button>
  </div>
</template>

<style scoped>
.transform {
  transition: all 0.3s ease;
}
</style>
