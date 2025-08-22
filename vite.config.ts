import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfeHeaderSidebar",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.tsx",
        "./Sidebar": "./src/components/Sidebar.tsx",
      },
      remotes: {
        // host: "http://localhost:5173/assets/remoteEntry.js",
        host: "https://teste-teddy-finance.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "zustand", "react-router"],
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: true,
    cssCodeSplit: false
  },
  server: {
    host: true,
    port: 5001,
    watch: {
      usePolling: true,
    },
  },
})
