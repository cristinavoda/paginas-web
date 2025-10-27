<template>
  <section class="servicios" data-aos="fade-up">
    <h1 class="section-title">Servicios</h1>

    <div class="cards">
      <div
        v-for="(servicio, index) in servicios"
        :key="index"
        class="card"
        data-aos="fade-up"
        :data-aos-delay="200 + index * 100"
      >
       <h2>{{ servicio.titulo }}</h2>
        <img :src="servicio.imagen" :alt="servicio.titulo" class="card-img" />
        
        <p>{{ servicio.descripcion }}</p>
        <button class="btn-info" @click="mostrarInfo(servicio)">
          Más información
        </button>
      </div>
    </div>

    <!-- Card ampliada -->
    <transition name="fade">
      <div v-if="servicioActivo" class="info-card">
        <h3>{{ servicioActivo.titulo }}</h3>
        <p>{{ servicioActivo.detalle }}</p>
        <button @click="cerrarInfo" class="btn-cerrar">Cerrar</button>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const servicioActivo = ref(null)

const servicios = [
  {
    titulo: 'Diseño Web',
    descripcion: 'Diseños modernos, elegantes y responsive para cualquier dispositivo.',
    detalle: 'Creamos sitios únicos, combinando estética, funcionalidad y rendimiento. Adaptamos el diseño a la identidad visual de tu marca.Creamos sitios web estratégicos, visualmente atractivos y optimizados para convertir visitantes en clientes. Nuestro enfoque combina diseño, usabilidad y posicionamiento SEO para impulsar tu negocio desde el primer clic. Desde la planificación hasta la publicación, te acompañamos en cada paso para asegurarnos de que tu web sea rápida, funcional y alineada con tu marca.',
    imagen: '/images/Services/diseno-web.jpg'
  },
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Aplicaciones dinámicas con Vue, JS, HTML y CSS de última generación.',
    detalle: 'Interfaces reactivas, rápidas y modernas. Implementamos animaciones, transiciones suaves y código limpio.',
    imagen: '/images/Services/frontend.jpg'
  },
  {
    titulo: 'SEO & Posicionamiento',
    descripcion: 'Optimización para motores de búsqueda y estrategias para ampliar tu mercado.',
    detalle: 'Mejoramos la visibilidad de tu sitio mediante SEO técnico, contenido optimizado y análisis de palabras clave.Creamos sitios web estratégicos, visualmente atractivos y optimizados para convertir visitantes en clientes. Nuestro enfoque combina diseño, usabilidad y posicionamiento SEO para impulsar tu negocio desde el primer clic. Desde la planificación hasta la publicación, te acompañamos en cada paso para asegurarnos de que tu web sea rápida, funcional y alineada con tu marca.',
    imagen: '/images/Services/seo.png'
  },
  {
    titulo: 'Mantenimiento Web',
    descripcion: 'Actualizaciones, seguridad y soporte continuo para tu sitio web.',
    detalle: 'Nos encargamos de que tu web esté siempre actualizada, segura y funcionando al máximo rendimiento.',
    imagen: '/images/Services/mantenimiento.png'
  }
]

function mostrarInfo(servicio) {
  servicioActivo.value = servicio
}

function cerrarInfo() {
  servicioActivo.value = null
}
</script>

<style scoped>
h2{
  color: #555;
}
.servicios {
  text-align: center;
  padding: 4rem 2rem;
}

.section-title {
  font-size: 2.5rem;
  margin-top: 5rem;
  color: darkcyan;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 5px 10px 15px rgba(42, 114, 156, 0.25);
}



.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.btn-info {
  background: linear-gradient(135deg, #ebf0f0, #fbfdfd);
  color: rgb(86, 90, 90);
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 2px 2px 2px rgba(60, 110, 139, 0.986);
}

.btn-info:hover {
  background: linear-gradient(135deg, #f6f8f8, #004f4f);
  transform: scale(1.05);
}

/* Card con info ampliada */
.info-card {
  margin-top: 3rem;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn-cerrar {
  margin-top: 1rem;
  background: #555;
  color: white;
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cerrar:hover {
  background: #222;
}

/* Animación fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
