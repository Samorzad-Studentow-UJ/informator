import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Samorząd Studentów UJ',
    title: 'Informator Studenta',
    description: 'Wszystko co musisz wiedzieć studiując na UJ.',
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sync-router-vuex.client.js',
    '~/plugins/persisted-state.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: 'static/icon.png'
    },
    meta: {
      name: 'Informator Studenta UJ',
      short_name: 'InformatorUJ',
      author: 'Samorząd Studentów UJ',
      theme_color: '#005ca7',
      description: 'Wszystko co musisz wiedzieć studiując na UJ',
      lang: 'pl',
      mobileAppIOS: true,
      nativeUI: true
    },
    manifest: {
      name: 'Informator Studenta UJ',
      short_name: 'InformatorUJ',
      description: 'Wszystko co musisz wiedzieć studiując na UJ.',
      lang: 'pl'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        '~/plugins/remark-content-image.js'
      ],
      rehypePlugins: [
        'rehype-add-classes'
      ],
      rehypeAddClasses: {
        h2: 'text-h3 mb-3 mt-7',
        h3: 'text-h4 mb-3 mt-6',
        h4: 'text-h5 mb-2 mt-5',
        h5: 'text-h6 mb-2 mt-4',
        h6: 'text-subtitle-1 font-weight-medium mb-2 mt-3',
        p: 'text-body-1',
        blockquote: 'blockquote'
      },
      remarkAutolinkHeadings: {
        linkProperties: {
          ariaHidden: 'true',
          tabIndex: -1,
          className: ['heading-link']
        }
      },
      fullTextSearchFields: ['title', 'description', 'text']
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.devtool = 'eval-source-map'
    },
    extractCSS: true
  },

  generate: {
    routes() {
      const { $content } = require('@nuxt/content')
      return $content({ deep: true }).only(['path']).fetch().then(res => {
        return res.map(item => item.path.substring(0, item.path.lastIndexOf('/') + 1))
      })
    }
  },

  i18n: {
    locales: [
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.js'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.js'
      }
    ],
    langDir: 'lang/',
    defaultLocale: 'pl',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    },
    vueI18nLoader: true,
    strategy: 'prefix'
  },

  router: {
    trailingSlash: true
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
      xl: 1904
    }
  },

  sitemap: {
    hostname: 'https://infossuj.pardyl.com/' // todo: update before deploy.
  },
}
