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
h2{
  margin-top: 5rem;
  color: rgb(107, 114, 114);
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
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: .5rem 1rem;
  font-weight: 600;
  color: rgb(70, 68, 68);
  text-decoration: none;
  border-bottom: 2px solid rgb(80, 74, 74);
}
.btn-volver:hover {
  background: rgb(122, 126, 126);
}
</style>
