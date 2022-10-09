import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';
import * as buffer from 'buffer';
import GlobalPolyFill, { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			strict: false
		}
	},
	define: {
		'process.env': {},
		global: 'globalThis'
	},
	resolve: {
		alias: {
			'@peerpiper/iframe-wallet-sdk': path.resolve('src/lib'),
			process: 'process/browser',
			util: 'util',
			stream: 'stream-browserify',
			assert: 'assert',
			crypto: 'crypto-browserify',
			Buffer: buffer.Buffer
		},
		mainFields: ['browser', 'module', 'main']
	},
	// workaround for common-js issues of default export
	// https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
	build: {
		commonjsOptions: {
			include: [/immortal-db/, /node_modules/, /arbundles/] // needed to dev with js.cookie.js
		},
		// minify: false,
		sourcemap: true,
		optimization: {
			// minimize: false
		}
	},
	optimization: {
		minimize: false
	},
	optimizeDeps: {
		include: ['immortal-db', 'arbundles'], // needed to dev with js.cookie.js
		esbuildOptions: {
			define: {
				global: 'globalThis',
				'globalThis.process.env.NODE_ENV': 'production'
			},
			plugins: [
				NodeGlobalsPolyfillPlugin({
					process: true,
					buffer: true
				})
			]
		}
		// exclude: ['arbundles']
	}
};

export default config;
