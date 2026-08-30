
<template>
  <section class="hero">
    
    
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/videos/web.mp4" type="video/mp4" />
    </video>

    
     <div class="white-reveal">
       <h1 class="title">Tu web de diseño</h1>

     <p class="stair-text">
  <span>Diseño web</span>
  <span>personalizado</span>
  <span>con enfoque</span>
  <span>profesional</span>
</p>

     </div>

    

  </section>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {

    const tl = gsap.timeline();

   
    tl.to(".white-reveal", {
    y: "-100%",
      duration: 2,
      delay: 1,
      ease: "power4.inOut"
    });

  
    tl.from(".title", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

   
    tl.from(".stair-text span", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    
    tl.from(".btn", {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");


   
    gsap.to(".hero-video", {
      y: 100,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-content", {
      y: 50,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }
};

</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-family: Roboto Slab;
  color:transparent;
  font-weight: 500;
  
  letter-spacing: -1px;
  margin-top: 40px;
  margin-left: 2rem;
}

p {
  font-size: 1.8rem;
  color: white;
   font-family: Roboto Slab;
  text-shadow: 2px 2px 4px black  ;  
  margin-top: 0px;
  opacity: 1;
  margin-left: -2rem;
}


.stair-text {
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fdfdfd;
 
}
.stair-text1 {
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  color: #fdfdfd;
  gap: 0.5rem;
  margin-top: 1rem;
  
 
}



.stair-text span:nth-child(1) { margin-left: 60px; margin-top: 2.5rem; color: white;font-size: 1.8rem; text-shadow: 2px 2px 4px solid black  ;   }
.stair-text span:nth-child(2) { margin-left: 160px; color: white; font-size: 1.8rem;}
.stair-text span:nth-child(3) { margin-left: 220px; color: white; font-size: 1.8rem; }

.stair-text span:nth-child(4) { margin-left: 240px;  color: white; font-size: 1.8rem; }
.stair-text span {
  opacity: 0;
  
  animation: reveal 0.8s ease forwards;
}

@keyframes reveal {
  to {
    opacity: 1;
    filter: blur(0);
  }
}



.scroll-indicator {
  position: absolute;
  bottom: 15px;
  font-size: 2.5rem;
  text-shadow: black 1px 1px 4px;
  color: white;
  opacity: 0.7;
  animation: bounce 1.5s infinite;
}
.hero {
  position: relative;
  height: 70vh;
  overflow: hidden;
}


.hero-video {
  position: absolute;
  width: 100%;
  height: 130%;
  top: -13%;
  object-fit: cover;
  z-index: 1;
}


.white-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
  margin-left: 2rem;
}
.white-reveal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items:first baseline;     
  text-align: center;
}

.hero-content {
position: relative;
  z-index: 3;
  text-align: center;
  max-width: 1800px;
  margin-top: -8rem;
  
  color: black;
  
}


.stair-text span {
  display: block;
}

.stair-text span:nth-child(2) { transform: translateX(1em); }
.stair-text span:nth-child(3) { transform: translateX(2em); }
.stair-text span:nth-child(4) { transform: translateX(3em); }


.btn {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 28px;
  border-radius: 30px;
  background: transparent;
  color: rgb(48, 47, 47);
   text-shadow:
    2px 2px 4px black,   
   -2px -2px 2px white;  
  border-bottom: rgb(80, 74, 74) 2px solid;
  text-decoration: none;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.white-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
}

@media (max-width: 768px) {
  .hero {
    height: 60vh;
  }


.fade-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-enter-active {
  transition: all 1s ease;
}

  .hero-video {
    width: 100%;       
    max-width: none;
    margin-left: 2rem;
  }
  p {
    font-size: 1.1rem;
  }
  
.stair-text1 {
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  color: #fdfdfd;
  gap: 0.5rem;
  margin-top: 0.9rem;
  
 
}
}
@media (max-width: 480px) {
  .hero-video {
    width: 90%;       
  }
   p {
    font-size: 1.1rem;
  }
  
}
@media (max-width: 600px) {

  .stair-text {
    width: 100%;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 1rem;
    font-size: 1.1rem;
  }

  .stair-text span {
    font-size: 1.3rem;
  }

  .stair-text span:nth-child(1) {
    margin-left: 0;
    margin-top: 1.5rem;
  }

  .stair-text span:nth-child(2) {
    margin-left: 30px;
  }

  .stair-text span:nth-child(3) {
    margin-left: 60px;
  }

  .stair-text span:nth-child(4) {
    margin-left: 90px;
  }
}
</style>