// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title:"Awara",
      meta:[
        {name:'description',content:'Page of awara and its online shoping cart'}
      ],
      link:[
        {rel:'StyleSheet', href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}
      ]
    },
  },
  runtimeConfig:{
    currencykey: process.env.CURRENCY_API_KEY
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
})
