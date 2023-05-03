// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [{ src: '/js/jquery-2.1.4.min.js' }, { src: '/js/swiper-bundle.min.js' }, { src: '/js/ui_common.js' }],
      link: [
        { rel: 'stylesheet', href: '/fonts/font.css' },
        { rel: 'stylesheet', href: '/css/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/ui_style.css' },
      ],
    },
  },
})
