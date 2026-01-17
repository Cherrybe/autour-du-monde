<template>
  <div
    :class="[
      'relative rounded p-8 transition-shadow w-[24.938rem] bg-neutral-100 diagonal-border-gradient',
      'flex flex-col min-h-full',
      spanClass,
    ]"
  >
    <div
      class="flex size-12 shrink-0 items-center justify-center rounded-full mb-4"
      :class="iconBg"
    >
      <slot name="icon" />
    </div>

    <h3 class="text-3xl font-medium text-base-black mb-2">
      {{ title }}
    </h3>

    <p
      class="font-body text-secondary-500 text-xl leading-normal relaxed mb-4"
    >
      {{ description }}
    </p>

    <button
      v-if="cta"
      class="mt-auto inline-flex items-center gap-1 text-sm font-medium text-secondary-600 hover:underline"
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
  /* Set a transparent border first so border-image has space to render */
  border: 1px solid transparent;
  /* Define the diagonal color flow around the border */
  border-image: linear-gradient(
      45deg,
      /* This controls the diagonal direction */ #e3b937,
      #0a1f44,
      #e3b937
    )
    1; /* The '1' slices the image correctly to fill the border area */

  /* Add a transition for hover effects if you want */
  transition:
    border-image 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.diagonal-border-gradient:hover {
  border-image: linear-gradient(
      135deg,
      /* Changes the angle on hover */ #10b981,
      #059669
    )
    1;
}
</style>
