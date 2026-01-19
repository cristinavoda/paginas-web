<template>

  <div class ="contact-bg">

    <div class="contact-container">

      
      <div class="contact-info">
        <h2 data-aos="fade-down">Contacto</h2>
       <a href="mailto:paginaswebpersonalizadas.es@gmail.com" class="btn email-btn" title="paginasweb">
    <span class="btn-text">paginasweb</span>
  <img src="/icons/logo.png" alt="Email" class="btn-icon" />
</a>

        
       
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
  </div>
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
.navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    box-shadow: 0 2px 8px rgba(251, 253, 253, 0.938);
    transition: background-color 0.3s ease;
  }

  .nav-item {
    color: inherit;
    font-size: 1.1rem;
    text-align: center;
  }
.contact{
  min-height: 100vh;
  padding: 2rem 1rem;
  text-align: center;
  background-color: transparent;
   background-size: cover;       
  background-position: center;  
  background-repeat: no-repeat; 
  color: #f3f8f8;
  color: #eef3f3;
}

 p {
     font-size: 1rem;
  margin-top: 3rem;
  color: rgb(249, 253, 253);
  }
.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 190%;
  height: 100%;
  z-index: 1;
  color: #fff;
}
h2 {
  font-size: 2rem;
  margin-top: 5rem;
  background: linear-gradient(45deg, #9a9e9a, #f8f5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;
}

.btn-text {
  display: inline-flex;         
  align-items: center;          
  gap: 0.5rem;                  
  padding: 0.1rem 0.5rem;
  background-color: transparent;
  border: #e5f3ee;
  
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.3s;
}

.email-btn:hover {
  background-color: #3f4241;
   border-bottom: #e5f3ee;
}

.btn-icon {
  width: 20px;                  
  height: 20px;
}


.form-card h2 {
  margin-bottom: 1rem;
   margin-bottom: 1rem;
  color: rgb(253, 253, 253);
   
  
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 2rem;
   color: #fcf9f9;
width: 90%;
}



.contact-form input,
.contact-form textarea {
  color: #fff;
  background-color: transparent; 
  padding: 0.8rem;
  border-radius: 8px;
  width: 80%;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.7); 
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: darkcyan; 
  background-color: rgba(255, 255, 255, 0.15);
}


.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: rgb(232, 240, 240);
  transform: scaleX(1.02);
}


.contact-form textarea {
  resize: vertical;
  min-height: 100px;
}



.btn {
  background-color: transparent;
   box-shadow: 0 1px 2px rgb(191, 197, 197);
  color: rgba(118, 120, 122, 0.938);
  width: fit-content;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: rgb(222, 230, 230);
  border-bottom: #e5f3ee;
  transform: scale(1.05);
  color:#f3f8f8
} .map-container {
    right: 25px;
    top: 1rem;
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



 
@media (max-width: 768px) {
  .navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1d1561;
    box-shadow: 0 2px 8px rgba(251, 253, 253, 0.938);
    transition: background-color 0.3s ease;
  }

  

  .hamburger {
    display: flex;
    top: 15px;
    right: 30px;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #1d0c79; 
    transition: all 0.3s ease;
    margin: 1px 0;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 40px;
    background-color: rgba(20, 7, 131, 0.95);
    flex-direction: column;
    align-items: right;
    width: 30%;
    padding: 1rem 0;
    gap: 1rem;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
  }

  
  .nav-links.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  
  
  .nav-item {
    color: rgba(255, 249, 249, 0.945);;
    font-size: 1.1rem;
    text-align: center;
  }

  .lang-switch {
    position: absolute;
    top: 15px;
    right: 200px;
  }
}
.contact-bg
 {

  background-image: url('/background-presentacion.png'); 
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto; 
background-position: center;

  
}

.contact-container {

  gap: 1rem;
   max-width: 600px;
  margin: 1 auto;
  background-color: rgba(240, 234, 234, 0.062);
   backdrop-filter: blur(20px); 
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(19px);
  border: 1px solid rgba(185, 184, 184, 0.918);
  color: #fff;

}

.contact-info {
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.email-btn {
  
  position: relative;
  color: rgb(234, 237, 240);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

}
.email-btn:hover {
   background-color: rgb(49, 51, 51);
   color: rgb(247, 248, 248);
  transform: scale(1.05);
}

.contact-form {
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 0.5rem;
  background-color: transparent;
   
   padding: 15px;
  border-radius: 12px;
 color: #fff;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px #031a08;
}
input, textarea {
    box-sizing: border-box;
    max-width: 100%;
  }
.contact-form button {
  grid-row: 6;
  justify-self: end;
  padding: 0.7rem 1rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: #f5efef;
  
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px black;

  }
  
.contact-form button:hover {
  background: rgba(167, 163, 163, 0.5);
  transform: scale(1.03);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
@media (max-width: 768px) {
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
</style>