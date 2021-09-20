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
    '@nuxt/image',
    '@nuxtjs/google-analytics'
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
      viewport: 'width=device-width, initial-scale=1',
      ogHost: 'https://info.samorzad.uj.edu.pl',
      ogImage: true
    },
    manifest: {
      name: 'Informator Studenta UJ',
      short_name: 'InformatorUJ',
      description: 'Wszystko co musisz wiedzieć studiując na UJ.',
      lang: 'pl'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'my-api-cache',
            cacheableResponse: { statuses: [0, 200] }
          }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'my-api-cache',
            cacheableResponse: { statuses: [0, 200] }
          }
        },
        {
          urlPattern: 'https://cdn.jsdelivr.net/npm/@mdi/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'my-api-cache',
            cacheableResponse: { statuses: [0, 200] }
          }
        }
      ],
      offlineAnalytics: true
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: () => [
        'remark-squeeze-paragraphs',
        '~/plugins/remark-slug-nonascii.js',
        'remark-autolink-headings',
        'remark-external-links',
        'remark-footnotes',
        '~/plugins/remark-content-image.js',
        'remark-gfm'
      ],
      rehypePlugins: [
        '~/plugins/rehype-content-table.js',
        'rehype-raw',
        'rehype-add-classes'
      ],
      rehypeAddClasses: {
        h2: 'text-h3 mb-4 mt-8',
        h3: 'text-h4 mb-4 mt-7',
        h4: 'text-h5 mb-4 mt-6',
        h5: 'text-h6 mb-4 mt-5',
        h6: 'text-subtitle-1 font-weight-medium mb-4 mt-5',
        p: 'text-body-1 my-4',
        blockquote: 'blockquote'
      },
      remarkAutolinkHeadings: {
        linkProperties: {
          ariaHidden: 'true',
          tabIndex: -1,
          className: ['heading-link']
        }
      },
      prism: {
        theme: false
      }
    },
    fullTextSearchFields: ['title', 'description', 'text']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: '#58a6ff'
        },
        light: {
          primary: '#58a6ff'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    //   config.devtool = 'eval-source-map'
    // },
    // extractCSS: true
  },

  generate: {
    exclude: [
      /^\/edit/,
      /^\/admin/
    ],
    routes() {
      const { $content } = require('@nuxt/content')
      return $content({ deep: true })
        .only(['path', 'stub'])
        .where({ stub: { $ne: true } })
        .fetch()
        .then(res => {
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
    detectBrowserLanguage: false,
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
    hostname: 'https://info.samorzad.uj.edu.pl/'
  },

  loading: {
    color: '#58a6ff',
    continuous: true,
    duration: 2000
  },

  googleAnalytics: {
    id: 'UA-55920586-5'
  }
}
