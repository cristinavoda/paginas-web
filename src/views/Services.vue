<template>
  <section class="services">
    <h1 data-aos="fade-down">Nuestros Servicios</h1>
    <p data-aos="fade-up" data-aos-delay="200">
      Creamos páginas web personalizadas, interactivas y optimizadas para tu negocio.
    </p>

    <div class="cards">
      <div class="card" data-aos="fade-up" data-aos-delay="300">
        <h2>Diseño Web</h2>
        <p>Diseños modernos, elegantes y responsive para cualquier dispositivo.</p>
      </div>

      <div class="card" data-aos="fade-up" data-aos-delay="400">
        <h2>Desarrollo Frontend</h2>
        <p>Aplicaciones dinámicas con Vue, JS, HTML y CSS de última generación.</p>
      </div>

      <div class="card" data-aos="fade-up" data-aos-delay="500">
        <h2>SEO & Posicionamiento</h2>
        <p>Optimización para motores de búsqueda y estrategias para ampliar tu mercado.</p>
      </div>

      <div class="card" data-aos="fade-up" data-aos-delay="600">
        <h2>Mantenimiento Web</h2>
        <p>Actualizaciones, seguridad y soporte continuo para tu sitio web.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
.navbar {
    color:#555;
    background-color: #fff;
}
.services {
  min-height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fdfdfd;
  color: #23868f;
}

.services h1 {
  font-size: 2.5rem;
  margin-top: 3rem;
   text-shadow: 2px 2px 8px rgba(1, 0, 0,6);
}

.services p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #1e271e, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 250px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

.card h2 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  text-shadow: 2px 2px 8px rgba(0,1, 0, 0,0);
}


.card p {
  font-size: 1rem;
  color: #555;
}
</style>
