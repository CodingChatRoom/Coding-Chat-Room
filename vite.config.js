import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '6e71-2404-3100-1c2b-f58a-9c9a-bcf6-e4c5-3469.ngrok-free.app'
    ]
  }
})
