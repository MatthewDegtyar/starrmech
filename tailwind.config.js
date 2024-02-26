/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'condensed': ['Roboto Condensed', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      colors: {
        'cusBlue': '#0092cd',
        'white': '#fff',
      },
      backgroundImage: {
        'bg1': "url('/img/starrbg1.png')",
        'bg2': "url('/img/starrbg2.png')",
        'bg3': "url('/img/ducts2.png')",
        'bg4': "url('/img/careers1.png')",
        'bg5': "url('/img/ac1.png')",
        'bg6': "url('/img/weld1.png')",
        'bg7': "url('/img/roof2.png')",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css

  plugins: [],
};
