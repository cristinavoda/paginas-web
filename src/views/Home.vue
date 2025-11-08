<template>
  <section class="home">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/online-store.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    <div class="color-overlay"></div>

    <div class="hero-content" data-aos="fade-up">
      <div class="typewriter">
        <p id="message"></p>
      </div>

      <button @click="goToServices" class="btn" data-aos="zoom-in">
        Descubre mis servicios
      </button>
      
    </div>
  </section>
<div class="line-separator" data-aos="fade-up"></div>

 
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

 <hr class="section-divider" />
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
    <hr class="section-divider" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
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
  "O dinámica y diferente,",
  "Puede ser como tú quieras.",
  "Una web con estilo no solo se ve bien", 
  "habla por ti incluso cuando tú no estás",
   "Nosotros podemos crearla para ti."
];

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
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 6rem;
  color: #eaf7f7;
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
    rgba(5, 248, 248, 0.25),
    rgba(0, 183, 255, 0.555)
  );
  mix-blend-mode: soft-light;
  z-index: -1;
}
@keyframes colorShift {
  0% {
    background: linear-gradient(
      45deg,
      rgba(56, 226, 226, 0.918),
      rgba(0, 128, 255, 0.35)
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
      rgba(5, 126, 238, 0.932)
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
  max-width: 600px;
}

.typewriter p {
  font-size: 1.6rem;
  line-height: 1.8;
  font-weight: 400;
  white-space: pre-line;
  text-align: left;
   max-width: 800px;
   margin-top: 8rem;;
  margin-bottom: 2rem;
  border-right: 3px solid darkcyan;
  animation: blink 0.8s step-end infinite;
  text-shadow: 0 2px 8px rgba(46, 44, 51, 0.4);
}

.btn {
  background-color: rgb(237, 241, 241);
  background: linear-gradient(45deg, #c8e9e9, #f0eeee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
 border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor:  pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 2px 8px 20px rgba(239, 242, 243, 0.897);
  color:black;
}

.btn:hover {
  background-color: rgb(23, 100, 100);
  
   transform: scale(1.1);
}
.line-separator {
  width: 0;
  height: 4px;
  margin: 4rem auto;
  background: linear-gradient(270deg, #00ffff, rgb(220, 218, 245), #00c3ff, cyan);
  border-radius: 5px;
  animation: drawFlow 2s ease-out forwards, gradientFlow 3s linear infinite;
  opacity: 0;
}

@keyframes drawFlow {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 80%;
    opacity: 1;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.line-separator {
  background-size: 200% 200%; }


@keyframes drawLine {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 80%;
    opacity: 1;
  }
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
  margin-bottom: 3rem;
  color: #0d8067;
}
 .process-section-h2-hover {
  border-bottom: #0b628a;
 }
.process-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.card {
  background: #f9f9f9;
  border-left: 4px solid darkcyan;
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
  color: darkcyan;
  font-size: 1.2rem;
  margin-left: 80px;
  text-shadow: 1px 2px 2px#6ec1cf;
   
}
.features-section {
  background: #ffffff;
  padding: 5rem 2rem;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  color: #0d8067;
  margin-bottom: 3rem;
}

.feature {
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: left;
}

.feature h3 {
  font-size: 1.5rem;
  color: darkcyan;
}

.feature p {
  margin-top: 0.5rem;
  color: #333;
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
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}
.section-divider {
  width: 60%;
  height: 2px;
  background: linear-gradient(to right, transparent, darkcyan, transparent);
  border: none;
  margin: 4rem auto;
  opacity: 0.6;
}


.section-divider::before {
  content: "";
  position: absolute;
  width: 30%;
  height: 2px;
  background: darkcyan;
  animation: moveLine 4s infinite alternate ease-in-out;
}

@keyframes moveLine {
  0% { transform: translateX(-10%); opacity: 0.8; }
  100% { transform: translateX(110%); opacity: 0.5; }
}
.feature {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap; 
  margin-bottom: 2rem;
}

.feature ul {
  list-style: none;
  padding: 0;
}

.feature li {
  margin-bottom: 0.5rem;
}

.feature img {
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 10px 4px 10px rgba(7, 106, 136, 0.87);
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
