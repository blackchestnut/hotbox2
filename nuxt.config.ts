// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  css: [
    "~/assets/css/main.css",
  ],
  ssr: true,
  //build: {
  //  transpile: ["swiper"],
  //},
  app: {
    head: {
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=a3193041-d961-443b-b722-ea42e4bd3e37&lang=ru_RU",
          async: true,
        },
      ],
    },
    baseURL: '/',
  },
  site: {
    url: "https://hotbox2.igor.kalinichev.net",
  },
  sitemap: {
    xsl: false,
    // exclude: ["/resume/resume"],
  },
});
