<template>
  <section class="detalle-servicio" data-aos="fade-up">
    <div class="info-container">
      <div class="info-image">
        <img src="/images/Services/mantenimiento.png" alt="Mantenimiento Web" class="detalle-img"/>
      </div>

      <div class="info-content">
        <h2>Mantenimiento Web</h2>
        <p>
          Nos encargamos de mantener tu página siempre actualizada, segura y en perfecto funcionamiento.  
          Te ofrecemos soporte técnico continuo y actualizaciones sin interrupciones.
        </p>

        <ul>
          <li>Actualizaciones periódicas</li>
          <li> Copias de seguridad automáticas</li>
          <li> Seguridad reforzada y monitorización</li>
          <li> Soporte rápido y personalizado</li>
        </ul>

        <router-link to="/services" class="btn">← Volver </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1{
  margin-top: 7rem;
  color: darkcyan;
}
.detalle-servicio {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: auto;
}
.detalle-img {
  width: 100%;
  max-width: 600px;
  border-radius: 1rem;
  margin-bottom: 2rem;
}
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: .5rem 1rem;
  background: rgb(90, 87, 87);
  color: white;
  border-radius: .5rem;
  text-decoration: none;
}
.btn:hover {
  background: darkcyan;
}
</style>
