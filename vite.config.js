import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@peerpiper/iframe-wallet-sdk': path.resolve('src/lib')
		}
	},
	// workaround for common-js issues of default export
	// https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
	build: {
		commonjsOptions: {
			include: [/immortal-db/, /node_modules/]
		},
		minify: false,
		sourcemap: true,
		optimization: {
			minimize: false
		}
	},
	optimization: {
		minimize: false
	},
	optimizeDeps: {
		include: ['immortal-db']
	}
};

export default config;
