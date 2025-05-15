import { defineConfig, presetTypography } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["DM Sans", "Blinker"],
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  theme: {
    colors: {
      primary: "#101D3A",
      primary20: "#1D2B5E",
      primary30: "#293C85",
      secondary: "#BC792B",
      secondary10: "#EEB674",
      netral: "#1D1D1D",
      netral10: "#B3B3B3",
      netral20: "#F4F4F4",
      netral30: "#EEF2FF",
    },
    fontFamily: {
      header: ["Blinker", "sans-serif"],
      body: ["Sora", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
    },
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  shortcuts: {
    // started off adding these classes to all tags...
    "header-text": "text-primary font-header",
    "subhead-text": "f-s-1 font-body text-gray fw-400",
    "body-text": "font-body fw-300 font-size-4",
  },

  rules: [],
});
