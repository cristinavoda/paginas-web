<template>
<div id="app">


 <Navbar />
  <router-view />
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

</style>