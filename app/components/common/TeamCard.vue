<template>
  <div
    class="group relative overflow-hidden rounded-2xl bg-neutral-900 h-[26rem] md:h-[28rem]"
  >
    <img
      :src="image"
      :alt="name"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
    />
    <!-- <NuxtImg
      :src="image"
      :alt="name"
      format="webp"
      sizes="(max-width: 768px) 100vw, 33vw"
      class="absolute inset-0 h-full w-full object-cover
             grayscale transition-all duration-500
             group-hover:grayscale-0 group-hover:scale-105"
    /> -->

    <div
      class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60"
    />

    <!-- Content -->
    <div class="relative z-10 flex h-full flex-col justify-end p-6">
      <div
        class="transform transition-transform duration-500 group-hover:-translate-y-20 lg:group-hover:-translate-y-16"
      >
        <h3 class="text-lg font-semibold text-base-white">
          {{ name }}
        </h3>
        <p class="mt-1 text-sm text-base-white/80">
          {{ position }}
        </p>
      </div>

      <p
        class="absolute bottom-6 left-6 right-6 text-sm leading-relaxed text-base-white/90 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
      >
        {{ bio }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  position: string;
  image: string;
  bio: string;
}>();
</script>
