// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  css: [
    "~/assets/css/main.css",
  ],
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
  ssr: true,
  experimental: {
    defaults: {
      // https://nuxt.com/docs/api/components/nuxt-link#in-nuxt-config
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },
  site: {
    url: "https://hotbox2.igor.kalinichev.net",
    trailingSlash: true,
  },
  // https://nuxtseo.com/docs/sitemap/api/config
  // https://github.com/nuxt-modules/sitemap/blob/main/src/runtime/types.ts
  sitemap: {
    xsl: false,
  },
});
