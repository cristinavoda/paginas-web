<template>
<div id="app">

  <Navbar />
  <router-view />
   <button 
      v-show="showButton"
      @click="scrollToTop"
      class="scroll-top-btn"
      title="Volver arriba"
    >
      <span class="arrow">⭡</span>
    </button>

  <Footer />
  <WhatsAppButton />
  <PhoneButton />
</div>
</template>


<script setup>



import Navbar from './components/Navbar.vue'
import Footer from './components/Footbar.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import PhoneButton from "./components/PhoneButton.vue";
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 300; 
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>


<style>
:root {
--darkcyan: #006b6b;
--accent: #00a3a3;
--bg: #f6f7f8;
--card: #ffffff;
--muted: #6b7280;
--radius: 14px;
}
body {
margin: 0;
font-family: 'Inter', system-ui, sans-serif;
background: var(--bg);
color: #0f172a;
}
.promo-banner {
  top: 150px;
  background: linear-gradient(90deg, #004d4d, #006b6b);
  color: rgb(15, 73, 100);
  text-align: center;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  gap: .5rem;
  flex-wrap: wrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .15);
}

.promo-banner strong {
  color: #aef0e0;
  font-weight: 700;
}

.banner-link {
  background: white;
  color: #006b6b;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all .3s ease;
}

.banner-link:hover {
  background: #aef0e0;
  color: #003333;
}

.scroll-top-btn {
position: fixed;
bottom: 8rem;
right: 2rem;
background-color: rgb(247, 248, 248);
color: darkcyan;
border: none;
border-radius: 50%;
width: 55px;
height: 55px;
font-size: 2.2rem;
cursor: pointer;
box-shadow: 0 6px 16px rgba(0,0,0,0.35);
transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
z-index: 1000;
display: flex;
align-items: center;
justify-content: center;
}


.scroll-top-btn:hover {
background-color: #0b8a8a;
color: #ffffff;
transform: scale(1.15);
box-shadow: 0 8px 20px rgba(0,0,0,0.45);
}


.arrow {
display: inline-block;
font-weight: bold;
font-size: 1.8rem;
animation: float 1.5s ease-in-out infinite;
}


@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-5px); }
}
</style>