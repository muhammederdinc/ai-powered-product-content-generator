<script setup lang="ts">
import { ref } from 'vue'
import { ClipboardIcon, CheckIcon } from '@heroicons/vue/24/outline'

defineOptions({
  name: 'CopyButton',
})

interface Props {
  text: string
  label?: string
  iconSize?: number
  successDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Kopyala',
  iconSize: 4,
  successDuration: 2000,
})

const emit = defineEmits<{
  (e: 'copied', text: string): void
}>()

const isCopied = ref(false)

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(props.text)
    .then(() => {
      isCopied.value = true
      emit('copied', props.text)

      setTimeout(() => {
        isCopied.value = false
      }, props.successDuration)
    })
    .catch((err) => {
      console.error('Kopyalama başarısız oldu:', err)
    })
}
</script>

<template>
  <button
    @click="copyToClipboard"
    class="flex items-center px-3 py-1 rounded-lg text-sm transition-colors"
    :class="
      isCopied
        ? 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-200'
        : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600'
    "
  >
    <transition name="fade" mode="out-in">
      <CheckIcon v-if="isCopied" :class="`w-${iconSize} h-${iconSize} mr-1`" />
      <ClipboardIcon v-else :class="`w-${iconSize} h-${iconSize} mr-1`" />
    </transition>
    {{ isCopied ? 'Kopyalandı' : label }}
  </button>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  transition: all 0.2s ease;
}
</style>
