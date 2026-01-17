<template>
  <div
    :class="[
      'relative rounded p-6 flex flex-col h-full',
      themeClasses
    ]"
  >
    <!-- Quote icon -->
    <IconsQuote
      :color="iconColor"
      :size="40"
      class="mb-4 shrink-0"
    />

    <!-- Content -->
    <div class="flex flex-col flex-1">
      <p class="text-lg font-body font-medium leading-relaxed mb-6">
        <slot />
      </p>

      <!-- Author -->
      <span class="mt-auto font-medium opacity-90">
        {{ author }}
      </span>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{
  author: string
  theme?: 'primary' | 'secondary' | 'black'
}>()

type ThemeClasses = {
  [key in 'primary' | 'secondary' | 'black']: string
}

const themeClasses = computed(() => {
  const themes: ThemeClasses = {
    primary: 'bg-primary-500 text-base-white',
    secondary: 'bg-secondary-100 text-primary-900',
    black: 'bg-base-black text-base-white'
  }

  return themes[props.theme ?? 'primary']
})

const iconColor = computed(() => {
  return {
    primary: '#E3B937',
    secondary: '#0A1F44',
    black: '#E3B937'
  }[props.theme ?? 'primary']
})
</script>
