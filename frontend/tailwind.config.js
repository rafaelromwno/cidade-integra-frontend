const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        "verde-paleta": "#5BC561",
        "verde-escuro-paleta": "#3B8C4B",
        "azul-paleta": "#112B3C",
        "vermelho-paleta": "#A92C2C",
        "cinza-paleta": "#CED8E2",
      },
      backgroundImage: {
        fundo1: "url('../src/img/imagem-fundo.jpg')",
        fundo2: "url('../src/img/imagem-fundo-verde.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
};