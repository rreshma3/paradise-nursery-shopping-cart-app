// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//     base: "/paradise-nursery-shopping-cart-app",
//     plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/paradise-nursery-shopping-cart-app/',
//   plugins: [react()],
// })
// vite.config.js
export default defineConfig({
  base: '/',  // <-- default
  plugins: [react()],
})
