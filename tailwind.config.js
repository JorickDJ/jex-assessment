/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
	theme: {
		extend: {
			colors: {
				theme: {
					light: "#ffffff",
					dark: "#2d2d2d"
				},
				jadestone: {
					50: "#def7d2",
					100: "#aff0a9",
					200: "#61e08b",
					300: "#2bcf97",
					400: "#0bbda6",
					500: "#00a9a0",
					600: "#089381",
					700: "#1a7b5a",
					800: "#2a623d",
					900: "#344832",
				},
				furiousFuchsia: {
					50: "#ffdee5",
					100: "#ffbece",
					200: "#ff82a8",
					300: "#ff518e",
					400: "#fe2f7d",
					500: "#ee2170",
					600: "#d42868",
					700: "#b23863",
					800: "#89465a",
					900: "#5c454a",
				},
				pestoCalabrese: {
					50: "#ffe9df",
					100: "#ffd6bf",
					200: "#ffba84",
					300: "#ffaa54",
					400: "#ffa233",
					500: "#f59925",
					600: "#db8b2b",
					700: "#b77a3c",
					800: "#8d6749",
					900: "#5e4f46",
				}
			},
		},
	},
  plugins: [],
}
