import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {
            'NODE_ENV': "production"
        }
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'fuckWechat',
            fileName: (format) => `fuckWechat.${format}.js`
        }
    }
})
