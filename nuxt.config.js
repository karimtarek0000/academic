export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
    },
    title: 'academic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/style/style.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Style resources
    '@nuxtjs/style-resources',
  ],

  //
  styleResources: {
    scss: [
      '~/assets/style/general/_design-system.scss',
      '~/assets/style/general/_others.scss',
      '~/assets/style/general/_media.scss',
      '~/assets/style/general/_breakPoint.scss',
      '~/assets/style/helpers/_directions.scss',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
  },
}
