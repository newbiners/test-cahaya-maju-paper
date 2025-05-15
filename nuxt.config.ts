// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    css: ["~/assets/scss/main.scss"],
    modules: [
        "@unocss/nuxt",
        "nuxt-swiper",
        "nuxt-gtag",
        "@nuxt/image",
        "@vueuse/nuxt",
        "@hypernym/nuxt-gsap",
        "@nuxtjs/seo",
        "@nuxtjs/sitemap",
        "nuxt-seo-utils",
        "nuxt-og-image",
    ],
    devtools: { enabled: true },

    image: {
        format: ["webp", "avif"],
    },

    swiper: {
        enableComposables: true,
        bundled: true,
    },
    gtag: {
        enabled: false,
        id: "G-37HM9FSFSC",
    },
    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },
    app: {
        head: {
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            script: [
                {
                    src: "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",
                    defer: true,
                },
                {
                    src: "/script.js",
                },
            ],
        },
    },

    plugins: ["~/plugins/vue-masonry.js"],
    gsap: {
        extraPlugins: {
            scrollTrigger: true,
        },
    },
});
