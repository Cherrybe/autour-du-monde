import { generateShades } from "./shared/utils";

interface AppConfig {
  title: string;
  ssr: boolean;
  fonts: {
    assets?: {
      prefix: string;
    };
    defaults: {
      weights: number[];
    };
    families: {
      name: string;
      provider: string;
    }[];
  };
  link?: {
    prefetch: string;
  };
}

// define base colors and generate their shades
const baseColors = {
  black: "#080808",
  white: "#fffef4",
  primary: "#1E88E5",
  secondary: "#424242",
  accent: "#82B1FF",
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FFC107",
} as const;

const colors = generateShades(baseColors);

const themes = {
  light: {
    bg: colors.white[50],
    fg: colors.black[95],
  },
  dark: {
    bg: colors.black[95],
    fg: colors.white[50],
  },
};

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const typography = {
  minVw: 12,
  maxVw: 18,
  minSize: 14,
  maxSize: 18,
  scaleRatio: 1.25,
};

const spacers = [4, 8, 12, 16, 24, 32, 40, 48, 56, 64];

export const app: AppConfig = {
  title: "Autour du Monde",
  ssr: true,
  fonts: {
    assets: {
      prefix: "/fonts/",
    },
    defaults: {
      weights: [300, 400, 500, 700, 900],
    },
    families: [
      {
        name: "Inter",
        provider: "local",
      },
      {
        name: "Geist Mono",
        provider: "google",
      },
    ],
  },
  link: {
    prefetch: "visibility", // nuxt default
  },
};

export default {
  breakpoints,
  colors,
  themes,
  typography,
  spacers,
};
