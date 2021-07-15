const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	fontFamily:{
		sans:["Cascadia Code Web","Menlo", "Monaco", "Consolas", "Courier New"],
	},

};

module.exports = config;
