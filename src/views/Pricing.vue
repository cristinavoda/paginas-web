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
  max-width: 1180px;
  margin: 0 auto;
  padding: 8rem 2rem 7rem;
  color: #171818;
}


.intro {
  max-width: 850px;
  margin: 0 auto 5rem;
  text-align: center;
}

.intro h1 {
  margin: 0 0 1.8rem;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #171818;
}

.intro p {
  max-width: 720px;
  margin: 0 auto;
  color: #555;
  font-size: 1.05rem;
  line-height: 1.8;
}

.intro .small {
  margin-top: 1.8rem;
  font-size: 0.85rem;
  color: #777;
}

.intro .small strong {
  color: #006666;
  font-weight: 600;
}



.cta-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.btn-primary,
.btn-ghost {
  display: inline-block;
  min-width: 145px;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 0;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.btn-primary {
  
  color: #363636;
   border-bottom: 1px solid #777;

}

.btn-primary:hover {
  background: #f5f8f8;
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: #171818;
  border-bottom: 1px solid #777;
}

.btn-ghost:hover {
  color: #006666;
  border-color: #006666;
  transform: translateY(-2px);
}




.info-box {
  max-width: 650px;
  margin: 0 auto 6rem;
  padding: 2rem 2.5rem;
  background: #faf9f6;
  border-top: 1px solid #35a17d;
  border-bottom: 1px solid #c8b79f;
}

.info-box strong {
  display: block;
  margin-bottom: 0.8rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #171818;
}

.info-box p {
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.7;
}

.info-box ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.info-box li {
  margin: 0.5rem 0;
  color: #555;
  font-size: 0.9rem;
}



.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
}

.card-esencial,
.card-profesional,
.card-premium {
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: #fff;
  border: 1px solid #dedbd5;
  border-radius: 0;
  box-shadow: none;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.card-esencial:hover,
.card-profesional:hover,
.card-premium:hover {
  transform: translateY(-6px);
  border-color: #0a6f88;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}




.card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e4e1dc;
}

.card-header h3 {
  margin: 0 0 1rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.45rem;
  font-weight: 500;
  color: #171818;
}

.card-header h3 span {
  display: block;
  margin-top: 0.4rem;
  font-family: inherit;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #006666;
}

.price {
  font-size: 2rem;
  font-weight: 500;
  color: #006666;
}




.card-esencial > p,
.card-profesional > p,
.card-premium > p {
  min-height: 55px;
  margin: 0 0 1.5rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
}

.card-esencial ul,
.card-profesional ul,
.card-premium ul {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card-esencial li,
.card-profesional li,
.card-premium li {
  padding: 0.7rem 0;
  border-bottom: 1px solid #eee;
  color: #444;
  font-size: 0.9rem;
}

.card-esencial li::before,
.card-profesional li::before,
.card-premium li::before {
  content: '—';
  margin-right: 0.6rem;
  color: #9d8c73;
}




.btn-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2rem;
}

.btn-row .btn-primary,
.btn-row .btn-ghost {
  min-width: auto;
  padding: 0.6rem 0;
}


.card-esencial {
  border-top: 2px solid #8ee7e7;
}

.card-profesional {
  border-top: 2px solid #0c6e6e;
}

.card-premium {
  background: #faf9f6;
  border-top: 2px solid #9d8c73;
}




@media (max-width: 900px) {

  .pricing {
    padding: 7rem 1.5rem 5rem;
  }

  .cards {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .intro {
    margin-bottom: 4rem;
  }

  .info-box {
    margin-bottom: 4rem;
  }
}


@media (max-width: 600px) {

  .pricing {
    padding: 6rem 1.2rem 4rem;
  }

  .intro h1 {
    font-size: 1.9rem;
  }

  .intro p {
    font-size: 0.95rem;
  }

  .cta-row {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btn-primary,
  .btn-ghost {
    width: 100%;
    max-width: 260px;
  }

  .info-box {
    padding: 1.5rem;
  }

  .card-esencial,
  .card-profesional,
  .card-premium {
    padding: 2rem 1.5rem;
  }

  .btn-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-row .btn-primary,
  .btn-row .btn-ghost {
    width: 100%;
    text-align: center;
  }
}

</style>