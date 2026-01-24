<template>
  <section class="pricing" data-aos="fade-up">
    <div class="intro">
      <h1>Diseño y desarrollo web personalizado — claridad y precio justo</h1>
      <p>
        Sitios profesionales, accesibles y económicos para autónomos , pequeños Y grandes negocios en Lleida,empresas,,asociaciones,eventos, Catalunya y toda España. 
        Muestra tu negocio online destacando con una web personalizada, funcional y fácil de mantener.
      </p>
      <div class="cta-row">
        <router-link class="btn-primary" to="/contact">Pedir presupuesto</router-link>
        <router-link class="btn-ghost" to="/services">Ver servicios</router-link>
      </div>
      <p class="small">Pack básico desde <strong>150 €</strong> — Mantenimiento opcional / Precios orientativos</p>
    </div>

    <aside class="info-box" data-aos="fade-up" data-aos-delay="200">
      <strong>¿Primera web?</strong>
      <p>Te ayudo a tener presencia online rápidamente: dominio, hosting, diseño y formulario de contacto.</p>
      <ul>
        <li>Entrega en 7-10 días</li>
        <li>Pago fraccionado disponible</li>
        <li>Soporte inicial incluido</li>
      </ul>
    </aside>

    <h2 class="section-title" data-aos="fade-up"></h2>
    <div class="cards">
      <article class="card" data-aos="zoom-in">
        <div class="card-header">
          <h3>Pack Esencial</h3>
          <div class="price">150 €</div>
        </div>
        <p>Ideal para autónomos que necesitan presencia online profesional y rápida.</p>
        <ul>
          <li>Hasta 3 secciones</li>
          <li>Diseño responsive</li>
          <li>Formulario de contacto + WhatsApp</li>
          <li>Dominio y hosting 1er año</li>
          <li>1 revisión</li>
        </ul>
        <div class="btn-row">
          <router-link class="btn-primary" to="/contact">Contratar</router-link>
          <router-link class="btn-ghost" to="/contact">Más info</router-link>
        </div>
      </article>

      <article class="card popular" data-aos="flip-left" data-aos-delay="100">
        <div class="card-header">
          <h3>Pack Profesional <span>(Más popular)</span></h3>
          <div class="price">350 €</div>
        </div>
        <p>Para quienes buscan más control y una presencia de marca completa.</p>
        <ul>
          <li>Hasta 6 secciones</li>
          <li>Identidad visual y estilo</li>
          <li>Formulario avanzado</li>
          <li>Panel autogestionable (opcional)</li>
          <li>30 días soporte</li>
        </ul>
        <div class="btn-row">
          <router-link class="btn-primary" to="/contact">Contratar</router-link>
          <router-link class="btn-ghost" to="/portfolio">Ver demo</router-link>
        </div>
      </article>

      <article class="card" data-aos="zoom-in" data-aos-delay="200">
        <div class="card-header">
          <h3>Pack Premium</h3>
          <div class="price">650 €</div>
        </div>
        <p>Soluciones completas: ecommerce, integraciones y rendimiento avanzado.</p>
        <ul>
          <li>Hasta 10 secciones o tienda básica</li>
          <li>SEO avanzado + analítica</li>
          <li>Pagos & pasarelas</li>
          <li>3 meses soporte</li>
          <li>Formación personalizada</li>
        </ul>
        <div class="btn-row">
          <router-link class="btn-primary" to="/contact">Contratar</router-link>
          <router-link class="btn-ghost" to="/contact">Solicitar demo</router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 800, once: true })
</script>

<style scoped>
.pricing {
  padding: 3rem 4rem;
  max-width: 1200px;
  margin: auto;
   color: #0e6666;
}
.intro {
  text-align: center;
  margin-bottom: 3rem;
}
h1 {
  font-size: 1.9rem;
  margin-top: 6rem;
  font-size: 2.1rem;
  margin-top: 4rem;
   background: linear-gradient(45deg, #1a1b1a, #bdb8b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
   
   font-size: 2rem;
   font-weight: 500;
}
p {
  color: #333;
  line-height: 1.6;
}
.cta-row {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.btn-primary {
  background-color: #f3f7f7;
  color: rgb(87, 90, 90);
   border: 0px solid #5e6868;
   box-shadow: 2px 2px 2px rgba(79, 86, 90, 0.986);
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}
.btn-primary:hover {
  background-color: rgb(219, 245, 245);
  transform: scale(1.05);
}
.btn-ghost {
   background-color: #f3f5f7;
  border: 0px solid  #6a6e6e;
  color: #595c5c;
  box-shadow: 2px 2px 2px rgba(123, 125, 126, 0.986);
  padding: .7rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
   transition: transform .3s ease, box-shadow .3s ease;
}
.btn-ghost:hover {
  background-color: rgb(219, 245, 245);
  transform: scale(1.05);
}
.info-box {
  background: linear-gradient(180deg, #ffffff, #f2fbfb);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 4px 6px 20px rgba(0,0,0,.04);
  margin: 0 auto 3rem;
  max-width: 500px;
}
.info-box ul {
  padding-left: 1.2rem;
  color: #464444;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0,0,0,.1);
}
.popular {
  border: 2px solid #e8f0f0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
  color: #5b6163;
  font-size: 1.2rem;
    
}
.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #008b8b;
}
.btn-row {
  display: flex;
  justify-content: flex-start;
  gap: .5rem;
  margin-top: 1rem;
}
ul{
  color:#464444;}
li{
  color:#464444
}
.section-title {
  text-align: center;
  margin: 3rem 0 2rem;
 color: rgb(181, 190, 190);
   
   font-size: 2rem;
}
</style>
