<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
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

// Ürün fotoğrafları ve bilgileri için state tanımları
const productPhotos = ref<File[]>([])
const photoPreviewUrls = ref<string[]>([])
const productDetails = ref({
  name: '',
  category: '',
  features: [''],
  targetAudience: '',
})

const MAX_FEATURES = 5

// Fotoğraf ekleme fonksiyonu
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    const files = Array.from(input.files)

    // En fazla 5 fotoğraf yüklenebilir
    const totalPhotos = productPhotos.value.length + files.length
    if (totalPhotos > 5) {
      alert('En fazla 5 ürün fotoğrafı yükleyebilirsiniz.')
      return
    }

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        productPhotos.value.push(file)
        const url = URL.createObjectURL(file)
        photoPreviewUrls.value.push(url)
      }
    })
  }
}

// Fotoğraf silme fonksiyonu
const removePhoto = (index: number) => {
  URL.revokeObjectURL(photoPreviewUrls.value[index])
  photoPreviewUrls.value.splice(index, 1)
  productPhotos.value.splice(index, 1)
}

// Ürün özelliği ekleme fonksiyonu
const addFeature = () => {
  if (productDetails.value.features.length < MAX_FEATURES) {
    productDetails.value.features.push('')
  }
}

// Ürün özelliği silme fonksiyonu
const removeFeature = (index: number) => {
  productDetails.value.features.splice(index, 1)
}

// Ürün oluşturma işlemini başlat
const startGeneration = () => {
  // Burada backend API'ye istek gönderilecek
  console.log('Ürün bilgileri:', productDetails.value)
  console.log('Fotoğraf sayısı:', productPhotos.value.length)

  // Mock veriler kullanılarak sonuç sayfasına yönlendirilecek
  router.push('/result')
}
</script>

<template>
  <div>
    <h1>Ürün İçeriği Oluştur</h1>
  </div>
</template>
