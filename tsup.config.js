import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.jsx"],
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
  dts: false,
  external: ["react", "react-dom", "next"],

  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxFactory = undefined;
    options.jsxFragment = undefined;
  },
});