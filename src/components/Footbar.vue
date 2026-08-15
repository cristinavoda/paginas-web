<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h2>Paginas web-Cristina Voda</h2>
        <p>Desarrollo de páginas web personalizadas y optimizadas para tu negocio.</p>
      </div>

      <div class="footer-links">
        <h3></h3>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
           <hr class="section-divider" /> 
          <li><router-link to="/services">Servicios</router-link></li>
            <hr class="section-divider" /> 
            <li><router-link to="/proyectos">Proyectos</router-link></li>
             <hr class="section-divider" />
          <li><router-link to="/muestras">Muestras</router-link></li>
            <hr class="section-divider" />
            <li><router-link to="/pricing">Precios</router-link></li>
             <hr class="section-divider" />

          <li><router-link to="/contact">Contacto</router-link></li>
          <hr class="section-divider" />





        </ul>
      </div>

      <div class="footer-social">
        <h3>Conecta conmigo</h3>
        <div class="social-icons">
          <a
            href="https://wa.me/34634688218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i class="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="mailto:paginaswebpersonalizadas.es@gmail.com"
            aria-label="Email"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Cristina Voda · Todos los derechos reservados · Lleida · Catalunya · España</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #f8fafa;
  backdrop-filter: blur(29px);
  color: #818586;
  
  padding: 0.1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.footer h2 {
  color: #555758;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  margin-bottom: 0.5rem;
}

.footer h3 {
  margin-bottom: 1rem;
  color: #545758;
}

.footer-links ul {
  list-style: none;
  padding: 1rem ;
}

.footer-links a {
  color: #77797a;
 text-decoration: none;
 padding: 1rem 1.5rem 1rem 1rem;
 gap: 1.5rem;
  font-size: 1.3rem;
  transition: color 0.3s;
  transition: color 0.3s, border-bottom 0.3s;
border-bottom: 2px solid transparent; 
}

.footer-links a:hover {
  color: #171718;
  border-bottom: 1px solid #1e1f20;
}
.section-divider {
  height: 0.5px;
  background-color: rgba(238, 242, 245, 0.902);
  width: 100px;
  
}
.social-icons {
  display: flex;
  justify-content: center;
   color: #575353;
  gap: 1.5rem;
  font-size: 1.6rem;
   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.social-icons a {
  color: #fff;
  transition: color 0.3s, transform 0.3s;
}

.social-icons a:hover {
  color: #0a3a81;
  transform: scale(1.15);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  margin-top: 1rem;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #7a7b7c;
}
</style>
