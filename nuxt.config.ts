// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'InForum', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/intuitivo-forum-logo.svg' },
      ],
    },
  },
  css: ['./app/assets/css/main.css'],
  vite: {
  plugins: [
    tailwindcss()
  ]
  }
})
