import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Muestras from '../views/Muestras.vue'
import Contact from '../views/Contact.vue'
import Pricing from '../views/Pricing.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/muestras', name: 'Muestras', component: Muestras },
  { path: '/contact', name: 'Contact', component: Contact },
   { path: '/pricing', component: Pricing } ,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
