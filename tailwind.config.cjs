/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', 'sans-serif'],
				serif: ['Besley', 'Georgia', 'serif'],
				code: ['VT323', 'Courier New', 'Courier', 'monospace'],
			},
			animation: {
				'ping-once': 'ping 1s ease-in-out 1',
				'bounce-once': 'bounce-gentle .5s ease-in-out 1',
				'text-bounce-once': 'text-bounce .5s ease-in-out 1',
				'heartbeat-fast': 'heartbeat 1s infinite',
				'heartbeat-slow': 'heartbeat 3s infinite',
				'cursor-blink':
					'blink 0.7s cubic-bezier(0.5, 0, 1, 1) infinite alternate ',
			},
			keyframes: {
				blink: {
					'0%': {
						opacity: 0,
					},
				},
				'bounce-gentle': {
					'0%': { transform: 'scale(1,1) translateY(0)' },
					'10%': { transform: 'scale(1.05,.95) translateY(0)' },
					'30%': {
						transform: ' scale(.95,1.05)   translateY(-8px)',
					},
					'50%': { transform: ' scale(1.025,.975) translateY(0)' },
					'57%': { transform: ' scale(1,1)      translateY(-1px)' },
					'64%': { transform: ' scale(1,1)      translateY(0)' },
					'100%': { transform: 'scale(1,1)      translateY(0)' },
				},
				'text-bounce': {
					'0%': {
						transform: 'scale(1,1) translateY(0)',
					},
					'10%': {
						transform: 'scale(1.05,1) translateY(0)',
					},
					'30%': {
						transform: ' scale(1,1.05)   translateY(3px)',
					},
					'50%': {
						transform: ' scale(1.05,1) translateY(0)',
					},
					'57%': {
						transform: ' scale(1,1)      translateY(1px)',
					},
					'64%': {
						transform: ' scale(1,1)      translateY(0)',
					},
					'100%': {
						transform: 'scale(1,1)      translateY(0)',
					},
				},
				heartbeat: {
					'0%': {
						transform: 'scale(1)',
					},
					'14%': {
						transform: 'scale(1.25)',
					},
					'28%': {
						transform: 'scale(1)',
					},
					'42%': {
						transform: 'scale(1.25)',
					},
					'70%': {
						transform: 'scale(1)',
					},
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-opentype'),
		require('@tailwindcss/typography'),
	],
};
