/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1141px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif',]
      },
      backgroundImage: {
        'gas': "url('src/assets/unsplash5.png')",
        "supply":"url('src/assets/unsplash6.png')",
        'fuel':"url('src/assets/unsplash_0aJOTBQfEFE.png')",
        'unsplash7':"url('src/assets/unsplash7.png')",
        'unsplash8':"url('src/assets/unsplash8.png')",
        'unsplash9':"url('src/assets/unsplash9.png')",
        'unsplash10':"url('src/assets/unsplash10.png')",
        'map':"url('src/assets/Maps.png')"
      },
    },
    
  },
  plugins: [],
}