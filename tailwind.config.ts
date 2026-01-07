import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./app/**/*.{vue,ts}", "./pages/**/*.{vue,ts}"],

  theme: {
    extend: {
      colors: {
        /* =========================
           NAVY / PRIMARY
        ========================= */
        primary: {
          100: "#D6DEEA",
          200: "#ADBDD5",
          300: "#839CBE",
          400: "#5A7BA8",
          500: "#0A1F44",
          600: "#081837",
          700: "#06122A",
          800: "#040C1C",
          900: "#02060F",
        },

        /* =========================
           GOLD / SECONDARY
        ========================= */
        secondary: {
          100: "#D4AF37",
          200: "#E3B937",
        },

        /* =========================
           NEUTRALS
        ========================= */
        "base-white": "#F5F5F5",
        "base-black": "#1E293B",

        /* =========================
           SUCCESS / GREEN
        ========================= */
        green: {
          100: "#DDE6DF",
          200: "#BBCDBE",
          300: "#99B49E",
          400: "#779B7D",
          500: "#2F5233",
          600: "#264229",
          700: "#1D311F",
          800: "#142115",
          900: "#0B100A",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
