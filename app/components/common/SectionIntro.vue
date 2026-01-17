<template>
  <div
    class="flex items-center gap-2 text-sm font-medium text-base-black mb-3"
  >
    <img
      src="/images/globe.png"
      alt="Around the world icon"
      class="size-8 object-cover"
    >
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    label?: string;
  }>();
</script>