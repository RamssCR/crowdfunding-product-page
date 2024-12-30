import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['test/**/*.test.{js,jsx}'],
    coverage: {
      exclude: [
        'src/main.jsx',
        '.eslintrc.cjs',
        'postcss.config.js',
        'tailwind.config.js',
        'vite.config.js',
        'test',
        'dist'
      ]
    }
  }
})
