<template>
  
  <section class="home">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/world.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    <div class="color-overlay"></div>

    <div class="hero-content" data-aos="fade-up">
      <div class="typewriter">
        <p id="message"></p>
      </div>
    </div>
  </section>

<section class="process-section" data-aos="fade-up">
    <h2>Cómo trabajamos</h2>

<div class="process-cards">
    <div class="card">
      <span class="step-number">01</span>
      <h3>Consulta Inicial</h3>
      <p>Analizamos tu negocio y objetivos para crear una estrategia web enfocada en resultados y preparada para convertir.</p>
    </div>

    <div class="card">
      <span class="step-number">02</span>
      <h3>Diseño & Prototipo</h3>
      <p>Creamos un diseño moderno y funcional que refleje tu marca y potencie la conversión desde el primer clic.</p>
    </div>

    <div class="card">
      <span class="step-number">03</span>
      <h3>Desarrollo</h3>
      <p>Construimos tu sitio con tecnologías actuales (HTML, JS, Tailwind) priorizando velocidad, SEO y seguridad.</p>
    </div>

    <div class="card">
      <span class="step-number">04</span>
      <h3>Lanzamiento</h3>
      <p>Optimizamos cada detalle, realizamos pruebas y lanzamos tu web lista para atraer clientes desde el primer día. No pagas hasta que la web esté funcionando.</p>
    </div>
  </div>
    </section>

   <hr class="section-divider" /> 

   <section class="portfolio container">
      <h2 data-aos="fade-up">Proyectos Recientes</h2>
      <div class="projects">
        <div class="project-card" data-aos="flip-up" v-for="(project, index) in portfolio" :key="index">
          <img :src="project.imagen" :alt="project.titulo" />
          <h3>{{ project.titulo }}</h3>
           <a :href="project.link" target="_blank" class="project-link">Ver proyecto</a>
        </div>
      </div>
    </section>
  
     <hr class="section-divider" /> 

 <section id="precios" class="pricing-section" data-aos="fade-in">

  <h2 class="section-title">Planes y Precios</h2>
  
<div class="pricing-container">
   
    <div class="pricing-card basic">
      <h3>Básico</h3>
      <p class="subtitle">Sencillo, eficiente, perfecto</p>
      <p class="price">150€ </p>
      <ul>
        <li>Hosting incluido</li>
        <li>Diseño web sencillo / corporativa</li>
        <li>Hasta 3 secciones</li>
        <li>Dominio y SSL incluidos</li>
        <li>25GB SSD</li>
        <li>Mantenimiento 24/5</li>
        <li>SEO básico</li>
      </ul>
     
    </div>

    
    <div class="pricing-card advanced">
      <h3>Avanzado</h3>
      <p class="subtitle">La excelencia hecha web</p>
      <p class="price">350€ </p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web avanzado</li>
        <li>Hasta 4 secciones</li>
        <li>100GB SSD</li>
        <li>Mantenimiento 24/7</li>
        <li>Optimización de rendimiento</li>
        <li>Google My Business</li>
      </ul>
     
    </div>

    
    <div class="pricing-card premium">
      <h3>Premium</h3>
      <p class="subtitle">Soluciones premium, resultados premium</p>
      <p class="price">650€ </p>
      <ul>
        <li>Todo lo del plan anterior</li>
        <li>Diseño web profesional</li>
        <li>Secciones ilimitadas</li>
        <li>200GB SSD</li>
        <li>Mantenimiento prioritario 24/7</li>
        <li>WooCommerce e IA</li>
        <li>Copias de seguridad diarias</li>
      </ul>
      
    </div>
  </div>
</section>

 <hr class="section-divider" /> 
 <section class="features-section" data-aos="fade-up">
