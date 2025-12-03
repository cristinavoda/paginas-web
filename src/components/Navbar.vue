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
      <router-link to="/" class="nav-item" @click="closeMenu">INICIO</router-link>
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
  color: #686b6b;
  backdrop-filter: blur(18px);
  padding: 1rem 2rem;
  gap: 7rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar-home {
  background-color: transparent;
  color:  #bac2c2;
  box-shadow: none;
}
.navbar-contact {
  background: transparent !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  color: #b3bbbb !important;
}

.nav-item {
  
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  color: #555858;
  padding: 1.5rem 1.8rem;
  
}
.nav-item:hover {
  color: rgb(70, 73, 73);
  transform: scale(1.1);
  border-bottom: 2px solid rgb(101, 105, 105);
  
}


.navbar-home .nav-item {
  color: rgb(201, 194, 194);
}
.navbar-home .nav-item:hover {
  color: #454747;
}

.navbar-services.nav-item {
  color: rgb(75, 73, 73);
}
.navbar-services.nav-item .nav-item:hover {
  color: #454747;
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
  margin-left: 10px;
  
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
  color: #949b9b;
  background-color: #e7ecec;
  box-shadow: 1px 1px  #f5f7f7;
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


@media (min-width: 1200px) {
  .navbar {
    gap: 5rem; 
  }
}

@media (max-width: 768px) {
  .navbar {
    width: 100%;
    margin-left: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    box-shadow: 3px 2px 8px rgba(179, 179, 182, 0.1);
    transition: background-color 0.3s ease;
    color:#676868;
  }

  
  .navbar-home {
    background-color:transparent !important;
    color: #eeeaea;
    margin-left: 0;
  }
.navbar-contact {
  
  background: transparent !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  margin-top: -10px;
  color: #888f8f !important;
  gap: 2rem;
}
 .navbar-contact .nav-links.open {
    background-color: transparent;
    gap: 0.1rem;
    color:#faffff;
    transition: background-color 0.3s ease;
  }

.navbar-pricing .nav-item {
  color: #515555 !important;
  gap: 2rem;
}
 .navbar-pricing .nav-links.open {
    background-color: transparent;
    gap: 0.1rem;
    color:#444747;
    transition: background-color 0.3s ease;
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
    top: 42px;
    right: 0px;
    background-color: rgb(255, 251, 251);
    color: #4b4e4e;
    flex-direction: column;
    align-items: right;
    width: 60%;
    padding: 1rem 0;
    gap: 1rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    backdrop-filter: blur(30px);
  }

  
  .nav-links.open {
    margin-top: 50px;
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  
  .navbar-home .nav-links.open {
    top: 40px;
    width:100%;
    background: linear-gradient(59deg, #9fa1acfd, #2e69b8ee);
    color: #f1f7f7;
     backdrop-filter: blur(20px);
    transition: background-color 0.3s ease;
  }

  .nav-item {
    color:#f0e3e3;
    font-size: 1.1rem;
    text-align: center;
  }

  .lang-switch {
    position: absolute;
    top: 15px;
    right: 200px;
  }
}

.nav-links.open .nav-item {
  color: #4b4e4e !important;
}

.nav-links.open .nav-item:hover {
  color: rgb(107, 110, 110) !important;
  transform: scale(1.1);
  border-bottom: 2px solid rgb(132, 134, 134);
}


.navbar-home .nav-links.open .nav-item,
.navbar-contact .nav-links.open .nav-item {
  color: #abb3b3 !important;
}

</style>