<template>
  <section class="muestras">

    <div class="carrusel-section" data-aos="fade-up">
      <h2>Web Pages</h2>
      <div class="carousel">
        <button @click="prevImage" class="nav-btn glass-btn">‹</button>

        <div class="carousel-window">
         <transition name="slide" mode="out-in">
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
  '/images/landings/img20.png',
  
 '/images/landings/img20.png',
 '/images/landings/img3.png',
  '/images/landings/img-4.png',
 
  
  '/images/landings/img7.png',
  
 
  '/images/landings/img12.png',
  '/images/web-corporativo/img14.png',
  
   '/images/landings/img21.png',

    
    
     '/images/web-corporativo/img28.png',

      '/images/blogs/img22.png',
      
      
     
      
      
      
      
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
  interval = setInterval(nextImage, 4000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
h2{
   font-size: 2.1rem;
  margin-top: 4rem;
   background: linear-gradient(45deg, darkcyan, #0596a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
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
.slide-enter-active, .slide-leave-active {
  transition: all 1.2s ease-in-out;
  
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0.9s ease-in-out;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0.8s ease-in-out;
}



.carousel-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 9px 18px 18px rgba(107, 113, 114, 0.959);
  
}

.glass-btn {
  background: rgb(250, 252, 252);
  border: 1px solid rgba(193, 220, 238, 0.4);
  backdrop-filter: blur(8px);
  color: darkcyan;
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
  box-shadow: 0 6px 18px rgba(119, 115, 115, 0.1);
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
  color: darkcyan;
   
   font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card p {
   background: linear-gradient(45deg, #1e271e, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 3.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
