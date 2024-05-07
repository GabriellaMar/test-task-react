import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  // resolve: {
  //   alias: [{find : '@', replacement: path.resolve(__dirname, 'src')}]
   },
  base: '/test-task-react',
})
