<template>
  <section class="detalle-servicio" data-aos="fade-up">
    <div class="info-container">
      
      <div class="info-content">
        <h2>Mantenimiento Web</h2>
         <div class="info-image">
        <img src="/images/Services/mantenimiento.png" alt="Mantenimiento Web" class="detalle-img"/>
      </div>
        <p>
          Nos encargamos de mantener tu página siempre actualizada, segura y en perfecto funcionamiento.  
          Te ofrecemos soporte técnico continuo y actualizaciones sin interrupciones.
        </p>

        
          <li>Actualizaciones periódicas</li>
          <li> Copias de seguridad automáticas</li>
          <li> Seguridad reforzada y monitorización</li>
          <li> Soporte rápido y personalizado</li>
        

        <router-link to="/services" class="btn">← Volver </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2{
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: rgb(92, 95, 95);
  font-family: 'Playfair Display', serif;
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
  border-radius: 0rem;
  margin-bottom: 2rem;
}
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: .5rem 1rem;
  font-weight: 600;
  color: rgb(77, 74, 74);
  border-bottom: 2px solid rgb(80, 74, 74);
  text-decoration: none;
}
.btn:hover {
  background: rgb(117, 121, 121);
}
</style>
