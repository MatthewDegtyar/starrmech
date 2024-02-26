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
        'bg1': "url('/img/starrbg1.webp')",
        'bg2': "url('/img/starrbg2.webp')",
        'bg3': "url('/img/ducts2.webp')",
        'bg4': "url('/img/careers1.webp')",
        'bg5': "url('/img/ac1.webp')",
        'bg6': "url('/img/weld1.webp')",
        'bg7': "url('/img/roof2.webp')",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css

  plugins: [],
};
