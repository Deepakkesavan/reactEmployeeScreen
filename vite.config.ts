import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd());

  const base = "./";

  // const entry = "https://people-dev.clarium.tech/orgui/remoteEntry.js";



  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: "empRemote",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/RemoteApp.jsx",
        },
        // remotes: {
        //   orgchart: {
        //     type: "module",
        //     name: "orgchart",
        //     entry: entry,
        //   },
        // },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          "react-router-dom": { singleton: true },
        },
      }),
    ],

    preview: {
      port: 4202,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      target: "esnext",
      outDir: "dist",
      minify: false,
      sourcemap: true,
      cssCodeSplit: true,
    },
  };
});
