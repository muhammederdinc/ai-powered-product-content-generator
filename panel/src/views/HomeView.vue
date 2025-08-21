<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isDarkMode, themeMode, setThemeMode } = useDarkMode()

const changeTheme = (mode: 'light' | 'dark' | 'auto') => {
  setThemeMode(mode)
  console.log('TEST 01');

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
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        AI-Powered Product Content Generator
      </h1>
      <div class="max-w-3xl mx-auto">
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Ürün içeriklerinizi saniyeler içinde oluşturun
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Ürün fotoğraflarınızı yükleyin, birkaç bilgi girin ve yapay zeka ürününüz için profesyonel
          çekimler, SEO dostu başlık ve açıklamalar, pazarlama afişleri ve sosyal medya içerikleri
          oluştursun. Küçük ve orta ölçekli e-ticaret işletmeleri için tasarlanmış tamamen otomatik
          içerik çözümü.
        </p>
      </div>

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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

    <!-- Ürün Bilgi Giriş Formu -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12"
    >
      <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ürün İçeriği Oluştur</h2>

      <!-- Fotoğraf Yükleme Alanı -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Ürün Fotoğrafları
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Ürününüzün farklı açılardan en fazla 5 fotoğrafını yükleyin. Fotoğraflarınız ne kadar
          detaylı olursa, üretilen içerikler o kadar kaliteli olacaktır.
        </p>

        <!-- Fotoğraf Önizleme Alanı -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
          <div
            v-for="(url, index) in photoPreviewUrls"
            :key="index"
            class="relative aspect-square rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600"
          >
            <img :src="url" class="w-full h-full object-cover" alt="Ürün fotoğrafı" />
            <button
              @click="removePhoto(index)"
              class="absolute top-1 right-1 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
            >
              <XCircleIcon class="h-5 w-5 text-red-500" />
            </button>
          </div>

          <!-- Fotoğraf Yükleme Butonu -->
          <label
            v-if="photoPreviewUrls.length < 5"
            class="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg aspect-square hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="flex flex-col items-center justify-center p-4">
              <svg
                class="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p class="text-xs text-center text-gray-500 dark:text-gray-400">Fotoğraf Ekle</p>
            </div>
            <input
              type="file"
              accept="image/*"
              class="hidden"
              multiple
              @change="handleFileUpload"
            />
          </label>
        </div>
      </div>

      <!-- Ürün Bilgileri Formu -->
      <div class="space-y-6">
        <div>
          <label
            for="productName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Ürün Adı</label
          >
          <input
            id="productName"
            v-model="productDetails.name"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Örn: Kadın Pamuklu Yazlık Elbise"
          />
        </div>

        <div>
          <label
            for="productCategory"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Ürün Kategorisi</label
          >
          <input
            id="productCategory"
            v-model="productDetails.category"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Örn: Kadın Giyim / Elbise"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Ürün Özellikleri</label
          >
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Ürününüzün önemli özelliklerini ekleyin (malzeme, desen, kullanım alanı vb.) - En fazla
            5 özellik
          </p>

          <div class="space-y-2">
            <div
              v-for="(feature, index) in productDetails.features"
              :key="index"
              class="flex items-center gap-2"
            >
              <input
                v-model="productDetails.features[index]"
                type="text"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Örn: %100 Pamuklu"
              />
              <button
                v-if="productDetails.features.length > 1"
                @click="removeFeature(index)"
                class="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                <XCircleIcon class="h-5 w-5" />
              </button>
            </div>
          </div>

          <button
            v-if="productDetails.features.length < MAX_FEATURES"
            @click="addFeature"
            class="mt-2 inline-flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
          >
            <PlusCircleIcon class="h-4 w-4 mr-1" />
            Özellik Ekle
          </button>
          <p v-else class="mt-2 text-xs text-amber-600 dark:text-amber-400">
            En fazla 5 özellik ekleyebilirsiniz.
          </p>
        </div>

        <div>
          <label
            for="targetAudience"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Hedef Kitle</label
          >
          <input
            id="targetAudience"
            v-model="productDetails.targetAudience"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Örn: 20-35 yaş arası kadınlar, tesettür giyim tercih edenler"
          />
        </div>

        <div class="pt-4">
          <button
            @click="startGeneration"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            :disabled="!productDetails.name || photoPreviewUrls.length === 0"
            :class="{
              'opacity-50 cursor-not-allowed':
                !productDetails.name || photoPreviewUrls.length === 0,
            }"
          >
            İçerik Oluşturmayı Başlat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
