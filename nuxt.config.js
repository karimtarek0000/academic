export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
    },
    titleTemplate: 'اكاديمي | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي مع التمتع بمميزات عديدة في أكاديمي',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'mask-icon',
        type: 'image/png',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        type: 'image/png',
        href: '/site.webmanifest',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/style/style', lang: 'scss' },
    { src: 'vue-slick-carousel/dist/vue-slick-carousel.css', lang: 'css' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/plugins.js',
    { src: '@/plugins/pluginsClient.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  //
  loading: {
    color: 'blue',
    height: '5px',
  },

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
    //
    'nuxt-mq',
    //
    'vue-social-sharing/nuxt',
    //
    'nuxt-route-meta',
  ],

  //
  publicRuntimeConfig: {},
  privateRuntimeConfig: {},

  //
  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      tabletP: 768,
      tablet: 992,
      desktop: Infinity,
    },
  },

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

  generate: {
    fallback: true,
  },

  //
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/courses/:categoryName',
        component: resolve(__dirname, 'pages/courses.vue'),
      })
      routes.push({
        path: '/courses/:categoryName/:courseName',
        component: resolve(__dirname, 'pages/course-details.vue'),
      })
      routes.push({
        path: '/my-courses',
        component: resolve(__dirname, 'pages/my-courses.vue'),
      })
      routes.push({
        path: '/my-courses/:course',
        component: resolve(__dirname, 'pages/course.vue'),
      })
      routes.push({
        path: '/instructor/:name',
        component: resolve(__dirname, 'pages/instructor.vue'),
      })
      routes.push({
        path: '/blogs',
        component: resolve(__dirname, 'pages/blogs.vue'),
      })
      routes.push({
        path: '/blogs/article/:id',
        name: '_article',
        component: resolve(__dirname, 'pages/article.vue'),
        chunkName: 'pages/article',
      })
      routes.push({
        path: '/profile/:name',
        component: resolve(__dirname, 'pages/profile.vue'),
      })
      routes.push({
        path: '/bank-accounts',
        component: resolve(__dirname, 'pages/bank-accounts.vue'),
      })
      routes.push({
        path: '/invoice/:id',
        component: resolve(__dirname, 'pages/invoice.vue'),
      })
      routes.push({
        path: '/favorit',
        component: resolve(__dirname, 'pages/favorit.vue'),
      })
      routes.push({
        path: '/purchase-orders',
        component: resolve(__dirname, 'pages/purchase-orders.vue'),
      })
      routes.push({
        path: '/auth/sign-up',
        component: resolve(__dirname, 'pages/auth/sign-up.vue'),
      })
      routes.push({
        path: '/auth/sign-in',
        component: resolve(__dirname, 'pages/auth/sign-in.vue'),
      })
      routes.push({
        path: '/auth/forget-password',
        component: resolve(__dirname, 'pages/auth/forget-password.vue'),
      })
      routes.push({
        path: '/auth/forget-password/enter-new-password',
        component: resolve(__dirname, 'pages/auth/enter-new-password.vue'),
      })
      routes.push({
        path: '/auth/forget-password/enter-code',
        component: resolve(__dirname, 'pages/auth/enter-code.vue'),
      })
    },
  },
}
