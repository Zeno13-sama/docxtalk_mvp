import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app/',  // Assurez-vous que cela correspond au chemin utilisé dans Nginx
  plugins: [react()],
  server: {
    host: true, // Autorise l'accès externe
    port: 3000, // Assurez-vous que c'est bien le port utilisé
    strictPort: true,
    allowedHosts: ['docxtalks.com'], // Ajoute le domaine autorisé
  }
})
