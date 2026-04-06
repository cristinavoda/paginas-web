<template>
  <nav :class="['navbar',
  { 
    open: isOpen, 
    'navbar-home': isHome,
    'navbar-contact': route.path === '/contact'
  }
]">

    <h1>Paginas web</h1>
    <div class="logo">
  <router-link to="/" class="logo-link">
    <img src="/logo.png" alt="Logo CV Páginas Web" class="logo-img" />
  
  </router-link>
</div>

 
   
    <div class="hamburger" @click="toggleMenu">
      <div :class="{ bar: true, open: isOpen }"></div>
      <div :class="{ bar: true, open: isOpen }"></div>
      <div :class="{ bar: true, open: isOpen }"></div>
    </div>

    
    <div :class="['nav-links', { open: isOpen }]">
      <router-link to="/" class="nav-item" @click="closeMenu">Inicio</router-link>
      <router-link to="/services" class="nav-item" @click="closeMenu">Servicios</router-link>
      <router-link to="/proyectos" class="nav-item" @click="closeMenu">Proyectos</router-link>
      <router-link to="/muestras" class="nav-item" @click="closeMenu">Muestras</router-link>
      <router-link to="/pricing" class="nav-item" @click="closeMenu">Precios</router-link>
      <router-link to="/contact" class="nav-item" @click="closeMenu">Contacto</router-link>
    </div>

   
   
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
 import { useI18n } from 'vue-i18n'

const isOpen = ref(false)
const route = useRoute()
const isHome = computed(() => route.path === '/')


function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false

 

const { locale } = useI18n()

function switchLang() {
  locale.value = locale.value === 'es' ? 'ca' : 'es'
}
}
</script>

<style scoped>

.navbar {
 display: flex;
 align-items:flex-start;
  justify-content: flex-start;
  background: transparent;
  color: #cbd3d3;
  text-shadow: 1px 2px 2px rgb(15, 15, 15);
  backdrop-filter: blur(18px);
  padding: 1rem 2rem;
  gap: 5rem;
  position: fixed;
  width: 100%;
  top: 0;
  margin-left: 0;
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar-home .nav-item {
  color: #ebf1f1;
  text-shadow: 1px 1px 1px rgb(56, 55, 55);
}



.navbar-contact {
  background: transparent !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  color: #b0b8b8 !important;
}

.nav-item {
  
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  color: #d5d8d8;
  padding: 0.1rem 1.8rem;
  text-shadow:  2px 2px 4px black;
  gap: 2.8rem;
  margin-left: -10px;
  
}
.nav-links a.router-link-exact-active {
  color: rgb(56, 58, 58);
  border-bottom: 2px solid rgb(53, 51, 51);
  background-color: transparent;
}
.nav-item:hover {
  color: rgb(156, 163, 163);
  transform: scale(1.1);
  border-bottom: 2px solid rgb(133, 131, 131);
  
}


.navbar-item-home {
  color: rgb(233, 226, 226);
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);

}
.navbar-home .nav-links a.router-link-exact-active {
  color: rgb(244, 248, 248);
  border-bottom: 2px solid rgb(247, 242, 242);
}
.navbar-services.nav-item {
  color: rgb(87, 85, 85);
}
.navbar-services.nav-item .nav-item:hover {
  color: #7f8181;
}
.nav-item-home:hover {
  color: rgb(74, 77, 77);
  transform: scale(1.1);
  border-bottom: 2px solid rgb(40, 43, 43);
  
}


.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1px;
  
}

.logo-link {
  display: flex;
  
  text-decoration: none;
}

.logo-img {
  width: 38px; 
  height: 38px;
  object-fit: contain;
  border-radius: 50%; 
  transition: transform 0.3s ease;
  margin-left: 1px;
  
}
.logo a {
 color: #5c5959;
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  
 
}
.logo-img:hover {
  transform: scale(1.1);
}

.navbar h1 {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  transition: color 0.3s ease;
  color: #ecf0f0;
  text-shadow:  2PX 2px 4px black;
  margin: 0;
  line-height: 1;
}

.hamburger {
  display: none;
  flex-direction: column;
  margin-right: 2rem;
  gap: 5px;
  cursor: pointer;
  color: #889191;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: currentColor;
  border-radius: 2px;
  color: #1e159e;
}


.bar {
  width: 25px;
  color: #eff7f7;
  background-color: #e7ecec;
  box-shadow: 4px 4px  #96969c;
  transition: all 0.3s ease;
  margin-right: 3rem;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar.open:nth-child(2) {
  opacity: 1;
}
.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.4s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
@media (max-width: 768px) {

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 24px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    backdrop-filter: none;
  }

  .navbar h1 {
    font-size: 1.1rem;
    color: #979494;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
  }

 
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: currentColor;
  border-radius: 2px;
  color: #cacece;
}
  .bar {
    width: 24px;
    height: 2px;
    background: #5a5858;
    
  }
.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar.open:nth-child(2) {
  opacity: 1;
}
.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.4s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

 
  .nav-links {
    position: fixed;
    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: white;

    transform: translateX(100%);
    transition: transform 0.35s ease;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  
  .nav-item {
    font-size: 1.6rem;
    font-weight: 500;
    color: #222;
    padding: 1rem 0;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .nav-item:hover {
    color: #000;
    transform: scale(1.05);
  }

  .nav-links a.router-link-exact-active {
    color: #000;
    border-bottom: 2px solid #000;
  }

}



@media (min-width: 1200px) {
  .navbar {
    gap: 4rem; 
  }
}

</style>