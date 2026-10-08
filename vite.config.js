import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Serve from '/' during dev so localhost:5173 loads cleanly.
// When deploying to GitHub Pages (https://jerfynn.github.io/NfyniQ/), BASE_PATH is set to '/NfyniQ/'.
// If using custom domain (www.nfyniq.com), BASE_PATH is '/'.
const base = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/NfyniQ/' : '/')

export default defineConfig({
  base,
  plugins: [react()],
})

