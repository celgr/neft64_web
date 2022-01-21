export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
     head: {
        title: 'Neft64',
        htmlAttrs: {
            lang: 'jp'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Neft64 is japanese internet video label.' },

            { hid: 'og:site_name', property: 'og:site_name', content: 'Neft64' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://neft64.com' },
            { hid: 'og:title', property: 'og:title', content: 'Neft64' },
            { hid: 'og:description', property: 'og:description', content: 'Neft64 is japanese internet video label.' },
            { hid: 'og:image', property: 'og:image', content: 'https://media.graphcms.com/neoW9YETzC3dvlklXuA0?_ga=2.94179349.949560194.1642761925-527423709.1640347469' },
            { name: 'twitter:card', content: 'summary_large_image' },　//twitterの画像サイズ
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'https://media.graphcms.com/NtkOSkeQC2X41cjJTu27?_ga=2.63142567.949560194.1642761925-527423709.1640347469' }
        ],
        script: [
            { src: '/js/luxy.js', defer: true },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ress'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/graphcms.js',
        '~/plugins/vue-scroll.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
