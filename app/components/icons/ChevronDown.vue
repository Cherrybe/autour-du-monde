<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="#1E88E5"
      d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
    size?: number;
  }>(),
  {
    color: "currentColor",
    size: 30,
  },
);
</script>
