const baseUrl =
  process.env.baseUrl ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'satu-elektronik',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/@egjs/vue-flicking@4.9.0/dist/flicking.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/@egjs/vue-flicking@4.9.0/dist/flicking-inline.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/@egjs/flicking-plugins@4.4.0/dist/pagination.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/flicking', ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios', withoutNullishEntries({ baseURL: baseUrl })],
  ],
  env: withoutNullishEntries({
    baseUrl,
  }),

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  serverMiddleware: [
    '~/server-middleware/log.js',
    { path: '/api', handler: '~/api/index.js' },
  ],
}
function withoutNullishEntries(x) {
  return Object.fromEntries(Object.entries(x).filter(([_, v]) => v != null))
}
