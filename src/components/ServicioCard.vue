<template>
  <div 
    class="card hover:scale-105 transition-transform cursor-pointer"
    @click="$emit('select', servicio)"
  >
    <img :src="servicio.img" alt="" class="rounded-t-2xl w-full h-48 object-cover" />
    <div class="p-4 bg-white shadow rounded-b-2xl">
      <h3 class="text-lg font-semibold">{{ servicio.titulo }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps(['servicio'])
defineEmits(['select'])
</script>
