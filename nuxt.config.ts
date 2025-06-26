export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    baseURL: '/mcheungsen.github.io/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap' 
        }
      ]
    }
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    safelistColors : ['toast', 'kabul', 'just-right', 'sandrift']
  }
})
