module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      
			animation: {
				fade: 'fadeIn .5s ease-in-out',
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                  }
			},
		},
	},
	plugins: [],
};