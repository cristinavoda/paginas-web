<template>
  <section class="detalle-servicio" data-aos="fade-up">
   
      <div class="info-content">
        <h2>SEO y Posicionamiento</h2>
        <img src="/images/Services/seo.png" alt="SEO y Posicionamiento" class="detalle-img" />
 
        <p>
          Mejoramos la visibilidad de tu web en buscadores para que tus clientes te encuentren fácilmente.  
          Utilizamos técnicas de optimización modernas adaptadas a los nuevos algoritmos de Google.
        </p>

        
          <p> Optimización del contenido y palabras clave</p>
          <p> Mejora de rendimiento y tiempos de carga</p>
          <p> Estrategia de posicionamiento orgánico</p>
          <p>Análisis y seguimiento de resultados</p>
        

        <router-link to="/services" class="btn">← Volver </router-link>
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
.btn-volver:hover {
  background: darkcyan;
}
</style>
