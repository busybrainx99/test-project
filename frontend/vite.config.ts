import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Bind Vite server to all network interfaces
    port: 5173,
  },
  plugins: [react(), TanStackRouterVite()],
})


