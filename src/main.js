import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import es from './locales/es.js'
import ca from './locales/ca.js'
const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: { es, ca }
})

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)


app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})
