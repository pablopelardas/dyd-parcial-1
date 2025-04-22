import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/dyd-parcial-1/',
  build:{
    rollupOptions:{
      input:{
        main: 'index.html',
        sobreMi: 'sobre-mi.html',
        contacto: 'contacto.html',
        dyd: 'dyd.html',
        materias: 'materias.html',
        avisos: 'avisos.html',
      }
    }
  }
})