/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "hsl(198, 87%, 91%)",
        "sky-blue": "hsl(199, 93%, 76%)",
        "bright-blue": "hsl(199, 98%, 49%)",
        "dark-blue": "hsl(198, 97%, 24%)",
        "navy-blue": "hsl(195, 97%, 13%)",
        // Colores para redes sociales
        "facebook-blue": "#1877F2", // Color oficial de Facebook
        "x-black": "#BBBBBB", // Color oficial de X (Twitter)
        "linkedin-blue": "#0A66C2", // Color oficial de LinkedIn
      },
    },
  },
  daisyui: {
    themes: ["nord"],
  },
  plugins: [daisyui],
};
