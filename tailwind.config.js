/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {   
    extend: {
      screens: {
        'xs': '475px',
        // => @media (min-width: 475px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      textColor:theme =>({
        'primary':'#fff',
        'scondary':'#ffffffe6',
        'primaryDark':'#000',
        'secondaryDark':'#000000e6',
        
      }),
      backgroundColor: theme => ({
        'primary':'#fff',
        'scondary':'#ffffffe6',
        'primaryDark':'#343232f7',
        'secondaryDark':'#2c2a2a',
        
      })
    },
  },
  plugins: [],
}

