import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	base: '/scand/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				blocks: resolve(__dirname, 'blocks.html')
			}
		}
	}
})