<div class="feature">
      <h3>Performance</h3>
      <p>Sitios web ultra rápidos que mejoran la experiencia del usuario.</p>
      <ul>
        <li>Core Web Vitals</li>
        <li>CDN Integration</li>
        <li>Image Optimization</li>
        <li>Caching</li>
      </ul>
      <img src="/images/performance.jpg" alt="Blog Profesional" />
    </div>

 


    <div class="feature">
      <h3>Diseño UI/UX</h3>
      <p>Interfaces elegantes y intuitivas que convierten visitantes en clientes.</p>
      <ul>
        <li>Diseño Personalizado</li>
        <li>Experiencia de Usuario</li>
        <li>Branding</li>
        <li>Prototipado</li>
      </ul>
       <img src="/images/ui-ux.jpg" alt="Blog Profesional" />
    </div>
    
  </section>

 <hr class="section-divider" /> 

 <div class="feature">

   <section class="contact">
  <div class="contact-container">

      
      <div class="contact-info">
        <h2 data-aos="fade-down">Contacto</h2>
       </div>

      <div class="contact-form" data-aos="fade-down">
         <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Tu nombre" required />
        <input type="email" v-model="email" placeholder="Tu email" required />
        <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
     </div>
    </div>

    <div class="card-ubication" data-aos="fade-up" data-aos-delay="500">
        <h2> Ubicación</h2>
        <div class="map-container">
        <iframe
  width="100%"
  height="350"
  style="border:0; border-radius: 12px;"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.037566902099!2d0.7984!3d41.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6a7b692cf2a05%3A0x93bf9f0f7e2e76cc!2sCarrer%20Sant%20Miquel%2C%2012%2C%2025254%20Bell-lloc%20d'Urgell%2C%20Lleida!5e0!3m2!1ses!2ses!4v1731589912345"
>
</iframe>
</div>

        <p>Lleida, Catalunya, España</p>
    </div>
  </section>
  </div>
<hr class="section-divider" />
</template>

<script setup>
import {ref,  onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
})

const router = useRouter();
function goToServices() {
  router.push("/services");
}

const lines = [
  "Tu página web es tu carta",
  "de presentación hacia el mundo.",
  "es más que un espacio digital",
  "Puede ser simple y convincente,",
  " dinámica y diferente,",
  "Puede ser como tú quieras.",
  "Una web con estilo no solo se ve bien", 
  "habla por ti incluso cuando tú no estás",
   "Nosotros podemos crearla para ti."
];

const portfolio = [
   {
    titulo: 'Web Design',
    imagen: '/images/proyecto7.png',
    link: 'https://paginaswebeconomicas-cristinavodacom.es/'
  },
  
  {
    titulo: 'Studioart',
    imagen: '/images/proyecto1.jpg',
    link: 'https://interiorista.netlify.app/'
  },
  {
    titulo: 'Hotel Mirage',
    imagen: '/images/proyecto.png',
    link: 'https://hotelmirageweb.netlify.app/'
  },
  
  {
    titulo: 'Landing page',
    imagen: '/images/pagina-roxana.png',
    link: 'https://roxana-oana-calin-pshicolog-terapeut.netlify.app/'
  }
]

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert(`Gracias ${name.value}, tu mensaje ha sido enviado!`)
  name.value = ''
  email.value = ''
  message.value = ''
}
onMounted(() => {
  const messageElement = document.getElementById("message");
  let lineIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        messageElement.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 55);
      } else {
        messageElement.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeEffect, 400);
      }
    }
  }

  typeEffect();
});
</script>

<style scoped>
  html, body {
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.home {
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #565858;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(5, 90, 248, 0.25),
    rgba(35, 67, 116, 0.555)
  );
  mix-blend-mode: soft-light;
  z-index: -1;
}
@keyframes colorShift {
  0% {
    background: linear-gradient(
      45deg,
      rgba(56, 226, 226, 0.918),
      rgba(18, 56, 105, 0.35)
    );
  }
  50% {
    background: linear-gradient(
      45deg,
      rgba(0, 180, 180, 0.45),
      rgba(0, 255, 255, 0.35)
    );
  }
  100% {
    background: linear-gradient(
      45deg,
      rgba(5, 162, 235, 0.966),
      rgba(24, 95, 161, 0.932)
    );
  }
}

@keyframes zoomVideo {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1); 
  }
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 100%;
  padding: 0 1.5rem; 
  text-align: center;
}


.typewriter p {
  font-size: 1.6rem;
  line-height: 1.8;
  color: rgb(240, 232, 232);
  font-weight: 400;
  white-space: pre-line;
  text-align: left;
   max-width: 800px;
   margin-top: 8rem;;
  margin-bottom: 2rem;
  border-right: 3px solid rgb(176, 187, 187);
  animation: blink 0.8s step-end infinite;
  text-shadow: 2px 2px 2px rgba(15, 15, 15, 0.925);
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



.process-section, .features-section {
  background-color: white;
  padding: 4rem 2rem;
  text-align: left;
}

.process-section {
  background-color: #fff;
  padding: 5rem 2rem;
  text-align: center;
}

.process-section h2 {
  font-size: 2rem;
  margin-bottom: 2px 3rem;
  color: #2a5b88;
}
 .process-section-h2-hover {
  border-bottom: 2px #a1a5a7;
 }
.process-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.card {
  background: #f9f9f9;
  border-left: 4px solid rgb(0, 100, 139);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.15);
}

