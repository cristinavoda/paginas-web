<template>
  <section class="info-page" data-aos="fade-up">
    <div class="info-container">
      <div class="info-image">
        <img src="/img/frontend.jpg" alt="Desarrollo Frontend" />
      </div>

      <div class="info-content">
        <h2>Desarrollo Frontend</h2>
        <p>
          Transformamos el diseño en una experiencia interactiva y funcional.  
          Implementamos interfaces modernas, fluidas y accesibles con tecnologías actuales 
          como <strong>Vue.js</strong>, <strong>React</strong> o <strong>JavaScript</strong> puro.
        </p>

        <ul>
          <li> Interfaces rápidas y optimizadas</li>
          <li>Código limpio y escalable</li>
          <li>Integración perfecta con el diseño</li>
          <li> Experiencia de usuario fluida en cualquier dispositivo</li>
        </ul>

        <router-link to="/servicios" class="btn">← Volver a Servicios</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./infoBase.css";
</style>
