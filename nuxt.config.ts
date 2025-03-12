// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['nuxtjs-naive-ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',  '@vueuse/nuxt',],
 
  ssr:true,
  debug: true, // Enable debugging

  // debug: true, 

  srcDir: "src",
  css: ['~/assets/css/main.css'],


  // modules: ['nuxtjs-naive-ui'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vueuc'],
  },



  app: {
    head: {
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/logo/5.png' },
        // { rel: 'icon', type: 'image/x-icon', href: '/Asset18.png' }, // For the standard favicon
        // { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }, // Example for other formats
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, // For iOS devices
      ],
    },
  },

 


  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ['/'],
  //     failOnError: false,
  //     ignore: ['/404', '/200'], // Ignore these routes
  //   },
  // },


  


  // nitro: {
  //   prerender: {
  //     routes: ['/404', '/200'],
  //   },
  // },


  // nitro: {
  //   prerender: {
  //     ignore: ['/'], // Ignore the root route
  //   },
  // },

 
})