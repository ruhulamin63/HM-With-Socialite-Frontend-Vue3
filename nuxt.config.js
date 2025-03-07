// Nuxt Configuration File

const API_BASE_URL = process.env.API_BASE_URL || "http://your-ip:8000/api/";


export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },
  routeRules: {
    '/api/**': { proxy: { target: API_BASE_URL, changeOrigin: true } },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://your-ip:8000/api/",
    },
  },

  ssr: false,
  spaLoadingTemplate: false,
  fetch: {
    apiBaseUrl: API_BASE_URL,
  },

  plugins: [
    "~/plugins/ofetch.js",
    "~/plugins/multiselect.js",
    "~/plugins/yup.js",
    "~/plugins/vee-validate.js",
    "~/plugins/sweetalert.client.js",
  ],

  modules: ["nuxt-lodash", "@pinia/nuxt"],

  lodash: {
    prefix: "_",
    prefixSkip: false,
    upperAfterPrefix: false,
    exclude: [],
    alias: [
      ["camelCase", "stringToCamelCase"],
      ["kebabCase", "stringToKebab"],
      ["isDate", "isLodashDate"],
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
        'data-scompiler-id': '0',
      },
      title: 'Hotel Management System',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { charset: 'utf-8' },
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i' 
        },
        { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.ltr.css' },
        { rel: 'stylesheet', href: '/assets/vendor/highlight.js/styles/github.css' },
        { rel: 'stylesheet', href: '/assets/vendor/simplebar/simplebar.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/quill/quill.snow.css' },
        { rel: 'stylesheet', href: '/assets/vendor/air-datepicker/css/datepicker.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/select2/css/select2.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/datatables/css/dataTables.bootstrap5.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/nouislider/nouislider.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/fullcalendar/main.min.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
        { rel: 'stylesheet', href: '/assets/css/main.css' },
      ],
      script: [
        { src: '/assets/vendor/jquery/jquery.min.js', defer: true },
        { src: '/assets/vendor/feather-icons/feather.min.js', defer: true },
        { src: '/assets/vendor/simplebar/simplebar.min.js', defer: true },
        { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js', defer: true },
        { src: '/assets/vendor/highlight.js/highlight.pack.js', defer: true },
        { src: '/assets/vendor/quill/quill.min.js', defer: true },
        { src: '/assets/vendor/air-datepicker/js/datepicker.min.js', defer: true },
        { src: '/assets/vendor/air-datepicker/js/i18n/datepicker.en.js', defer: true },
        { src: '/assets/vendor/select2/js/select2.min.js', defer: true },
        { src: '/assets/vendor/fontawesome/js/all.min.js', defer: true, 'data-auto-replace-svg': '', async: true },
        { src: '/assets/vendor/chart.js/chart.min.js', defer: true },
        { src: '/assets/vendor/datatables/js/jquery.dataTables.min.js', defer: true },
        { src: '/assets/vendor/datatables/js/dataTables.bootstrap5.min.js', defer: true },
        { src: '/assets/vendor/nouislider/nouislider.min.js', defer: true },
        { src: '/assets/vendor/fullcalendar/main.min.js', defer: true },
        { src: '/assets/js/stroyka.js', defer: true, mode: 'client' },
        { src: '/assets/js/custom.js', defer: true, mode: 'client' },
        { src: '/assets/js/calendar.js', defer: true },
        { src: '/assets/js/demo.js', defer: true },
        { src: '/assets/js/demo-chart-js.js', defer: true },
      ],
    },
  },
});