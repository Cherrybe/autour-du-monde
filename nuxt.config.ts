import config, { app } from "./app.config";

const modules = [
  "@nuxtjs/tailwindcss",
  "@nuxt/eslint",
  "@pinia/nuxt",
  "@vueuse/nuxt",
  "@nuxt/hints",
  "@nuxt/icon",
  "@nuxt/image",
  "lenis/nuxt",
  "@nuxtjs/robots",
  "@nuxtjs/sitemap",
  "shadcn-nuxt",
];

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules,
  image: {
    provider: "ipx",
  },
  css: ["@/assets/css/fonts.css", "@/assets/css/tailwind.css"],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  runtimeConfig: {
    public: {
      breakpoints: config.breakpoints,
      app: app,
    },
  },
  eslint: {
    checker: true,
  },
  devtools: { enabled: true },
});
