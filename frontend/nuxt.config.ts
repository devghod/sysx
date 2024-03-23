import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
require('dotenv').config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: process.env.DEV_BASE_URL,
      apiBaseUrl: process.env.DEV_API_URL
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  // buildModules: [
  //   "@nuxtjs/vuetify",
  // ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  devServer: {
    port: 5102
  },
  image: {
    dir: 'assets/images',
  },
})