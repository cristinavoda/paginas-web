<template>
  <section class="servicios">
    <h1>Servicios</h1>

     <hr class="section-divider" /> 

    <div class="servicios">
      <div
        v-for="servicio in servicios"
        :key="servicio.titulo"
        class="servicios"
        data-aos="fade-up"
      >

      <h2 class="h2">{{ servicio.titulo }}</h2>
        <img :src="servicio.imagen" :alt="servicio.titulo" class="card-img" />
       
        <p>{{ servicio.descripcion }}</p>
        <router-link :to="servicio.ruta" class="btn-info">Más información</router-link>
          <hr class="section-divider" /> 
      </div>
    </div>
    
  </section>
</template>

<script setup>
const servicios = [
  {
    titulo: 'Diseño Web',
    descripcion: 'Diseños modernos y responsive para cualquier dispositivo.',
    imagen: '/images/Services/diseno-web.jpg',
    ruta: '/informacion/diseno-web'
  },
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Aplicaciones dinámicas con Vue, JS, HTML y CSS.',
    imagen: '/images/Services/frontend.jpg',
    ruta: '/informacion/desarrollo-frontend'
  },
  {
    titulo: 'SEO & Posicionamiento',
    descripcion: 'Optimización para motores de búsqueda.',
    imagen: '/images/Services/seo.png',
    ruta: '/informacion/seo'
  },
  {
    titulo: 'Mantenimiento Web',
    descripcion: 'Soporte continuo y actualizaciones.',
    imagen: '/images/Services/mantenimiento.png',
    ruta: '/informacion/mantenimiento'
  }
]

</script>

<style scoped>
h1 {
   background: linear-gradient(55deg, #0a0a0afd, #ecf0f0ee);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   text-align: center;
   margin-top: 6rem;
}
.servicios {
  padding: 3.5rem 2rem;
  max-width: 1200px;
  margin: auto;
}
.line-separator {
  width: 100%;
  max-width: 100%;
  height: 1px;
  background: linear-gradient(to right,  rgb(112, 112, 116), rgb(235, 232, 232), rgb(81, 81, 83));
  margin: 0.1rem 0;
  animation: drawFlow 2s ease-out forwards, gradientFlow 3s linear infinite;
  opacity: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 3rem;

}


.card {
  width: 100%;
  max-width: 550px;
  background: #f7f5f5;
  border-radius: 0rem;
  box-shadow: 0px 12px 45px rgba(0, 0, 0, 0.06);
  padding: 2rem 3.5rem;
  text-align: center;
  transition: all 350ms ease;
  border: 1px solid #e9e9e9;
}

.card-img:hover {
  transform: scale(1.05);

  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.08);
}


.card-img {
  width: 100%;
  height: 400px;
  border-radius: 0rem;
  object-fit: cover;
  margin-bottom: 1.2rem;
}


 h2 {
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #464949;
  
}


.card p {
  color: #555;
  font-size: 1rem;
  line-height: 1.55;
  min-height: 70px;
}


.btn-info {
  display: inline-block;
  margin-top: 1.2rem;
  margin-bottom: 3.5rem;
  padding: 0.7rem 1.4rem;
  border-bottom: 1px solid #4c5050;
  color: rgb(106, 109, 109);
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

.btn-info:hover {
  background: rgb(241, 245, 245);
  color: #222121;
}


@media (max-width: 768px) {
  .servicios {
    padding: 2rem 1rem;
  }
  h1 {
    margin-top: 6rem;
    font-size: 2.4rem;
  }
}

@media (min-width: 769px) and (max-width: 1199px) {
  .card-img {
    width: 70%;
    height: auto;
    margin: 0 auto 1rem;
    display: block;
    border-radius: 0rem;
  }
}


@media (min-width: 1200px) {
  .card-img {
    width: 65%;
    height: auto;
    margin: 0 auto 1.2rem;
    display: block;
    border-radius: 0rem;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
  }
}

</style>