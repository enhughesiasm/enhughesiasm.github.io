export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	singleQuote: true,
	useTabs: true,
	tailwindStylesheet: './src/assets/styles/base_styles.css',
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
	],
};
