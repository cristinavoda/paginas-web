<template>
  <section class="detalle-servicio" data-aos="fade-up">
     <h1>Diseño Web</h1>
    <img src="/images/Services/diseno-web.jpg" alt="Diseño Web" class="detalle-img" />
    <p>
        Creamos aplicaciones web interactivas y dinámicas con las últimas tecnologías.
        Cada proyecto se adapta a las necesidades de tu negocio y ofrece una experiencia
        de usuario fluida y atractiva.
      </p>

      <p>
        Nos aseguramos de que tu web sea:
      </p>

      
        <li>Responsive: se ve perfecta en cualquier dispositivo.</li>
        <li>Rápida: optimizada para tiempos de carga mínimos.</li>
        <li>Interactiva: con animaciones y elementos modernos que mejoran la UX.</li>
        <li>Mantenible: código limpio y documentado para futuras actualizaciones.</li>
      

      <p>
        Nuestro objetivo es que tu web no solo funcione bien, sino que también impacte a tus visitantes y los convierta en clientes.
      </p>

   
    <router-link to="/services" class="btn-volver">← Volver</router-link>
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
.btn-volver {
  display: inline-block;
  margin-top: 2rem;
  padding: .5rem 1rem;
  background: black;
  color: white;
  border-radius: .5rem;
  text-decoration: none;
}
.btn-volver:hover {
  background: darkcyan;
}
</style>
