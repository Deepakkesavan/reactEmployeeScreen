import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// export default defineConfig(({ }) => {
  // load .env files for the given mode if you need them
  // const env = loadEnv(mode, process.cwd());

  // const base =
  //   mode === "production"
  //     ? process.env.VITE_BASE || env.VITE_BASE || "/emsui/"
  //     : "http://localhost:4202/";
  export default defineConfig(() => {
    const base = "http://localhost:4202/"

  // const entry = "https://people-dev.clarium.tech/orgui/remoteEntry.js";
  const entry = "http://localhost:4206/remoteEntry.js";

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
        remotes: {
          orgchart: {
            type: "module",
            name: "orgchart",
            entry: entry,
          },
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          "react-router-dom": { singleton: true },
        },
      }),
    ],
    server: {
      port: 4202,
      cors: {
        origin: "*", // allow Angular host to load it
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
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
