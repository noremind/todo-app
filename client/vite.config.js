import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		proxy: {
			// '/api/todos': 'http://localhost:5000/',
			// '/api/status': 'http://localhost:5000/',
			'/api': {
				target: 'http://localhost:5000/',
				rewrite: (path) => path.replace(/^\//, '')
			},
			'/db': {
				target: 'http://localhost:3333/',
				rewrite: (path) => path.replace(/^\/db/, '')
			},
		}
	}
})
