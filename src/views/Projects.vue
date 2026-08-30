<template>
  <section class="portfolio container">
    <h1 data-aos="fade-right">Proyectos</h1>
    

    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in portfolio"
        :key="index"
        data-aos="fade-up"
      >
        <h3>{{ project.titulo }}</h3>
        <img :src="project.imagen" :alt="project.titulo" />

        <div class="project-info">
       
          <a
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="project-link"
          >
            Ver proyecto →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolio = [
  {
    titulo: 'Restaurante Sensus ',
    imagen: '/images/sensus.png',
    link: 'https://sensusrestaurante.netlify.app/'
  },
  {
    titulo: 'Abogada Maria de Luca',
    imagen: '/images/maria.png',
    link: 'https://abogada-maria-de-luca.netlify.app/'
  },
  
  {
    titulo: 'Hotel Mirage',
    imagen: '/images/proyecto.png',
    link: 'https://hotelmirageweb.netlify.app/'
  },
  {
    titulo: 'Studioart',
    imagen: '/images/proyecto1.jpg',
    link: 'https://interiorista.netlify.app/'
  },
  
  {
    titulo: 'Landing page',
    imagen: '/images/pagina-roxana.png',
    link: 'https://roxana-oana-calin-pshicolog-terapeut.netlify.app/'
  },
  
   {
    titulo: 'Web Design',
    imagen: '/images/Innovaweb.png',
    link: 'https://paginaswebeconomicas-cristinavodacom.es/'
  },
  
]
</script>
<style>
.projects-grid {
  background-color: transparent;
  display: flex;
  padding: 2rem 1rem;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card, .project-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0px;
  text-align: center;
 width: 270px;
  height: 480px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s,  box-shadow 0.3s ease;
}

.card:hover, .project-card:hover {
  transform: translateY(-10px);
}
.service-cards img {
  width: 98%;
  border-radius: 0px;
  margin-bottom: 1rem;

}

.project-card img {
  width: 98%;
  height: 70%;
  border-radius: 0px;
  margin-bottom: 1rem;
}
.project-card h3 {
  margin-top: 0.8rem;
  color: #454647;
  font-family: "Roboto Slab";
  font-size: 1.3rem;
  margin-bottom: 3rem;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-family: 'Roboto Slab';
  color: #474849; 
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #171818;
  font-weight: 800;
border-bottom: 1px solid black }
 
</style>