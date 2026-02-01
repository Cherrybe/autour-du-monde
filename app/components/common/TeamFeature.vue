<template>
  <div
    class="relative grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[420px_560px] gap-6 items-start"
  >
    <!-- Image -->
    <div
      class="relative h-[20rem] sm:h-[22rem] md:h-[26rem] lg:h-[34rem] rounded-xl overflow-hidden"
    >
      <NuxtImg
        :src="member.image"
        :alt="member.name"
        format="webp"
        class="absolute inset-0 h-full w-full object-cover object-top"
      />
    </div>

    <!-- Content -->
    <div class="rounded max-w-xl">
      <div>
        <p
          class="text-sm font-semibold tracking-wide text-base-black/60 uppercase"
        >
          {{ member.position }}
        </p>

        <h3 class="mt-2 text-2xl font-semibold text-base-black">
          {{ member.name }}
        </h3>

        <p class="mt-6 text-base leading-relaxed text-base-black/80">
          {{ member.bio }}
        </p>
      </div>

      <!-- Social links -->
      <div class="mt-6 flex gap-3">
        <a
          v-for="(link, i) in member.socials"
          :key="i"
          :href="link.url"
          target="_blank"
          class="size-8 rounded-full bg-blue-400"
          :aria-label="link.label"
        />
      </div>

      <!-- Tablet & Mobile navigation -->
      <button
        @click="$emit('prev')"
        class="lg:hidden absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/30 backdrop-blur shadow-md flex items-center justify-center text-base-black/70 hover:text-base-black transition"
        aria-label="Previous team member"
      >
        ‹
      </button>

      <button
        @click="$emit('next')"
        class="lg:hidden absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/30 backdrop-blur shadow-md flex items-center justify-center text-base-black/70 hover:text-base-black transition"
        aria-label="Next team member"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  member: {
    name: string;
    position: string;
    image: string;
    bio: string;
    socials: { label: string; url: string }[];
  };
}>();

defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();
</script>
