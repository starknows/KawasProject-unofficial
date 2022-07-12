// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		appDir: 'app',
		prerender: {
			default: true
		},
		paths: {
			assets: '',
			base: process.env.NODE_ENV === 'production' ? '/KawasProject-unofficial' : ''
		}
	},
	preprocess: sveltePreprocess()
};

export default config;
