/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation:{
				"flow-in-bottom-1":"flow-in-bottom-1 1s ease both",
				"flow-in-bottom-2":"flow-in-bottom-2 2s ease both",
			},
			keyframes: {
				"flow-in-bottom-1": {
					"0%": {
						translate: "0px 14px",
						opacity: "0",
					},
					to: {
						translate: "0px 0px",
						opacity: "1",
					},
				},
				"flow-in-bottom-2": {
					"0%": {
						translate: "0px 20px",
						opacity: "0",
					},
					"30%": {
						translate: "0px 20px",
						opacity: "0",
					},
					to: {
						translate: "0px 0px",
						opacity: "1",
					},
				},
				"BG-ANIM": {
					"0%": {
						opacity: "0.65",
					},
					"50%": {
						opacity: "0.8",
					},
					to: {
						opacity: "0.65",
					},
				},
				"BG-ANIM-OUT": {
					"0%": {
						opacity: "0.2",
						scale:"0.5"
					},
					to: {
						opacity: "1",
						scale:"1"
					},
				},
			}
		},
	},
	plugins: [],
}
