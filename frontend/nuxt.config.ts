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
  modules: [
    "nuxt-security",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
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
      "light",
      "dark",
      "cupcake",
      "emerald",
      "nord",
      "pastel",
      "night"
    ],
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  devServer: {
    port: 5102
  },
  image: {
    dir: 'assets/images',
  },
})