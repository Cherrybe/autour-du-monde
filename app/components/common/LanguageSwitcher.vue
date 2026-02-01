<template>
  <button
    type="button"
    class="flex items-center gap-2
           px-3 py-2 rounded-full
           text-sm font-semibold
           text-base-black
           hover:text-primary-600
           transition-colors"
    @click="toggleLocale"
    aria-label="Switch language"
  >
    <!-- French -->
    <template v-if="locale === 'fr'">
      <!-- <img
        src="/icons/flags/fr.svg"
        alt="Français"
        class="h-4 w-4 rounded-sm"
      /> -->
      <span>FR</span>
    </template>

    <!-- English -->
    <template v-else>
      <!-- <IconsGlobe class="h-4 w-4" /> -->
      <span>EN</span>
    </template>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

const toggleLocale = async () => {
  await setLocale(locale.value === "fr" ? "en" : "fr");
};
</script>
