import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ViteFontsPlugin from "vite-plugin-fonts";

export default defineConfig({
  plugins: [
    react(),
    ViteFontsPlugin({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "400,700",
          },
        ],
      },
    }),
  ],
});
