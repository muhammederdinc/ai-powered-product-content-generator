<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowPathIcon, ArrowDownTrayIcon, ShareIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

// Mock veriler
const generatedData = ref({
  productName: 'Beyaz Pamuklu Midi Tişört Elbise',
  description:
    'Bu rahat beyaz pamuklu midi tişört elbise, kapalı giyime uygun şekilde tasarlanmıştır. Uzun tasarımı, 20-40 yaş arası kadınlar için ideal olup, konforlu bir günlük stil sunar.\n\nYüksek kaliteli %100 organik pamuktan üretilen bu elbise, nefes alan yapısı sayesinde yaz aylarında serin, ilkbahar ve sonbahar aylarında ise şık bir görünüm sağlar. A kesim modeli ile vücut hatlarını nazikçe saran tasarımı, her vücut tipine uyum sağlar.\n\nYan cepleri ve ayarlanabilir bel kısmı ile günlük kullanım için fonksiyonel bir seçenektir. Kolay yıkama özelliği ve ütü gerektirmeyen kumaşı sayesinde bakımı oldukça kolaydır.\n\nMakinede 30 derecede yıkanabilir, asarak kurutulması önerilir. Seyahatlerinizde de kolayca bavulunuzda taşıyabileceğiniz bu elbise, kırışma yapmayan özelliği ile her zaman şık görünmenizi sağlar.',
  photos: [
    'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1678520401057-7d32aee54eba?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1553984658-d17e19aa281a?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1536129808005-fae894214c73?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  socialMedia: {
    instagram: {
      post: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop',
      story:
        'https://images.unsplash.com/photo-1553984658-d17e19aa281a?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
})

// Yeniden oluşturma fonksiyonu
const regenerateContent = () => {
  console.log('İçerik yeniden oluşturuluyor...')
  // Gerçek uygulamada API isteği oluşturulacak
  // Şimdilik sayfayı yenileyelim
  setTimeout(() => {
    alert('İçerik yeniden oluşturuldu')
  }, 1500)
}

// İndirme fonksiyonu
const downloadContent = (type: 'photos' | 'instagram') => {
  console.log(`${type} indiriliyor...`)
  // Gerçek uygulamada indirme işlemi yapılacak
  alert(`${type} indirildi`)
}

// Paylaşım fonksiyonu
const shareContent = () => {
  console.log('İçerik paylaşılıyor...')
  // Gerçek uygulamada paylaşım işlemi yapılacak
  alert('Instagram ile paylaşıldı')
}

// Ana sayfaya dönüş fonksiyonu
const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="pb-16 result-page-transition bg-slate-950 text-white">
    <!-- Navigasyon -->
    <nav class="flex items-center justify-between mb-6 px-4 py-3">
      <button
        @click="goToHome"
        class="flex items-center px-4 py-2 text-gray-300 hover:text-indigo-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Ana Sayfaya Dön
      </button>
    </nav>

    <!-- Ana Başlık -->
    <h1 class="text-3xl font-bold mb-8 text-center text-white">
      AI Tarafından Oluşturulan İçerikler
    </h1>

    <!-- Fotoğraf Galerisi -->
    <div class="bg-slate-900 rounded-xl p-6 mb-10 mx-4">
      <h2 class="text-2xl font-bold mb-4 text-white">Ürün Fotoğrafları</h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(photo, index) in generatedData.photos"
          :key="index"
          class="image-card bg-slate-800"
        >
          <img
            :src="photo"
            :alt="`${generatedData.productName} - Görsel ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <button
          @click="downloadContent('photos')"
          class="flex items-center px-4 py-2 bg-slate-800 rounded-lg text-gray-200 hover:bg-slate-700 transition-colors mr-2"
        >
          <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
          Fotoğrafları İndir
        </button>
      </div>
    </div>

    <!-- Ürün Başlığı ve Açıklaması -->
    <div class="bg-slate-900 rounded-xl p-6 mb-10 shadow-md mx-4">
      <h2 class="text-2xl font-bold mb-4 text-white">Ürün Metinleri</h2>

      <div class="border-l-4 border-indigo-500 pl-4 py-3 mt-4">
        <h3 class="text-xl font-bold text-white mb-2">
          {{ generatedData.productName }}
        </h3>

        <div class="text-gray-300 whitespace-pre-line">
          {{ generatedData.description }}
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <button
          class="flex items-center px-4 py-2 bg-slate-800 rounded-lg text-gray-200 hover:bg-slate-700 transition-colors"
        >
          <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
          Metinleri Kopyala
        </button>
      </div>
    </div>

    <!-- Instagram İçerikleri -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 mb-10 mx-4">
      <h2 class="text-2xl font-bold mb-6 text-white flex items-center">
        <span class="mr-2">Instagram İçerikleri</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Post -->
        <div
          class="instagram-card bg-slate-900 text-white overflow-hidden rounded-lg h-full flex flex-col"
        >
          <div
            class="instagram-header bg-slate-900 p-3 flex items-center border-b border-slate-700"
          >
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 mr-2 flex items-center justify-center"
            >
              <div class="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="https://ui-avatars.com/api/?name=SH&background=0D1117&color=fff"
                  alt="Mağaza profil"
                  class="w-6 h-6 rounded-full"
                />
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold">moda_butigim</p>
              <p class="text-xs text-gray-400">Sponsored</p>
            </div>
            <button class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>

          <div
            class="flex-grow relative overflow-hidden bg-slate-800 flex items-center justify-center"
          >
            <img
              :src="generatedData.socialMedia.instagram.post"
              :alt="`${generatedData.productName} - Instagram Post`"
              class="w-full h-auto object-contain"
            />
          </div>

          <div class="bg-slate-900 p-3">
            <div class="flex justify-between mb-2">
              <div class="flex space-x-4">
                <button class="focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button class="focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
                <button class="focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>

            <p class="text-sm font-medium mb-1">128 beğenme</p>
            <p class="text-sm">
              <span class="font-semibold">moda_butigim</span> Yeni sezon
              {{ generatedData.productName.toLowerCase() }} şimdi satışta! %100 pamuklu, konforlu
              bir günlük stil... <span class="text-gray-400">daha fazla</span>
            </p>
            <p class="text-gray-400 text-xs mt-1">47 dakika önce</p>
          </div>

          <div class="px-4 py-2 flex justify-end space-x-2 border-t border-slate-700">
            <button
              @click="downloadContent('instagram')"
              class="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              title="İndir"
            >
              <ArrowDownTrayIcon class="w-5 h-5 text-white" />
            </button>
            <button
              @click="shareContent"
              class="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              title="Paylaş"
            >
              <ShareIcon class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <!-- Story -->
        <div
          class="instagram-card bg-slate-900 text-white overflow-hidden rounded-lg h-full flex flex-col"
        >
          <div
            class="instagram-header bg-slate-900 p-3 flex items-center border-b border-slate-700"
          >
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center"
            >
              <div class="w-7 h-7 rounded-full overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=SH&background=0D1117&color=fff"
                  alt="Mağaza profil"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1 ml-2">
              <p class="text-sm font-semibold">moda_butigim</p>
              <p class="text-xs text-gray-400">15d</p>
            </div>
            <button class="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>

          <div class="flex-grow aspect-[9/16] overflow-hidden relative bg-slate-800">
            <img
              :src="generatedData.socialMedia.instagram.story"
              :alt="`${generatedData.productName} - Instagram Story`"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-0 left-0 right-0 h-1 bg-slate-900 p-0.5">
              <div class="flex w-full space-x-1">
                <div class="h-0.5 bg-white flex-1"></div>
                <div class="h-0.5 bg-white/30 flex-1"></div>
                <div class="h-0.5 bg-white/30 flex-1"></div>
              </div>
            </div>

            <div class="absolute bottom-4 left-0 right-0 px-4 flex">
              <input
                type="text"
                placeholder="Yanıtla..."
                class="bg-slate-900/40 border border-slate-600/40 text-white rounded-full text-sm py-2 px-4 flex-1 backdrop-blur-sm"
              />
              <button class="ml-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="px-4 py-2 flex justify-end space-x-2 border-t border-slate-700">
            <button
              @click="downloadContent('instagram')"
              class="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              title="İndir"
            >
              <ArrowDownTrayIcon class="w-5 h-5 text-white" />
            </button>
            <button
              @click="shareContent"
              class="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              title="Paylaş"
            >
              <ShareIcon class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Yeniden Oluştur Butonu -->
    <div class="fixed bottom-6 left-1/2 transform -translate-x-1/2">
      <button @click="regenerateContent" class="btn-floating">
        <ArrowPathIcon class="w-5 h-5 mr-2" />
        Yeniden Oluştur
      </button>
    </div>
  </div>
</template>
