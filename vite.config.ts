import type { UserConfig } from "vite";
import path from 'path';
console.log(path.resolve(__dirname, "blades-in-the-dark-rebooted.ts"))

const config: UserConfig = {
  publicDir: "assets",
  root: "src/",
  base: "/systems/blades-in-the-dark-rebooted/",
  server: {
    port: 30001,
    open: true,
    proxy: {
      "^(?!/systems/blades-in-the-dark-rebooted)": "http://localhost:30000/",
      "/socket.io": {
        target: "ws://localhost:30000",
        ws: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: "blades-in-the-dark-rebooted",
      entry: path.resolve(__dirname, "src/blades-in-the-dark-rebooted.ts"),
      formats: ["es"],
      fileName: "blades-in-the-dark-rebooted",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "blades-in-the-dark-rebooted.css";
          return assetInfo.name;
        },
      },
    },
  },
};

export default config;
