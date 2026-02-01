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
  "@nuxtjs/i18n",
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
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  devtools: { enabled: true },
});
