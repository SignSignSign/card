import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite 配置：React 插件 + Tailwind CSS v4
export default defineConfig({
  base: '/card/',
  plugins: [react(), tailwindcss()],
})
