// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// all options are optional; these values are the defaults
	projectRoot: './',
	public: './public/',
	dist: './dist/',
	src: './src/',
	pages: './src/pages/',
	vite: {},
	buildOptions: {
		site: 'https://www.viorelmocanu.ro/',
		sitemap: true,
		pageUrlFormat: 'directory',
		drafts: false,
	},
	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				// Pick a syntax highlighter. 
				// Can be 'prism' (default), 'shiki' or false to disable any highlighting.
				syntaxHighlight: 'prism',
				// If you are using shiki, here you can define a global theme and
				// add custom languages.
				shikiConfig: {
					theme: 'github-dark',
					langs: [],
					wrap: false,
				},
			},
		],
	},
});
