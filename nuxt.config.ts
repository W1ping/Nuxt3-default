// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/eslint-module'
  ]
})
