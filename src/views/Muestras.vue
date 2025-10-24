<template>
  <section class="muestras">

    <!-- 🌿 Carrusel principal -->
    <div class="carrusel-section" data-aos="zoom-in">
      <h2>Web Pages</h2>
      <div class="carousel">
        <button @click="prevImage" class="nav-btn glass-btn">‹</button>

        <div class="carousel-window">
          <transition name="fade" mode="out-in">
            <img :src="currentImage" :key="currentImage" alt="" class="carousel-image" />
          </transition>
        </div>

        <button @click="nextImage" class="nav-btn glass-btn">›</button>

         <div class="dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToImage(index)"
        ></span>
      </div>


      </div>
      
    </div>

    <!-- 💎 Cards para las demás secciones -->
    <div class="cards-container">
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <img src="/images/tienda-online/img13.png" alt="Tienda Online" />
        <h3>Tienda Online</h3>
        <p>Diseños modernos con carrito de compra, pasarelas de pago y gestión sencilla.</p>
      </div>

      <div class="card" data-aos="fade-up" data-aos-delay="400">
        <img src="/images/blogs/img27.png" alt="Blog Profesional" />
        <h3>Blog Profesional</h3>
        <p>Publica artículos, proyectos y novedades con un diseño adaptable y elegante.</p>
      </div>

      <div class="card" data-aos="fade-up" data-aos-delay="600">
        <img src="/images/web-corporativo/img2.png" alt="Web Corporativa" />
        <h3>Web Corporativa</h3>
        <p>Presenta tu empresa con una imagen profesional, clara y coherente.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/landings/img-1.png',
  '/images/landings/img-2.png',
  '/images/landings/img-3.png',
  '/images/landings/img-4.png',
  '/images/landings/img-5.png',
  '/images/landings/img-6.png',
  '/images/landings/img-7.png',
  '/images/landings/img-8.png',
  '/images/landings/img-9.png',
  '/images/landings/img12.png',
   '/images/landings/img15.png',
   '/images/landings/img21.png',
    '/images/landings/img20.png',
    '/images/landings/img23.png',
    '/images/web-corporativo/img25.png',
     '/images/web-corporativo/img28.png',
      '/images/blogs/img22.png',
      '/images/web-blogs/img24.png',
      '/images/web-blogs/img27.png',
      '/images/web-corporativo/img29.png',
      '/images/tienda-online/img16.png',
      '/images/tienda-online/img17.png',
      '/images/tienda-online/img18.png',
      '/images/tienda-online/img19.png',
      '/images/tienda-online/img10.png'


]

const currentIndex = ref(0)
const currentImage = ref(images[currentIndex.value])
let interval = null

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  currentImage.value = images[currentIndex.value]
}

onMounted(() => {
  interval = setInterval(nextImage, 4000) // autoplay suave
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
h2{
   font-size: 1.9rem;
  margin-bottom: 1rem;
  color: #e0e6e6;
   text-shadow: 2px 2px 8px rgba(0, 0, 0);
   font-size: 2rem;
}
.muestras {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.carrusel-section {
  text-align: center;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

.carousel-window {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.8s ease;
}

.glass-btn {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  color: #dfe2e2;
  font-size: 2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(156, 158, 158, 0.6);
  color: white;
  transform: scale(1.1);
}

/* ✨ Cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 184, 184, 0.2);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.card h3 {
  color: #888888;
   
   font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card p {
   background: linear-gradient(45deg, #1e271e, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
}

/* Animación fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
