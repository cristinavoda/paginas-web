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
  background-color: white;
  color: black;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar-home {
  background-color: black;
  color: white;
  box-shadow: none;
}

/* Enlaces */
.nav-item {
  margin: 0 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
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

/* Logo */
.logo a {
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: none;
  color: inherit;
}

/* Botón hamburguesa */
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
     background: linear-gradient(45deg, #ffffff, #f6f7f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
 
    
  display: flex;
  gap: 2rem;
margin-left: 0;
  a:hover {
  border-bottom: 2px solid #f4f8f8;
}

}

.nav-item {
  color: #ffffff;
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
    right: 130px;
  }
  }
</style>