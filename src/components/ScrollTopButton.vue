<template>
  <button
    v-show="showButton"
    class="scroll-top"
    @click="scrollToTop"
    aria-label="Volver arriba"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 25px;
  right: 95px;
  background-color: transparent; 
  color: rgb(49, 51, 51);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
 border: none;
  z-index: 9998;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.9;
}

@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-5px); }
}
.scroll-top:hover {
  transform: scale(1.3);
  color:rgb(63, 66, 66);
}

@media (max-width: 768px) {
  .scroll-top {
    right: 20px;
    bottom: 90px; 
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    color: rgb(63, 66, 66);
  }

}
</style>
