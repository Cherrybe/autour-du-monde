<template>
  <button
    class="relative h-full w-full rounded-xl overflow-hidden focus:outline-none transition opacity-80 hover:opacity-100"
  >
    <img
      :src="image"
      :alt="name"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover object-top"
    >
    <!-- <NuxtImg
      :src="image"
      :alt="name"
      format="webp"
      class="absolute inset-0 h-full w-full object-cover object-top"
    /> -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  name: string;
}>();
</script>
