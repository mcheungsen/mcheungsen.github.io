module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				delius: ['Delius Swash Caps', 'cursive'],
			  },
			animation: {
				fade: 'fadeIn 2s ease-in-out',
				'infinite-scroll': 'infinite-scroll 30s linear infinite',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
			colors: {
				'toast': {
					'50': '#f8f5f2',
					'100': '#eae2db',
					'200': '#d4c2b3',
					'300': '#bda28c',
					'400': '#ae8971',
					'500': '#a47764',
					'600': '#8d5e52',
					'700': '#774b46',
					'800': '#633e3d',
					'900': '#523535',
					'950': '#2d1b1b',
				},
				'kabul': {
					'50': '#f5f4f1',
					'100': '#e6e2db',
					'200': '#cfc6b9',
					'300': '#b3a591',
					'400': '#9d8972',
					'500': '#8f7863',
					'600': '#7a6454',
					'700': '#634f45',
					'800': '#56453f',
					'900': '#4b3c38',
					'950': '#2a201e',
				},
				'just-right': {
					'50': '#fbf7f5',
					'100': '#f7eee9',
					'200': '#f0e0d8',
					'300': '#e4c7b8',
					'400': '#d5aa94',
					'500': '#c38c70',
					'600': '#ad7355',
					'700': '#905f45',
					'800': '#78503c',
					'900': '#664636',
					'950': '#362319',
				},
				'sandrift': {
					'50': '#f7f5f3',
					'100': '#e8e2dd',
					'200': '#cfc2b8',
					'300': '#b6a293',
					'400': '#a28777',
					'500': '#977669',
					'600': '#84635b',
					'700': '#6f504e',
					'800': '#5d4443',
					'900': '#4e3a39',
					'950': '#2a1e1e',
				},





			},
		},
	},
	plugins: [],
};
