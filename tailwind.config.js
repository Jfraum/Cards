/** @type {import('tailwindcss').Config} */




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'Roboto': ['Roboto' , 'sans-serif'],
    },
    extend: {
      colors:{
        myColor: '#1e1e1e',
      },
      aspectRatio: {
        '4/3': '4 / 3',
    },
  },
  plugins: [],
  }
}
