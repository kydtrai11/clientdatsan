/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "blue-bold": "#18458b",
        "yellow": "#f9b90f",
        "hover-yellow": "#3aaced",
        "blue-text": '#5f80a8',
        "blue-backText": '#ecf2fa',
        "text-default": '#7b8084',
        "backGroundText": "linear-gradient(to top,var(#3d80d0),var(rgba(61, 128, 208, 0)))",
        "followStory": "linear-gradient(90deg,_#3d80d0,_#8bb3e3)",
        "hoverChapter": "linear-gradient(90deg, _#3d80d0, _#8bb3e3)",

        "dark": "#242527",
        "dark-2": "#3a3b3c",
        "darkBtn": "#8596a7",
        "text-dark": "rgb(232,234,237)",

      },
      fontSize: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '20': '20px',
        '22': '22px',
        '25': '25px',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
      },
      borderRadius: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
      },
      lineHeight: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
      },
      padding: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
      },
      margin: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
      },
      boxShadow: {
        "cart": "rgba(50,50,93,.25) 0 2px 5px -1px,rgba(0,0,0,.3) 0 1px 3px -1px",
        "cart-dark": "rgba(0,0,0,.9) 0 1px 2px ",
        "form": "rgba(0,0,0,.5) 0 3px 9px ",
        "footer": "rgba(50,50,93,.25) 0 13px 27px -5px,rgba(0,0,0,.3) 0 8px 16px -8px",
        "header": "rgba(0,0,0,.18) 0 2px 4px",
        "button": "rgba(0,0,0,.15) 0 10px 5px -5px ",
        // "imgCart-dark": "0 0 8px 0 #757575" after


      },
      backgroundImage: {
        "none": "none",
        "background": "url(/bg.jpg)",
        "item": "linear-gradient(180deg,transparent 0,rgba(0,0,0,0.8) 67%,rgba(0,0,0,0.8))",
        "slider": "linear-gradient(0deg,#3d80d0,rgba(61, 128, 208, 0))",
        "hoverChapter": "linear-gradient(90deg, #3d80d0, #8bb3e3)",
        "login": " url('https://res.cloudinary.com/dh19c15zp/image/upload/v1697712297/xnu4k6qx9zleq39mjbwh.png')",
        "loadMore": "linear-gradient(180deg,transparent 0,rgba(255, 255, 255, 0) ,_#fff",

      },
      keyframes: {
        hot_animation: {
          '0%, 100%': { 'background-position': '15% 0%' },
          '50%': { 'background-position': '86% 100%' },
        }
      },
      animation: {
        hot_animation: 'hot_animation 7s ease infinite'
      }


    },
  },
  plugins: [],
};
