<template>
  <section class="detalle-servicio" data-aos="fade-up">
    
    <h1>Desarrollo Frontend</h1>
    <img src="/images/Services/frontend.jpg" alt="Desarrollo Frontend" class="detalle-img" />
    <p>
  Construimos interfaces interactivas con tecnologías modernas como Vue.js, HTML5, CSS3 y JavaScript. </p> 
 <p> Nuestras soluciones combinan rendimiento, accesibilidad y estética para ofrecer una experiencia fluida en cualquier dispositivo o navegador.
</p>

<p>
  El <strong>responsive design</strong> garantiza que un sitio web se vea y funcione correctamente en todo momento.  </p>
  <p>Gracias a los lenguajes mencionados anteriormente, especialmente CSS, personalizamos la experiencia de usuario para que el mismo sitio web se pueda consumir adecuadamente desde ordenadores, móviles, tablets e incluso relojes inteligentes.

</p>
<p>
  Garantizar que los sitios web sean <strong>accesibles</strong> a todo tipo de personas es una necesidad actual de la web por muchos motivos.  
  Por su parte, la <strong>usabilidad</strong> permite que los sitios web sean fáciles de usar y comprensibles para todos.
</p>

    <router-link to="/services" class="btn-volver">← Volver</router-link>
  </section>
</template>

<style scoped>
 h1{
  margin-top: 7rem;
  color: rgb(89, 94, 94);
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
  background: rgb(94, 91, 91);
  color: white;
  border-radius: .5rem;
  text-decoration: none;
  box-shadow: 2px 6px darkcyan;
}
.btn-volver:hover {
  background: darkcyan;
} 

</style>
