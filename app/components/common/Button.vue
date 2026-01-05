<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Size = "small" | "medium" | "large";
type Variant = "filled" | "outline";
type Color = "primary" | "secondary";

const props = withDefaults(
  defineProps<{
    size?: Size;
    variant?: Variant;
    color?: Color;
    disabled?: boolean;
  }>(),
  {
    size: "medium",
    variant: "filled",
    color: "primary",
    disabled: false,
  }
);

const base =
  "inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const sizes: Record<Size, string> = {
  small: "h-8 px-4 text-sm",
  medium: "h-10 px-5 text-sm",
  large: "h-12 px-6 text-base",
};

const variants: Record<Variant, Record<Color, string>> = {
  filled: {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500",
    secondary:
      "bg-secondary-100 text-base-black hover:bg-secondary-200 focus-visible:ring-secondary-100",
  },
  outline: {
    primary: "border border-primary-500 text-primary-500 hover:bg-primary-100",
    secondary:
      "border border-secondary-100 text-base-black hover:bg-secondary-100/20",
  },
};

const classes = computed(() => [
  base,
  sizes[props.size],
  variants[props.variant][props.color],
  props.disabled && "opacity-50 pointer-events-none",
]);
</script>
