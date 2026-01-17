<template>
  <NuxtLink
    :to="to"
    :class="[
      'text-sm font-medium transition-colors',
      themeClasses
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  theme?: 'light' | 'dark' | 'footer'
}>()

type ThemeMap = {
  light: string
  dark: string
  footer: string
}

const themeClasses = computed(() => {
  const themes: ThemeMap = {
    light: 'text-base-black hover:text-primary-600',
    dark: 'text-base-white hover:text-primary-300',
    footer: 'text-base-white/90 hover:text-base-white'
  }

  return themes[props.theme ?? 'light']
})
</script>