.step-number {
  font-weight: bold;
  color: rgb(0, 76, 139);
  font-size: 1.2rem;
  
  
   
}
.process-cards .card p {
  color: #4b4e4e;
  font-size: 1rem;
}

.features-section {
  background: #ffffff;
  padding: 5rem 2rem;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  color: #071b8f;
  margin-bottom: 3rem;
}

.feature {
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: left;
}

.feature h3 {
  font-size: 1.5rem;
  color: rgb(34, 110, 209);
}

.feature p {
  margin-top: 0.5rem;
  color: #222121;
  font-size: 1.2rem;
}

.feature hr {
  border: none;
  border-top: 1px solid #d9e0dd;
  margin: 1rem 0;
}

.feature ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature li {
  padding: 0.3rem 0;
  color: #555;
}
.feature img {
  width: 550px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}
.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right,rgb(148, 150, 150) , rgb(194, 195, 197), rgb(156, 158, 158));
  border: none;
  margin: 4rem auto;
  opacity: 0.6;
}


.feature ul {
  list-style: none;
  padding: 0;
}

.feature li {
  margin-bottom: 0.5rem;
}

.feature img {
  width: 60;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 10px 4px 10px rgba(31, 76, 90, 0.87);
}

.features h3 {
  color: darkcyan;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.features p {
  font-size: 1.5rem;
  margin-bottom: 1rem;

}
.service-cards, .projects {
  background-color: transparent;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card, .project-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s,  box-shadow 0.3s ease;
}

.card:hover, .project-card:hover {
  transform: translateY(-10px);
}
.project-card img {
  width: 98%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.portfolio h2,
.pricing-section h2 {
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  width: 100%;
margin-bottom: 4rem;
}

.project-card h3 {
  margin-top: 0.8rem;
  color: #0f4392;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #1e90ff; 
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #4b4e4e; }


  .pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}


.pricing-card {
  width: 300px;
  border-radius: 20px;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: fadeInUp 0.8s ease forwards;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}


.basic {
  background: linear-gradient(135deg, #00bcd4, #f3f6f7);
}
.advanced {
  background: linear-gradient(135deg, #009688, #dae6e3);
}
.premium {
  background: linear-gradient(135deg, #a0f1eb, #00332a);
}


.pricing-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: white;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  color: white;
}

.price {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 1px 2px#141414;
}

.price span {
  font-size: 1rem;
  opacity: 0.8;
}


.pricing-card ul {
  text-align: left;
  margin: 1rem 0;
  list-style: none;
  padding: 0;
}

.pricing-card ul li {
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.btn {
  background: #fff;
  color: #004d40;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #e0f7fa;
}


@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact{
  min-height: 100vh;
  padding: 1rem 5rem;
  text-align: center;
  background-color: transparent;
   background-size: cover;       
  background-position: center;  
  background-repeat: no-repeat; 
  color: #f3f8f8;
}

 p {
  font-size: 1rem;
  margin-top: 1rem;
  color: rgb(166, 168, 168);
  }
.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
}
h2 {
  font-size: 2rem;
  margin-top: 0.1rem;
  background: linear-gradient(45deg, #141414, #f8f5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
}



.form-card h2 {
  margin-bottom: 1rem;
   margin-bottom: 1rem;
  color: rgb(253, 253, 253);
   
  
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 1.8rem;

  border: none !important;
  border-bottom: 2px solid rgba(73, 75, 75, 0.849) !important;
  background: transparent;
  outline: none;

  font-size: 1rem;
  color: #eef3f3;

  border-radius: 0;
  box-shadow: none;
}

.map-container {
    right: 25px;
    top: 1rem;
  }
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .hero-content p {
    font-size: 1.3rem;
  }
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  home {
    min-height: 100svh; 
    width: 100%;}

  .hero-content {
    padding: 0 1rem;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1.1rem;
  }
  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
  .feature {
flex-direction: column;
text-align: center;
}


.feature img {
margin: 1rem auto 0;
width: 80%;
}
.line-separator {
  width: 350px;}
 .contact-form {
    width: 90%;
    padding: 0,5rem;
  }

  .contact {
    padding: 1rem;
    background-size: cover; 
  }

  .contact-form {
    width: 90%;
    padding: 1rem;
  }
}


@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}


</style>
