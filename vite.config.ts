import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
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
          host: `${env.VITE_PRINCIPAL_URL || "https://mfe-header-sidebar.vercel.app"}/assets/remoteEntry.js`,
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
  }
})
