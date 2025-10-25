<template>
  <section class="home">
    
    <video autoplay muted loop class="background-video">
      <source src="/videos/online-store.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    
    <div class="hero-content" data-aos="fade-up"> 
  <div class="hero-title">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <img src="/logo.png" alt="Logo CV Páginas Web" class="logo-img" />
      </router-link>
    </div>
    <h1> Páginas Web</h1>
  </div>

  <p>Creamos páginas web elegantes, interactivas y personalizadas para tu negocio.</p>
  <button @click="goToServices" class="btn" data-aos="zoom-in">
    Descubre mis servicios
  </button>
</div>

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'

const router = useRouter()

function goToServices() {
  router.push('/services')
}

onMounted(() => {
  AOS.refresh()

const video = document.querySelector('.background-video')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    
    video.style.transform = `scale(1.1) translateY(${scrollY * 0.2}px)`
  })
})
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(1.1);
   animation: zoomVideo 20s ease-in-out infinite alternate; 
}
@keyframes zoomVideo {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1); 
  }
}
.hero-title {
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 12px; 
}

.logo-img {
  width: 60px; 
  height: auto;
  gap: 3rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  gap: 3rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
   background: linear-gradient(45deg, #ffffff, #f0f3f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 8px rgba(79, 82, 83, 0.781);
  gap: 3rem; 
}
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10rem 20rem;
  gap: 5rem;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5rem;
}

.logo-img {
  width: 58px; 
  height: 58px;
  object-fit: contain;
  border-radius: 50%; 
 
  transition: transform 0.3s ease;
  gap: 3rem;
}

.logo-img:hover {
  transform: scale(1.1);
}


.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ffffff, #f6f7f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
 
}

.btn {
  background-color: rgb(237, 241, 241);
  background: linear-gradient(45deg, #c8e9e9, #f0eeee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
 border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor:  pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 2px 8px 20px rgba(239, 242, 243, 0.897);
  color:black;
}

.btn:hover {
  background-color: rgb(23, 100, 100);
  
   transform: scale(1.1);
}

/* Home responsive */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .hero-content p {
    font-size: 1.3rem;
  }
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1.1rem;
  }
  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

</style>
