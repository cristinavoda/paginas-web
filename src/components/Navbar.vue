<template>
  <nav :class="[
  'navbar',
  { 
    open: isOpen, 
    'navbar-home': isHome,
    'navbar-contact': $route.path === '/contact'
  }
]">

    
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
      <router-link to="/" class="nav-item" @click="closeMenu">HOME</router-link>
      <router-link to="/services" class="nav-item" @click="closeMenu">SERVICIOS</router-link>
      <router-link to="/muestras" class="nav-item" @click="closeMenu">MUESTRAS</router-link>
      <router-link to="/pricing" class="nav-item" @click="closeMenu">PRECIOS</router-link>
      <router-link to="/contact" class="nav-item" @click="closeMenu">CONTACTO</router-link>
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
  background: rgba(251, 252, 252, 0.8);
  color: #889191;
  backdrop-filter: blur(18px);
  padding: 1rem 2rem;
  gap: 3rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: black;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar-home {
  background-color: transparent;
  color:  #929696;
  box-shadow: none;
}
.navbar-contact {
  background: transparent !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  color: #eef3f3 !important;
}

.nav-item {
  margin-left: 50 px ;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  color: #666b6b;
  padding: 1.5rem 0.8rem;
  
}
.nav-item:hover {
  color: darkcyan;
  transform: scale(1.1);
  border-bottom: 2px solid darkcyan;
  
}

.navbar-home .nav-item {
  color: rgb(201, 196, 196);
}
.navbar-home .nav-item:hover {
  color: #0b8a8a;
}
.nav-item-home:hover {
  color: darkcyan;
  transform: scale(1.1);
  border-bottom: 2px solid darkcyan;
  
}


.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -30px;
  
}

.logo-link {
  display: flex;
  
  text-decoration: none;
}

.logo-img {
  width: 48px; 
  height: 48px;
  object-fit: contain;
  border-radius: 50%; 
  transition: transform 0.3s ease;
  margin-left: 1px;
}

.logo-img:hover {
  transform: scale(1.1);
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
  color: #889191;
}

.logo a {
 color: #5c5959;
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  
 
}

.lang-switch {
  margin-left: 0rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #292b2b;
  background: white;
  color: #007d7d;
  font-weight: 600;
  cursor: pointer;
}

.lang-switch:hover {
  background: #00b8b8;
  color: white;
}

.hamburger {
  
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;
  gap: 1rem;
  padding: 2rem 1rem;
}


.bar {
  width: 25px;
  color: #646868;
  background-color: #889191;
  transition: all 0.3s ease;
  margin-right: 3rem;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar.open:nth-child(2) {
  opacity: 0;
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


@media (min-width: 1200px) {
  .navbar {
    gap: 3rem; 
  }
}

@media (max-width: 768px) {
  .navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem0 1rem;
    background-color: #f7f6fa;
    box-shadow: 0 2px 8px rgba(77, 77, 78, 0.1);
    transition: background-color 0.3s ease;
    color: #6b6e6e;
  }

  
  .navbar-home {
    background-color:transparent;
    color: #fff;
    margin-left: 30px;
  }
.navbar-contact {
  background: transparent !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  color: #eef3f3 !important;
}
 .navbar-contact .nav-links.open {
    background-color: rgba(61, 81, 100, 0.603) ;
     backdrop-filter: blur(20px);
    transition: background-color 0.3s ease;
  }

  .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }

  .hamburger {
    display: flex;
    top: 15px;
    right: 70px;
  }

  .bar {
    width: 25px;
    height: 3px;
    right:80px;
    background-color: #797373; 
    transition: all 0.3s ease;
  
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 70px;
    background-color: rgba(255, 255, 255, 0.95);
    color: #636969;
    flex-direction: column;
    align-items: right;
    width: 30%;
    padding: 1rem 0;
    gap: 1rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
  }

  
  .nav-links.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  
  .navbar-home .nav-links.open {
    background-color: rgba(42, 75, 107, 0.952) ;
     backdrop-filter: blur(20px);
    transition: background-color 0.3s ease;
  }

  .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }

  .lang-switch {
    position: absolute;
    top: 15px;
    right: 200px;
  }
}

</style>