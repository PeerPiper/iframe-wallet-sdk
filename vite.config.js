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
		'process.env': {}
		// global: 'globalThis' // need global for testing
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
		},
		target: ['es2020'] // w3name, bigint issue (vite vitejs Big integer literals are not available) needing modern browsers, see https://github.com/sveltejs/kit/issues/859#issuecomment-1184696144
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
			],
			target: 'es2020' // w3name, bigint issue (vite vitejs Big integer literals are not available) needing modern browsers, see https://github.com/sveltejs/kit/issues/859#issuecomment-1184696144
		}
		// exclude: ['arbundles']
	},
	// @ts-ignore
	test: {
		hookTimeout: 60000,
		testTimeout: 60000
	}
};

export default config;
