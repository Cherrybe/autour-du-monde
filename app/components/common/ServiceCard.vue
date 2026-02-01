<template>
  <div
    :class="[
      'relative rounded-xl p-8 bg-neutral-100',
      'flex flex-col h-full',
      'diagonal-border-gradient',
      spanClass
    ]"
  >
    <!-- Icon -->
    <div
      class="flex size-12 shrink-0
             items-center justify-center
             rounded-full mb-4"
      :class="iconBg"
    >
      <slot name="icon" />
    </div>

    <!-- Title -->
    <h3 class="text-2xl md:text-3xl font-medium text-base-black mb-3">
      {{ title }}
    </h3>

    <!-- Description -->
    <p
      class="font-body text-secondary-500
             text-lg leading-relaxed mb-6"
    >
      {{ description }}
    </p>

    <!-- CTA -->
    <button
      v-if="cta"
      class="mt-auto inline-flex items-center gap-1
             text-sm font-medium text-secondary-600
             hover:underline"
      @click="$router.push('#contact')"
    >
      {{ cta }} →
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  spanClass?: string;
  iconBg?: string;
  cta?: string;
}>();
</script>

<style scoped>
.diagonal-border-gradient {
  border: 1px solid transparent;
  border-image: linear-gradient(
      45deg,
      #e3b937,
      #0a1f44,
      #e3b937
    )
    1;
  transition:
    border-image 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.diagonal-border-gradient:hover {
  border-image: linear-gradient(
      135deg,
      #10b981,
      #059669
    )
    1;
}
</style>
