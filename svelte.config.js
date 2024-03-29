import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			runtime: 'edge',

			// an array of dependencies that esbuild should treat
			// as external when bundling functions. this only applies
			// to edge functions, and should only be used to exclude
			// optional dependencies that will not run outside Node
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		}),
		files: {
			lib: './src/lib'
		}
	}
};

export default config;
