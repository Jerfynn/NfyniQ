import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site uses hash routing (#home, #downloads…), so a relative base ('./')
// works everywhere: https://jerfynn.github.io/NfyniQ/ today, and a custom domain
// such as https://www.nfyniq.com/ later — no change needed when you switch.
const base = process.env.BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
})
