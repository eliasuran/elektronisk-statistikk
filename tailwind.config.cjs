/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    fontSize: {
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      xxl: "28px",
      xxxl: "32px"
    },
		extend: {}
	},

	plugins: []
};

module.exports = config;
