<template>
  <header class="navbar" data-aos="fade-down">
    <div class="logo">
      <router-link to="/"> Paginas Web </router-link>
    </div>

    <div class="hamburger" @click="toggleMenu">
      <div :class="{ 'bar': true, 'open': isOpen }"></div>
      <div :class="{ 'bar': true, 'open': isOpen }"></div>
      <div :class="{ 'bar': true, 'open': isOpen }"></div>
    </div>

       <div :class="['nav-links', { open: isOpen }]">
    <nav :class="['nav-links', { 'open': isOpen }]" data-aos="fade-left">
      <router-link to="/" class="nav-item" @click="closeMenu">Inicio</router-link>
      <router-link to="/services" class="nav-item" @click="closeMenu">Servicios</router-link>
      <router-link to="/muestras" class="nav-item" @click="closeMenu">Muestras</router-link>
      <router-link to="/contact" class="nav-item" @click="closeMenu">Contacto</router-link>
      <router-link to="/pricing"  class="nav-item" @click="closeMenu">Precios</router-link>

    </nav>
    </div>
    
    <select v-model="selectedLang" @change="changeLang" class="lang-switch">
      <option value="es"> ES</option>
      <option value="ca"> CA</option>
    </select>
  </header>
  
</template>

<script setup>
import { ref } from 'vue'
 import { useI18n } from 'vue-i18n'

const isOpen = ref(false)

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
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(253, 253, 253, 0.95);
  display: flex;
 justify-content: flex-start;
  padding: 1rem 1rem;
  z-index: 1000;
  backdrop-filter: blur(33px);
  box-shadow: 5px 2px 10px rgba(40, 141, 172, 0.3);
  gap:1.1rem;
}

.logo a {
color: #dbe4e7;
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  text-shadow: 2px 2px 8px rgba(o, 0, 0,6);
}

.nav-links {
    color: #5b6163;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  gap: 2rem;
margin-left: 0;
  a:hover {
  border-bottom: 2px solid #00b8b8;
}

}

.nav-item {
  color: #cdd7db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0);
   margin-left: 0px;
}

.nav-item:hover {
  color: #00b8b8;
  transform: scale(1.1);
}

.lang-switch {
  margin-left: auto;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #00b8b8;
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
  gap: 5px;
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
    padding: 0rem 1rem;
     
  }

  .nav-links {
    position: absolute;
    background-color: #eef3f5;
    top: 40px;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 1rem 1rem;
    display: none;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
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
  .lang-switch {
    position: absolute;
    top: 15px;
    right: 90px;
  }
  }
</style>