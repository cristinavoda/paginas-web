<template>

  <section class="contact container">
    <h1 data-aos="fade-right">Contacto</h1>
    <p data-aos="fade-left">Estoy aquí para ayudarte a crear la página web que necesitas.</p>

    <div class="contact-container" data-aos="fade-up">
      <div class="contact-info">
        <h2>Información de contacto</h2>
   
    <a class="contact-link" href="tel:+34634688218">
      +34 6 34 68 82 18
    </a>

    <a class="contact-link" href="mailto:cristinavoda483@gmail.com">
      cristinavoda483@gmail.com
    </a>
      </div>  
</div>
<div class="contact-form" data-aos="fade-down">
         <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Tu nombre" required />
        <input type="email" v-model="email" placeholder="Tu email" required />
        <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
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
</template>


<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'

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
  AOS.refresh()
})
</script>


<style scoped>

.contact {
  min-height: 100vh;
  padding: 2rem 1rem 6rem;
  text-align: center;
  background: #ffffff;
  color: #545757;
}

/* ---------- TÍTULOS ---------- */

.contact h1 {
  margin-top: 6rem;
  font-size: 2rem;
  font-weight: 500;
  background: linear-gradient(45deg, #2f302f, #b9b5b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact h2 {
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #171818;
}

/* ---------- INTRO ---------- */

.contact > p {
  max-width: 700px;
  margin: 3rem auto 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}

/* ---------- INFORMACIÓN ---------- */

.contact-container {
  width: min(700px, 92%);
  margin: 3rem auto 0;
}

.contact-info {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  text-align: center;

  border-top: 1px solid #dedbd5;
  border-bottom: 1px solid #dedbd5;
}

.contact-info p {
  margin: 0.7rem 0;
  color: #555;
  line-height: 1.6;
}

.contact-link {
  display: block;
  width: fit-content;
  margin: 0.8rem auto;

  color: #555 !important;
  text-decoration: none !important;

  border-bottom: 1px solid #9d8c73;

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}

.contact-link:hover {
  color: #171818 !important;
  border-bottom-color: #171818;
}

/* ---------- FORMULARIO ---------- */

.contact-form {
  width: min(700px, 92%);
  margin: 4rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  background: transparent;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  box-sizing: border-box;

  padding: 0.8rem 0;
  margin-bottom: 1.2rem;

  border: none;
  border-bottom: 1px solid #ccc;

  background: transparent;

  font-size: 1rem;
  color: #3d3c3c;

  outline: none;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #888;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #414444;
  transform: scaleX(1.01);
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

/* ---------- BOTÓN ---------- */

.contact-form .btn {
  align-self: center;

  margin-top: 1rem;
  padding: 0.7rem 1.5rem;

  background: transparent;
  border: none;
  border-bottom: 1px solid #414444;

  color: #555;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.contact-form .btn:hover {
  background: #f1f5f5;
  color: #222;
  transform: translateY(-2px);
}

/* ---------- MAPA ---------- */

.map-container {
  width: min(900px, 92%);
  margin: 4rem auto 0;
}

.map-container iframe {
  width: 100%;
  height: 350px;
  border: 0;
  border-radius: 0;
}

/* ---------- RESPONSIVE ---------- */

@media (max-width: 768px) {

  .contact {
    padding: 1rem 1rem 5rem;
  }

  .contact h1 {
    margin-top: 4rem;
    font-size: 1.8rem;
  }

  .contact > p {
    width: 92%;
    margin-top: 2rem;
    font-size: 0.95rem;
  }

  .contact-container {
    width: 94%;
  }

  .contact-info {
    padding: 1.8rem 1rem;
  }

  .contact-info h2 {
    font-size: 1.3rem;
  }

  .contact-form {
    width: 94%;
    padding: 1rem 0;
    margin-top: 3rem;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
  }

  .map-container {
    width: 94%;
    margin-top: 3rem;
  }

  .map-container iframe {
    height: 300px;
  }
}

</style>