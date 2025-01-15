// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    baseURL: '/mcheungsen.github.io/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  colorMode: {
    preference: 'light'
  }
})