<template>
  <div class="grid grid-cols-1 md:grid-cols-[420px_560px]">
    <!-- Image -->
    <div class="relative h-[34rem] rounded overflow-hidden">
      <NuxtImg
        :src="member.image"
        :alt="member.name"
        format="webp"
        class="absolute inset-0 h-full w-full object-cover object-top"
      />
    </div>

    <!-- Content -->
    <div class="rounded-xl p-8 max-w-xl shadow-sm">
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

      <!-- Social links (max 3) -->
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
</script>
