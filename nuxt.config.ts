// nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],

    apollo: {
        clients: {
            prepr: './apollo/prepr.ts',
        },
    },

    build: {
        transpile: ["tslib"],
    },
})
