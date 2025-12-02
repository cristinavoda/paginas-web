<template>
  <section class="muestras">
<div class="carousel"
     @mouseenter="stopAutoPlay"
     @mouseleave="startAutoPlay">

  <div class="carousel-inner"
       :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

    <img v-for="(img, i) in images"
         :key="i"
         :src="img"
         class="carousel-img"
         alt="portfolio">
  </div>

  <!-- Flechas -->
  <button class="arrow left" @click="prevImage">‹</button>
  <button class="arrow right" @click="nextImage">›</button>

  <!-- Paginación con puntitos -->
  <div class="dots">
    <span v-for="(img, i) in images" :key="i"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i">
    </span>
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
let autoPlay = null

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const startAutoPlay = () => {
  autoPlay = setInterval(nextImage, 3000)
}

const stopAutoPlay = () => {
  clearInterval(autoPlay)
}

onMounted(() => {
  startAutoPlay()
})
onUnmounted(() => stopAutoPlay())


</script>

<style scoped>
h2{
   font-size: 2.1rem;
  margin-top: 4rem;
   background: linear-gradient(45deg, rgb(184, 190, 190), #383a3a);
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
  color: rgb(85, 88, 88);
   
   font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card p {
   background: linear-gradient(45deg, #1e271e, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
}
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.65s ease-in-out;
}

.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  pointer-events: none;
}

/* Flechas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(253, 252, 252, 0.35);
  color: #fff;
  border: none;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 24px;
  transition: 0.3s;
}

.arrow:hover {
  background: rgba(0,0,0,0.55);
}

.left { left: 10px; }
.right { right: 10px; }

/* Paginación */
.dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dots span {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
}

.dots .active {
  background: #3d4142;
}


</style>
