

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'vh': '4975px',
      },
      fontFamily: {
        'work-sans': ['Reddit Sans"', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#314584',
        'custom-red': '#ff3946',
        'custom-purple':'#f4fafe',
        'custom-violet':'#314584',
        'custom-pink':'#ff9cfc'
      },
      opacity:{
        'custom':'0.102'
        
      },
      
    },
  },
  plugins: [],
}