require('dotenv').config();

module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'blue'},
    /*
     ** Use lru-cache to allow cached components for better render performances
    */
    cache: {
        max: 1000,
        maxAge: 900000
    },
    /** Global CSS
     */
    css: [
        '@/assets/css/library/bootstrap.min.css',
        '@/assets/css/library/font-awesome.min.css',
        '@/assets/css/style.css',
        /*{src: 'bootstrap/dist/css/bootstrap.css'},
        {src: 'bootstrap/dist/css/bootstrap-theme.css'},
        {src: '~/assets/scss/custom.scss', lang: 'scss'}*/
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/lib/collect',
        '@/plugins/utility/common',
        '@/plugins/lib/axios'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/dotenv',
        //['@nuxtjs/dotenv', { filename: '.env.prod' }],
        //['@nuxtjs/dotenv', { path: 'env_config/' }],
        //['@nuxtjs/dotenv', { path: 'env_config/', filename: '.env' }],
        //['@nuxtjs/dotenv', { path: '@/env-config/', filename: '.env.prod' }],
        [
            '@nuxtjs/recaptcha', {
                siteKey: '6LcgiFIUAAAAAD2EvaZ5LDG_omjZ-xZthUQebhUV',
                version: 2,
            }
        ],
        ['@nuxtjs/axios', {
            baseURL: process.env.WEB_API_URL,
            //baseURL: 'https://api.github.com/users',
            //baseURL: 'http://insta-loan-micro-services/v1/grievance',
            credentials: false,
            browserBaseURL: '',
            proxyHeaders: true,
            redirectError: {
                401: '/'
            },
            requestInterceptor: (config, {store}) => {
                config.headers.common['X-Requested-With'] = 'XMLHttpsRequest'
                //config.headers.common['Authorization'] = 'Bearer ' + store.state.token;
                //config.headers.common['Authorization'] = '';
                //config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
                return config;
            }
        }],
        //'@nuxtjs/proxy',
    ],
   /* proxy: {
        '/api': {
            target: 'https://api.github.com/users',
            pathRewrite: {
                '^/api' : ''
            }
        }
    },*/
    /*axios: {
        proxy: true
    },
    proxy: {
        //'/api': 'http://insta-loan-micro-services/v1/guest'
        //'/api': 'http://insta-loan-micro-services/v1/grievance'
        //'/api': 'https://api.github.com/users'
        //'/api': process.env.APP_URL,
        //'/api': { target: 'http://localhost:3000', pathRewrite: {'^/api/': 'http://insta-loan-micro-services/v1/guest'}, changeOrigin: true },
    },*/
    env: {
        //baseUrl: process.env.APP_URL || 'http://localhost:3000',
        portalUrl: process.env.NODE_ENV === 'dev'
                        ? 'http://localhost:3000'
                        : 'https://my-domain.com'
    },
    /*router: {
          middleware: ['author'],
          extendRoutes (routes, resolve) {
              let arrayRoute = router.arrayRoute(resolve)
              arrayRoute.map((item) => routes.push(item))
          }
    },*/
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx)
        {
            /*if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }*/
        }
    }
}
