// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#60a5fa",      
          "secondary": "#2dd4bf",
          "accent": "#ef4444",
          "neutral": "#d1d5db",
          "base-100": "#ffffff",
          "info": "#a3e635",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#f43f5e",
        },
      },
    ],
  },
  devServer: {
    port: 5102
  },
})