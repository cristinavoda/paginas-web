import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Muestras from '../views/Muestras.vue'
import Contact from '../views/Contact.vue'
import Pricing from '../views/Pricing.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  {
    path: '/proyectos',
    name: 'Projects',
    component: Projects
  },
  { path: '/muestras', name: 'Muestras', component: Muestras },
  { path: '/contact', name: 'Contact', component: Contact },
   { path: '/pricing', component: Pricing } ,
   {
  path: '/informacion/diseno-web',
  component: () => import('../views/Informacion/DiseñoWeb.vue')
},
{
  path: '/informacion/desarrollo-frontend',
  component: () => import('../views/Informacion/DesarrolloFrontend.vue')
},
{
  path: '/informacion/seo',
  component: () => import('../views/Informacion/Seo.vue')
},
{
  path: '/informacion/mantenimiento',
  component: () => import('../views/Informacion/Mantenimiento.vue')
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
