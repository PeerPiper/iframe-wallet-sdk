// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),
	package: {
		exports: (filepath) => {
			// return true for mathes on index.js
			return filepath.endsWith('index.js');
		}
	},
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: {
			default: true
		},
		paths: {
			// change below to your repo name
			base: '/iframe-wallet-sdk' //  process.env.NODE_ENV == 'production' ? '/iframe-wallet-sdk' : '' // /dag-jose-kit
		}
	}
};

export default config;
