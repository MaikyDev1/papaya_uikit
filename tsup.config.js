import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.jsx"],
  format: ["esm", "cjs"],
  clean: true,
  banner: { js: '"use client";' },
  sourcemap: true,
  dts: false,

  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "next",
  ],

  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});