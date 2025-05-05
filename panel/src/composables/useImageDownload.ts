import { ref } from 'vue'

export const useImageDownload = () => {
  const isDownloading = ref(false)

  const downloadImage = async (imageUrl: string, fileName: string) => {
    isDownloading.value = true

    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()

      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
    } catch (error) {
      console.error('Fotoğraf indirme hatası:', error)
    } finally {
      isDownloading.value = false
    }
  }

  const downloadMultipleImages = async (images: { url: string; fileName: string }[]) => {
    isDownloading.value = true

    try {
      for (const image of images) {
        await downloadImage(image.url, image.fileName)
      }
    } catch (error) {
      console.error('Toplu fotoğraf indirme hatası:', error)
    } finally {
      isDownloading.value = false
    }
  }

  return {
    isDownloading,
    downloadImage,
    downloadMultipleImages,
  }
}
