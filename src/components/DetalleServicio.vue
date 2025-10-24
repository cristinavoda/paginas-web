<template>
  <div v-if="servicio" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-6 max-w-lg shadow-xl relative">
      <button @click="$emit('cerrar')" class="absolute top-3 right-3 text-gray-600 hover:text-black">✖</button>
      <img :src="servicio.img" alt="" class="rounded-2xl mb-4 w-full h-56 object-cover" />
      <h2 class="text-2xl font-bold mb-2">{{ servicio.titulo }}</h2>
      <p class="text-gray-700 leading-relaxed">{{ servicio.descripcion }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['servicio'])
defineEmits(['cerrar'])
</script>
