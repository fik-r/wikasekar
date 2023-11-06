/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        garnish: "#119552",
        radiant_yellow: "#F9A01B",
        sooty: "#141414",
        jet: "#343434",
        neutral: "#FEFFFF",
        orange: "#FFA500",
        hard_coal: "#656565",
        democrat: "#00AEEF",
        silver_spoon: "#D2D2D2",
        more_than_a_week: "#8C8C8C",
        aria: "#E3E3E3",
        dire_wolf: "#282828",
        lifeguard: "#E50000",
        white_smoke: "#F5F5F5",
        overlay: "#585858",
        robo_master: '#ADADAD',
        dark_blue: "#168FCF",
        snowflake: "#F0F0F0",
        black_oaf: "#4F4F4F",
        lynx_white: "#F7F7F7",
        beautiful_blue: "#1B75BB"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1B75BB",
          secondary: "#F9A01B",
          accent: "#E52F2F",
          warning: "#FFA500",
          
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
