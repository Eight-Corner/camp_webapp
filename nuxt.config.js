export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',

    head: {
        title: '캠핑친구24',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no, viewport-fit-cover'
            },
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css'}
        ],
        script: [
            {type: 'text/javascript', src: 'https://unpkg.com/phosphor-icons'},
            {src: 'https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js'},
            {src: 'https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.js'}
        ],
    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~assets/scss/index.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/fontawesome.js',
        '~plugins/alert.js',
        '~api/index.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify'
        // With options
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/toast',
        '@nuxtjs/proxy',
        'nuxt-sweetalert2'
    ],
    proxy: {
        '/api/v1': { target: 'API_URL', pathRewrite: {'^/api/v1': ''} }
    },
    toast: {
        position: 'bottom-center',
        duration: 3000,
        className: 'toast-items',
        containerClass: 'toast-container',
        theme: "outline"
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/]
    },

    loading: '~/components/LoadingBar.vue'
}
