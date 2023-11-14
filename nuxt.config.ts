// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools',
    '@nuxt/image',
    'nuxt-icons'
  ],
  image: {
    image: {
      presets: {
        default: {
          modifiers: {
            densities: 'x1'
          }
        }
      }
    }
  },
  experimental: {
    reactivityTransform: true
  },
  css: ['~/assets/css/tailwind.css', '~/assets/scss/style.scss'],
  typescript: {
    strict: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    classSuffix: ''
  },
  headlessui: {
    prefix: ''
  },
  devtools: true
})
