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
      <article class="card-esencial" data-aos="zoom-in">
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

      <article class="card-profesional" data-aos="flip-left" data-aos-delay="100">
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

      <article class="card-premium" data-aos="zoom-in" data-aos-delay="200">
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
  display: flex;
  flex-wrap: wrap;          
flex-direction: row;
justify-content: center;
margin-left: auto;
  gap: 1rem;              
  margin-top: 2rem;         
}
.btn-primary {
   background-color: #f3f5f7;
  border: 0px solid  #6a6e6e;
  color: #595c5c;
  box-shadow: 2px 2px 2px rgba(123, 125, 126, 0.986);
  width: 140px;
  padding: 0.7rem 0.4rem 0.1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem; 
   transition: transform .3s ease, box-shadow .3s ease;
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
  width: 140px;
  padding: 0.7rem 0.4rem 0.1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
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
.cards-article {
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
  box-shadow: 0 12px 32px #0000001a;
}

.esencial {
  background: linear-gradient(135deg, #00bcd4, #f3f6f7);
}
.profesional {
  background: linear-gradient(135deg, #009688, #dae6e3);
}
.premium {
  background: linear-gradient(135deg, #a0f1eb, #00332a);
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #004d40;
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
  flex-direction: row;
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



.card-esencial {
  background: linear-gradient(120deg, #93edd5, #f3f6f7);
   border-radius: 12px;
   height: auto;
   padding: 2rem 2rem;
}
.card-profesional {
  background: linear-gradient(130deg, #7dd2ec, white);
   border-radius: 12px;
   height: auto;
   padding: 2rem 2rem;

}
.card-premium {
  background: linear-gradient(135deg, #deb3f0, #a6f0e5);
   border-radius: 12px;
    height: auto;
    padding: 2rem 2rem; 


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

@media (max-width: 768px) {
  .pricing {
    padding: 2rem;
  }
  .intro h1 {
    font-size: 1.8rem;
  }
  .cta-row {
  display: flex;
  flex-wrap: wrap;          
flex-direction: row;
margin-left: auto;
  gap: 1rem;              
  margin-top: 2rem;         
}
  .cards {
    grid-template-columns: 1fr;
  }
  .cards-article {
  width: 250px;
  display:flex; 
  margin-left: -1.3rem;
  flex-direction: column  ;
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

.card-esencial {
  background: linear-gradient(120deg, #93edd5, #f3f6f7);
   border-radius: 12px;
   height: auto;
   padding: 1.5rem 1.5rem;
     margin-left: -1rem;
     width: 300px;
}
.card-profesional {
  background: linear-gradient(130deg, #7dd2ec, white);
   border-radius: 12px;
   height: auto;
   padding:  1.5rem 1.5rem;
   width: 300px;
   margin-left: -1rem;

}
.card-premium {
  background: linear-gradient(135deg, #deb3f0, #a6f0e5);
   border-radius: 12px;
    height: auto;
    padding: 1.5rem 1.5rem; 
    margin-left: -1rem;
    width: 300px;


}

}
</style>
