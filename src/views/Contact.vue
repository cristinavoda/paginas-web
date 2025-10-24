<template>
  <section class="contact">
    <h1 data-aos="fade-down">Contacto</h1>
    <p data-aos="fade-up" data-aos-delay="200">
      ¿Quieres una página web elegante y personalizada? ¡Hablemos!
    </p>
<div class="contact-cards">
  <!-- Tarjeta de contacto directo WhatsApp -->
 
     <a href="https://wa.me/34634688218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
             class="card" data-aos="fade-right" data-aos-delay="300"
          >
            <i class="fab fa-whatsapp"></i>
            <h2>Teléfono / WhatsApp</h2>
    <p>+34 634 688 218</p>
          </a>
  

  <!-- Tarjeta de contacto directo Email -->
  <a href="mailto: cristinavoda483@gmail.com" class="card" data-aos="fade-left" data-aos-delay="400">
    <h2>✉️ Email</h2>
    <p>cristinavoda483@gmail.com</p>
  </a>
  
      <div class="card" data-aos="fade-right" data-aos-delay="500">
        <h2> 🌐Ubicación</h2>
        <p>Lleida, Catalunya, España</p>
      </div>
</div>
   
     
    

    <!-- Formulario -->
    <div class="form-card" data-aos="fade-up" data-aos-delay="600">
      <h2>Envíanos un mensaje</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Tu nombre" required />
        <input type="email" v-model="email" placeholder="Tu email" required />
        <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
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
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fdfdfd;
  color: #002f33;
}

.contact h1 {
     font-size: 2.5rem;
  margin-bottom: 1rem;
  color: rgb(181, 190, 190);
   text-shadow: 2px 2px 8px rgba(1, 0, 0,6);
  
  
}

.contact p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #1e271e, #b4b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 250px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

.card h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: darkcyan;
}

.card p {
  font-size: 1rem;
  color: #555;
}

/* Formulario elegante */
.form-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 4px 8px 20px rgba(0,0,0,0.15);
}

.form-card h2 {
  margin-bottom: 1rem;
   margin-bottom: 1rem;
  color: rgb(181, 190, 190);
   text-shadow: 2px 2px 8px rgba(1, 0, 0,6);
  
}

.form-card input,
.form-card textarea {
  width: 90%;
  padding: 0.8rem 1rem;
  margin-left: 0.1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
 
  font-size: 1rem;
}

.form-card textarea {
  resize: vertical;
  min-height: 100px;
}

.btn {
  background-color: rgb(235, 241, 241);
   box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  color: rgb(56, 54, 54);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: rgb(196, 199, 199);
  transform: scale(1.05);
}
.whatsapp-button {
  position: fixed;
  width: 62px;
  height: 62px;
  bottom: 25px;
  right: 25px;
  color: white;
   background-color: #25d366;
   box-shadow: 0 0 20px rgba(226, 233, 228, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;}
</style>
