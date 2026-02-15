<template>
  <nav :class="['navbar',
  { 
    open: isOpen, 
    'navbar-home': isHome,
    'navbar-contact': route.path === '/contact'
  }
]">

    
    <div class="logo">
  <router-link to="/" class="logo-link">
    <img src="/logo.png" alt="Logo CV Páginas Web" class="logo-img" />
  
  </router-link>
</div>

 <h1>Paginas web</h1>
   
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
  text-shadow: 1px 2px 2px rgb(241, 241, 241);
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(18px);
  padding: 2rem 2rem;
  gap: 7rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
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
  text-shadow:  2PX 2px 4px black;
  
}
.nav-links a.router-link-exact-active {
  color: rgb(56, 58, 58);
  border-bottom: 2px solid rgb(53, 51, 51);
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
  margin-left: 10px;
  
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

.logo-img:hover {
  transform: scale(1.1);
}

.navbar h1 {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.9rem;
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
  color: #889191;
}

.logo a {
 color: #5c5959;
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  
 
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



@media (max-width: 768px) {
 
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
 display: flex;
  justify-content: space-between;
  align-items: center;
 padding:10px 24px;
  z-index: 1000;
}
  
.nav-item {
  margin-top: auto;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  color: #b1b4b4;
  padding: 0,1rem ;
  gap: 0.1rem;
  text-shadow:  2px 2px 4px black;
  
  
}
 
.navbar-contact {
  
  background: rgb(68, 78, 105) !important;
  box-shadow: none !important;
}

.navbar-contact .nav-item {
  margin-top: -10px;
   color: #888f8f !important;
  gap: 0.2rem;
}
 .navbar-contact .nav-links.open {
     color: #515555 !important;
    gap: 0.1rem;
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
    position: fixed;    
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;         
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    background: rgba(253, 253, 255, 0.97);
    backdrop-filter: blur(25px);

    z-index: 9999;        

    transform: translateX(100%);
    transition: transform 0.4s ease;
  }

  .nav-links.open {
    margin-top: 80px;
    display: flex;
     background-color: white;
    opacity: 1;
    gap: 0.1rem;
    color: #515555;
    text-shadow: rgb(245, 236, 236) solid 3px 2px;
    transform: translateY(0);
  }

  
  .navbar-home .nav-links.open {
     width:100%;
    color: #575858;
     backdrop-filter: blur(20px);
     gap: 0.1rem;
    transition: background-color 0.3s ease;
   
  }

  .nav-item {
    color:#615d5d;
    font-size: 1.5rem;
    text-align: center;
    gap:0.1rem;
  }



.nav-links.open .nav-item {
  color: #6b6e6e !important;
   
    background-color: white  !important;
    gap: 0.1rem;
}

.nav-links.open .nav-item:hover {
  color: rgb(16, 17, 17) !important;
  text-shadow: 2p 2px white;
  transform: scale(1.1);
  border-bottom: 2px solid rgb(63, 66, 66);
}


.navbar-home .nav-links.open .nav-item,
.navbar-contact .nav-links.open .nav-item {
  color: #5d5f5f !important;
  background-color: #3b4770;
  height: 100%;
  gap:0.1rem;
}
.navbar-services .nav-links.open .nav-item,
.navbar-projects .nav-links.open .nav-item,
.navbar-muestrass .nav-links.open .nav-item {
  color: #474747 !important;
  background-color: white  !important;
  height: 100%;
   gap:0.1rem;
}

.navbar h1 {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  color: #ecf0f0;
  text-shadow:  2px 2px 4px black;
  margin: 0;
  line-height: 1;
  
}
}

@media (min-width: 1200px) {
  .navbar {
    gap: 5rem; 
  }
}
@media (max-width: 768px) {
  .hamburger {
    display: flex;
    right: 20px;
  }
  @media (max-width: 768px) {

  .nav-items {
    position: fixed;
    inset: 0;
    height: 100vh;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;  
    align-items: center;

    padding-top: 10px; 
    gap: 0.1rem;        

    overflow-y: auto;   
  }

}
}
</style>