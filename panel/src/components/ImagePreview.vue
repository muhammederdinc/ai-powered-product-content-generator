<script setup lang="ts">
import { ref, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineOptions({
  name: 'ImagePreview',
})

interface Props {
  src: string
  alt: string
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const imageRef = ref<HTMLImageElement | null>(null)

const closePreview = () => {
  emit('close')
}

const handleEscKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closePreview()
  }
}

const stopPropagation = (e: Event) => {
  e.stopPropagation()
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscKeydown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscKeydown)
      document.body.style.overflow = ''
    }
  },
  { immediate: true },
)
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        @click="closePreview"
      >
        <div
          class="relative w-[90vw] h-[90vh] bg-black/50 rounded-lg overflow-hidden"
          @click="stopPropagation"
        >
          <button
            @click="closePreview"
            class="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors p-2 bg-black/30 rounded-full z-20"
            aria-label="Kapat"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>
          <div class="w-full h-full">
            <img ref="imageRef" :src="src" :alt="alt" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
