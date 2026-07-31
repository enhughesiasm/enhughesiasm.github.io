import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['dist/', '.astro/', 'src/data/blog/'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['**/*.{ts,tsx,astro}'],
		rules: {
			'no-undef': 'off',
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			...reactHooks.configs.flat.recommended.rules,
			// These client-only components intentionally populate random content after hydration.
			'react-hooks/set-state-in-effect': 'off',
		},
	},
	{
		files: ['tailwind.config.cjs'],
		languageOptions: {
			sourceType: 'commonjs',
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
