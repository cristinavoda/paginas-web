<template>
  <section class="info-page" data-aos="fade-up">
    <div class="info-container">
      <div class="info-image">
        <img src="/img/diseno-web.jpg" alt="Diseño Web" />
      </div>

      <div class="info-content">
        <h2>Diseño Web</h2>
        <p>
          Creamos sitios web únicos, atractivos y totalmente adaptados a las necesidades de tu marca.
          Cada proyecto combina estética moderna, estructura intuitiva y tecnología optimizada
          para garantizar una experiencia de usuario impecable.
        </p>

        <ul>
          <li> Diseño responsive y personalizado</li>
          <li>Adaptación a móviles, tablets y ordenadores</li>
          <li> Navegación intuitiva y coherente</li>
          <li> Colores y tipografía acordes a tu identidad</li>
        </ul>

        <router-link to="/servicios" class="btn">← Volver a Servicios</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// No es necesario código JS extra aquí
</script>

<style scoped>
.info-page {
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1100px;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-content {
  padding: 2rem;
  text-align: left;
}

h2 {
  color: #004d4d;
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  margin-bottom: 1rem;
  color: #444;
  line-height: 1.6;
}

ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

li {
  margin: 0.4rem 0;
  color: #333;
}

.btn {
  display: inline-block;
  background-color: #008b8b;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #006f6f;
}

/* Responsivo */
@media (max-width: 768px) {
  .info-container {
    grid-template-columns: 1fr;
  }

  .info-content {
    text-align: center;
  }

  .info-content ul {
    text-align: left;
    display: inline-block;
  }
}
</style>
