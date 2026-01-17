<template>
  <div class="flex items-start gap-6">
    <!-- Number -->
    <div
      class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500 font-semibold"
    >
      {{ number }}
    </div>

    <!-- Content -->
    <div>
      <h3 class="text-2xl font-body font-semibold text-base-black">
        {{ title }}
      </h3>

      <p class="mt-2 font-body text-lg text-secondary-600 leading-relaxed max-w-[36rem]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>
