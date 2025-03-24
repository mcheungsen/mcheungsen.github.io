import { defineNuxtPlugin, useHead } from '#imports'

export default defineNuxtPlugin(() => {
  useHead({
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap'
      }
    ]
  })
})
