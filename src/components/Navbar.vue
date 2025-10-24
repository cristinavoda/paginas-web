<template>
  <nav :class="['navbar', { open: isOpen, 'navbar-home': isHome }]" >
    <!-- LOGO -->
    <div class="logo">
  <router-link to="/" class="logo-link">
    <img src="/logo.png" alt="Logo CV Páginas Web" class="logo-img" />
  </router-link>
</div>


    <!-- BOTÓN HAMBURGUESA -->
    <div class="hamburger" @click="toggleMenu">
      <div :class="{ bar: true, open: isOpen }"></div>
      <div :class="{ bar: true, open: isOpen }"></div>
      <div :class="{ bar: true, open: isOpen }"></div>
    </div>

    <!-- ENLACES -->
    <div :class="['nav-links', { open: isOpen }]">
      <router-link to="/" class="nav-item" @click="closeMenu">Inicio</router-link>
      <router-link to="/services" class="nav-item" @click="closeMenu">Servicios</router-link>
      <router-link to="/muestras" class="nav-item" @click="closeMenu">Muestras</router-link>
      <router-link to="/contact" class="nav-item" @click="closeMenu">Contacto</router-link>
      <router-link to="/pricing" class="nav-item" @click="closeMenu">Precios</router-link>
    </div>

    <!-- SELECTOR DE IDIOMA -->
    <select v-model="selectedLang" @change="changeLang" class="lang-switch">
      <option value="es">ES</option>
      <option value="ca">CA</option>
    </select>
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
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(18px);
  padding: 1.5rem 2rem;
  gap: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(134, 136, 138);
  color: black;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar-home {
  background-color: rgb(12, 12, 12);
  color: white;
  box-shadow: none;
}

/* Enlaces */
.nav-item {
  margin: 0 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  color: #1d1f1f;
  gap: 1rem;
}

/* Enlaces por defecto (blanco o negro según fondo) */
.navbar-home .nav-item {
  color: white;
}
.navbar-home .nav-item:hover {
  color: #00b8b8;
}

.nav-item {
  color: black;
}
.nav-item:hover {
  color: #00b8b8;
}
.navbar-home .nav-item {
  color: rgb(245, 241, 241);
}
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  width: 48px; 
  height: 48px;
  object-fit: contain;
  border-radius: 50%; 
 
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.1);
}


.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: currentColor;
  border-radius: 2px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.082);
  display: flex;
 justify-content: flex-start;
  padding: 1rem 1rem;
  z-index: 100;
  box-shadow: 5px 2px 10px rgba(40, 141, 172, 0.3);
  gap: 1.1rem;
  color:#1d1f1f;
}

.logo a {
 color: #5c5959;
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
   text-shadow: 2px 2px 8px rgb(37, 74, 95);
 
}



.nav-item {
  color: #5c5959;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 2rem;
  text-shadow: 2px 2px 8px rgb(37, 74, 95);
   margin-left: 0px;
}

.nav-links:hover {
  color: #f9fafa;
  transform: scale(1.1);
}

.lang-switch {
  margin-left: 1rem;
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
  height: 3px;
  background-color: #889191;
  transition: all 0.3s ease;
  
}

/* Efecto al abrir */
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
  .hamburger {
    display: flex;
    top: 15px;
    right: 100px;
     
  }

  .nav-links {
    position: absolute;
    background-color: #2c2f30;
    top: 40px;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 0.5rem 0.1rem;
    gap: 0.5rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    
  }
.nav-links-home {
    position: absolute;
    background-color: #141414;
    top: 40px;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 0.5rem 0.1rem;
    gap: 0.1rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    color: #f9fafa;
  }

  .nav-links.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
   
  }

  .nav-item {
    color:#ecf3f3;
    margin: 1rem 0;
    font-size: 1.2rem;
    text-align: left;
   
  }
  .nav-item-home {
    color:#ecf3f3;
    margin: 1rem 0;
    font-size: 1.2rem;
    text-align: left;
   
  }
  .lang-switch {
    position: absolute;
    top: 15px;
    right: 130px;
  }
  }
</style>