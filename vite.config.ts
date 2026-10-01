import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        news: 'pages/news.html',
        blog: 'pages/blog.html',
        categories: 'pages/categories.html',
      },
    },
  },
})
