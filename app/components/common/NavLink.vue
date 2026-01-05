<template>
  <NuxtLink
    :to="to"
    class="text-sm font-medium text-base-black hover:text-primary-600 transition-colors"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
